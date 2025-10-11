import { S } from "../internationalization";

export type Formation = {
  title: string;
  url?: string;
  when: string;
  what: string;
};

export const formations: Formation[] = [
  {
    title: S({
      fr: "Diplôme d'Ingénieur à l'Institut Polytechnique de Paris",
      en: "Master's Degree at Telecom Paris",
    }),
    url: S({
      fr: "https://www.ip-paris.fr/",
      en: "https://www.ip-paris.fr/en",
    }),
    when: S({
      fr: "Septembre 2021 à Juillet 2024 à Paris",
      en: "September 2021 to July 2024 in Paris",
    }),
    what: S({
      fr: "Master sélectif généraliste spécialisé en <b>informatique graphique</b> et <b>science des données</b> à <b>Télécom Paris</b> (n°1 sur le numérique) en M1 puis à <b>l'X</b> en M2.",
      en: "Selective generalist master's degree specialized in <b>computer graphics</b> and <b>data science</b> at <b>Télécom Paris</b> (n°1 in digital) in M1 then at <b>l'X</b> in M2.",
    }),
  },
  {
    title: S({
      fr: "Classe Préparatoire MPSI/MP au lycée Clemenceau",
      en: "Scientific preparatory class",
    }),
    when: S({
      fr: "Septembre 2019 à Juin 2021 à Nantes",
      en: "September 2019 to June 2021 in Nantes",
    }),
    what: S({
      fr: "",
      en: "Generalist intensive scientific training in <b>Maths, Physics and Computer Science</b>, followed by the competitive exam to enter an engineering school.",
    }),
  },
];
