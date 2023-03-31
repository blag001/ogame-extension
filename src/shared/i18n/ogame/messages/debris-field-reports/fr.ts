import { DebrisFieldReportMessages } from "./types";

export const fr: DebrisFieldReportMessages = {
    regex: [
        /Vous avez récolté (?<metal>.+) unités de métal et (?<crystal>.+) unités de cristal/i,
        /Vous avez récolté (?<metal>.+) unités de métal, (?<crystal>.+) unités de cristal et (?<deuterium>.+) de deutérium./i,
    ],
};