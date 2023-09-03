export enum Lang {
    FR = 'fr',
    EN = 'en'
}

export let currentLang = Lang.EN;

export function YoE(y: number): string {
    switch(currentLang) {
        case Lang.FR:
            return y === 1 ? "1 an" : `${y} ans`;
        case Lang.EN:
            return y === 1 ? "1 yr" : `${y} yrs`;
    }
}