/*
<p>{currentLang === Lang.FR ? "Français (Natif)" : "French (Native)"}</p>
              <p>{currentLang === Lang.FR ? "Anglais" : "English"} (C1)</p>
              <p>{currentLang === Lang.FR ? "Japonais" : "Japanese"} (B1)</p>
              <p hidden>{currentLang === Lang.FR ? "Espagnol" : "Spanish"} (A2)</p>
              */

import { S } from "../internationalization"

export type Language = {
    title: string,
    level: string,
    hidden?: boolean
}

export const languages: Language[] = [
    {
        title: S({ fr: "Français", en: "French" }).s,
        level: S({ fr: "Natif", en: "Native" }).s
    },
    {
        title: S({ fr: "Anglais", en: "English" }).s,
        level: "C1"
    },
    {
        title: S({ fr: "Japonais", en: "Japanese" }).s,
        level: "B1"
    },
    {
        title: S({ fr: "Espagnol", en: "Spanish" }).s,
        level: "A2",
        hidden: true
    }
];