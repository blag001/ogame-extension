import { BuildingType } from "../../../buildings/BuildingType";
import { BuildingTypes } from "../../../buildings/BuildingTypes";
import { CostAndTimeReduction } from "../../common-interfaces";
import { LifeformBonusType, LifeformBonusTypeId } from "../../LifeformBonusType";
import { LifeformTechnologyType } from "../../LifeformTechnologyType";
import { BuildingCostAndTimeReductionLifeformTechnology } from "../interfaces";
import { LifeformTechnology } from "../LifeformTechnology";

class OptimisedSiloConstructionMethodClass extends LifeformTechnology implements BuildingCostAndTimeReductionLifeformTechnology {
    public constructor() {
        super({
            metal: {
                baseCost: 220_000,
                increaseFactor: 1.3,
            },
            crystal: {
                baseCost: 110_000,
                increaseFactor: 1.3,
            },
            deuterium: {
                baseCost: 110_000,
                increaseFactor: 1.3,
            },
            energy: {
                baseCost: 0,
                increaseFactor: 1,
            },
        });
    }

    public get bonuses(): LifeformBonusType[] {
        return BuildingTypes.filter(b => this.appliesTo(b))
            .flatMap<LifeformBonusType>(b => [
                {
                    type: LifeformBonusTypeId.TechTimeReduction,
                    tech: b,
                },
                {
                    type: LifeformBonusTypeId.TechCostReduction,
                    tech: b,
                },
            ]);
    }

    public appliesTo(building: BuildingType): boolean {
        return building == BuildingType.missileSilo;
    }

    public getBuildingCostAndTimeReduction(building: BuildingType, level: number): CostAndTimeReduction {
        if (!this.appliesTo(building)) {
            return { cost: 0, time: 0 };
        }

        const costReductionPerLevel = 0.00_1; //0.1%
        const maxCostReduction = 0.5; //50%;

        const timeReductionPerLevel = 0.00_2; //0.2%
        const maxTimeReduction = 0.99; //99%

        return {
            cost: Math.min(maxCostReduction, costReductionPerLevel * level),
            time: Math.min(maxTimeReduction, timeReductionPerLevel * level),
        };
    }

    public get type(): LifeformTechnologyType {
        return LifeformTechnologyType.optimisedSiloConstructionMethod;
    }
}

export const OptimisedSiloConstructionMethod = new OptimisedSiloConstructionMethodClass();
