import { S } from "../internationalization";

export type Formation = {
    title: string;
    url?: string;
    when: string;
    what: string;
}

export const formations: Formation[] = [
    {
        title: S({ fr: "Diplôme d'Ingénieur à Telecom Paris", en: "Master's Degree at Telecom Paris" }),
        url: S({ fr: "https://www.telecom-paris.fr/", en: "https://www.telecom-paris.fr/en/home" }),
        when: S({ fr: "Septembre 2021 à Juillet 2024 à Paris", en: "September 2021 to July 2024 in Paris" }),
        what: S({
            fr: "Formation généraliste spécialisée en <b>informatique graphique</b> et <b>science des données</b> dans la <b>meilleure école</b> Française sur le numérique.",
            en: "Generalist training specialized in <b>computer graphics</b> and <b>data science</b> in the <b>best French school</b> in the digital field."
        })
    },
    {
        title: S({ fr: "Classe Prépa MPSI/MP au lycée Clemenceau", en: "Scientific preparatory class" }),
        when: S({ fr: "Septembre 2019 à Juin 2021 à Nantes", en: "September 2019 to June 2021 in Nantes" }),
        what: S({
            fr: "Formation scientifique intensive généraliste en <b>Maths, Physique et Informatique</b>, suivie du concours pour intégrer une école d'ingénieur.",
            en: "Generalist intensive scientific training in <b>Maths, Physics and Computer Science</b>, followed by the competitive exam to enter an engineering school."
        })
    }
]