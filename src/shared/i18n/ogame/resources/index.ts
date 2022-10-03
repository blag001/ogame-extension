import { LanguageKey } from "../../LanguageKey";
import { de } from './de';
import { en } from './en';
import { dk } from './dk';
import { cz } from './cz';
import { hr } from './hr';
import { si } from './si';
import { pt_pt } from './pt_pt';
import { es_ar } from './es_ar';
import { it } from './it';
import { fr } from './fr';
import { ResourceTranslations } from "./types";

const translations: Record<LanguageKey, ResourceTranslations> = {
    cz,
    de,
    dk,
    en,
    es_ar,
    fr,
    hr,
    it,
    pt_pt,
    si,
};
export default translations;