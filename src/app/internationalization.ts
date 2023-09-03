export enum Lang {
    FR = 'fr',
    EN = 'en'
}

export let currentLang = Lang.FR;

export function YoE(y: number): string {
    switch (currentLang) {
        case Lang.FR:
            return y === 1 ? "1 an" : `${y} ans`;
        case Lang.EN:
            return y === 1 ? "1 yr" : `${y} yrs`;
    }
}

/**
 * Can use any language for the title, when and what
 */
export class IString {
    map: Map<Lang, string>;
    constructor(map: Map<Lang, string>) {
        this.map = map;
    }

    get s(): string {
        const result = this.map.get(currentLang);
        if (result === undefined) return `[MISSING ${currentLang} TRANSLATION]`
        return result;
    }

    get(lang: Lang): string {
        const result = this.map.get(lang);
        if (result === undefined) return `[MISSING ${lang} TRANSLATION]`
        return result;
    }
}

export function S(json: { [key in Lang]: string }): IString {
    const map = new Map<Lang, string>();
    for (const [key, value] of Object.entries(json)) {
        map.set(key as Lang, value);
    }
    return new IString(map);
}