import { S } from "../internationalization";

export type You = {
  name: string;
  phoneNumber: string;
  email: string;
  onlinePortfolio: string;
  location: string;
  lookingFor: string;
};

export const you: You = {
  name: "Barthélemy Paléologue",
  phoneNumber: "+33 6 37 29 67 37",
  email: "barth@paleologue.fr",
  onlinePortfolio: "https://barth.paleologue.fr",
  location: "Palaiseau, France",
  lookingFor: S({
    fr: "A la recherche d'un poste d'ingénieur en informatique graphique",
    en: "Looking for a position as a computer graphics engineer",
  }),
};
