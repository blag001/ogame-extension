import { LifeformBonusType, LifeformBonusTypeId } from "../../LifeformBonusType";
import { LifeformBuildingType } from "../../LifeformBuildingType";
import { LifeformTechnologyBonusLifeformBuilding } from "../interfaces";
import { LifeformBuilding } from "../LifeformBuilding";

class ChipMassProductionClass extends LifeformBuilding implements LifeformTechnologyBonusLifeformBuilding {
    public constructor() {
        super({
            metal: {
                baseCost: 55_000,
                increaseFactor: 1.5,
            },
            crystal: {
                baseCost: 50_000,
                increaseFactor: 1.5,
            },
            deuterium: {
                baseCost: 30_000,
                increaseFactor: 1.5,
            },
            energy: {
                baseCost: 70,
                increaseFactor: 1.05,
            },
        });
    }

    public get bonuses(): LifeformBonusType[] {
        return [{ type: LifeformBonusTypeId.LifeformResearchBonusBoost }];
    }
    
    public get type(): LifeformBuildingType {
        return LifeformBuildingType.chipMassProduction;
    }

    public getLifeformTechnologyBonus(level: number): number {
        const techBonus = 0.00_4; // 0.4%
        return techBonus * level;
    }
}

export const ChipMassProduction = new ChipMassProductionClass();