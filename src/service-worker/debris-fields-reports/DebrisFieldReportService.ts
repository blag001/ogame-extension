import { Message, MessageOgameMeta } from '../../shared/messages/Message';
import { MessageType } from '../../shared/messages/MessageType';
import { _throw } from '../../shared/utils/_throw';
import { MessageService } from '../MessageService';
import { DebrisFieldReportModule } from './DebrisFieldReportModule';
import { broadcastMessage } from '../../shared/communication/broadcastMessage';
import { DebrisFieldReportMessage, NewDebrisFieldReportMessage, TrackDebrisFieldReportMessage, TrackManualDebrisFieldReportMessage } from '../../shared/messages/tracking/debris-fields';
import { MessageTrackingErrorMessage } from '../../shared/messages/tracking/misc';
import { serviceWorkerUuid } from '@/shared/uuid';

export class DebrisFieldReportService implements MessageService {
    private readonly dfModule = new DebrisFieldReportModule();

    public async onMessage(message: Message<MessageType, any>): Promise<void> {
        switch (message.type) {
            case MessageType.TrackDebrisFieldReport: {
                const msg = message as TrackDebrisFieldReportMessage;
                const tryResult = await this.dfModule.tryTrackDebrisFieldReport(msg);
                if (!tryResult.success) {
                    const errorMessage: MessageTrackingErrorMessage = {
                        ogameMeta: message.ogameMeta,
                        type: MessageType.TrackingError,
                        data: {
                            id: msg.data.id,
                            type: 'debris-field-report',
                        },
                        senderUuid: serviceWorkerUuid,
                    };
                    await broadcastMessage(errorMessage);
                    return;
                }

                const { report, isAlreadyTracked } = tryResult.result;

                // broadcast "new df report available"
                if (!isAlreadyTracked) {
                    const newDfReportMessage: NewDebrisFieldReportMessage = {
                        ogameMeta: message.ogameMeta,
                        type: MessageType.NewDebrisFieldReport,
                        data: report,
                        senderUuid: serviceWorkerUuid,
                    };
                    await broadcastMessage(newDfReportMessage);
                }
                // send data of the specific expedition
                else {
                    const dfReportMessage: DebrisFieldReportMessage = {
                        ogameMeta: message.ogameMeta,
                        type: MessageType.DebrisFieldReport,
                        data: report,
                        senderUuid: serviceWorkerUuid,
                    };
                    await broadcastMessage(dfReportMessage);
                }
                break;
            }


            case MessageType.TrackManualDebrisFieldReport: {
                const msg = message as TrackManualDebrisFieldReportMessage;
                await this.dfModule.trackManualDebrisFieldReport(msg);
                
                const newDfReportMessage: NewDebrisFieldReportMessage = {
                    ogameMeta: message.ogameMeta,
                    type: MessageType.NewDebrisFieldReport,
                    data: msg.data,
                    senderUuid: serviceWorkerUuid,
                };
                await broadcastMessage(newDfReportMessage);
            }
        }
    }
}