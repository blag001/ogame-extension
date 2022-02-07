import { getQueryParameters } from "../../shared/utils/getQueryParameters";
import { initExpeditionTracking } from "./expedition-tracking";
import { initDebrisFieldReportTracking } from "./debris-field-report-tracking";

import './styles.scss';

const queryParams = getQueryParameters(location.search);
if(queryParams.page == 'messages') {
    initExpeditionTracking();
    // initCombatReportTracking();
    initDebrisFieldReportTracking();
}