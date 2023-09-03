import { S } from "../internationalization";

export type Formation = {
    title: string;
    when: string;
    what: string;
}

export const formations: Formation[] = [
    {
        title: S({ fr: "Diplôme d'Ingénieur", en: "Master's Degree" }).s,
        when: S({ fr: "Septembre 2021 à Juillet 2024", en: "September 2021 to July 2024" }).s,
        what: S({ fr: "Formation généraliste spécialisée en <b>graphisme</b> et <b>science des données</b>.", en: "Generalist training specialized in <b>computer graphics</b> and <b>data science</b>." }).s
    },
    {
        title: S({ fr: "Classe Prépa MPSI/MP", en: "Preparatory Class MPSI/MP" }).s,
        when: S({ fr: "Septembre 2019 à Juin 2021", en: "September 2019 to June 2021" }).s,
        what: S({ fr: "Formation scientifique généraliste en <b>Maths, Physique et Informatique</b>.", en: "Generalist scientific training in <b>Maths, Physics and Computer Science</b>." }).s
    }
]