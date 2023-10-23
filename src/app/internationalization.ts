export enum Lang {
    FR = 'fr',
    EN = 'en'
}

export let currentLang = Lang.EN;

export function YoE(y: number): string {
    switch (currentLang) {
        case Lang.FR:
            return y === 1 ? "1 an" : `${y} ans`;
        case Lang.EN:
            return y === 1 ? "1 yr" : `${y} yrs`;
    }
}

export function S(iString: { [key in Lang]: string }): string {
    const result = iString[currentLang];
    if (result === undefined) return `[MISSING ${currentLang} TRANSLATION]`;
    return result;
}