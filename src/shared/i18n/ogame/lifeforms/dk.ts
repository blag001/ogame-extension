import { LifeformTranslations } from "./types";
import { en } from './en';
import { LifeformType } from "@/shared/models/ogame/lifeforms/LifeformType";

export const dk: LifeformTranslations = {
    ...en,
    [LifeformType.humans]: 'Mennesker',
};