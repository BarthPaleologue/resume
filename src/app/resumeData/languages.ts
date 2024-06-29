import { S } from "../internationalization"

export type Language = {
    title: string,
    icon?: string,
    level: string,
    hidden?: boolean
}

export const languages: Language[] = [
    {
        title: S({ fr: "Français", en: "French" }),
        icon: "🇫🇷",
        level: S({ fr: "Natif", en: "Native" })
    },
    {
        title: S({ fr: "Anglais", en: "English" }),
        icon: "🇬🇧",
        level: "C1"
    },
    {
        title: S({ fr: "Japonais", en: "Japanese" }),
        icon: "🇯🇵",
        level: "B1"
    },
    {
        title: S({ fr: "Espagnol", en: "Spanish" }),
        icon: "🇪🇸",
        level: "A2",
        hidden: true
    }
];