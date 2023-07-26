import { ExpeditionEventType, ExpeditionEventTypes } from "@/shared/models/expeditions/ExpeditionEventType";
import { LifeformTechnologyType } from "../../LifeformTechnologyType";
import { ExpeditionBonusLifeformTechnology } from "../interfaces";
import { LifeformTechnology } from "../LifeformTechnology";
import { LifeformBonusType, LifeformBonusTypeId } from "../../LifeformBonusType";

class TelekineticTractorBeamClass extends LifeformTechnology implements ExpeditionBonusLifeformTechnology {
    public constructor() {
        super({
            metal: {
                baseCost: 20_000,
                increaseFactor: 1.5,
            },
            crystal: {
                baseCost: 15_000,
                increaseFactor: 1.5,
            },
            deuterium: {
                baseCost: 7_500,
                increaseFactor: 1.5,
            },
            energy: {
                baseCost: 0,
                increaseFactor: 1,
            },
        });
    }

    public get bonuses(): LifeformBonusType[] {
        return ExpeditionEventTypes.filter(t => this.appliesTo(t))
            .map<LifeformBonusType>(event => ({
                type: LifeformBonusTypeId.ExpeditionBonus,
                event,
            }));
    }
    
    public appliesTo(type: ExpeditionEventType): boolean {
        return type == ExpeditionEventType.fleet;
    }
    
    public getExpeditionBonus(type: ExpeditionEventType, level: number): number {
        if(!this.appliesTo(type)) {
            return 0;
        }

        const bonusPerLevel = 0.00_2; //0.2%
        return bonusPerLevel * level;
    }

    public get type(): LifeformTechnologyType {
        return LifeformTechnologyType.telekineticTractorBeam;
    }
}

export const TelekineticTractorBeam = new TelekineticTractorBeamClass();
