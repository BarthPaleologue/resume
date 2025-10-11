import { Lang, S, currentLang } from "../internationalization";
import { settings } from "./settings";

export type Skill = {
  title: string;
  yoe?: number;
  hidden?: boolean;
};

export type SkillList = {
  title: string;
  skills: Skill[];
  hidden?: boolean;
};

export const skills: SkillList[] = [
  {
    title: S({ fr: "Humaines", en: "Human" }),
    skills: [
      {
        title: S({
          fr: "Communication non violente",
          en: "Non-violent communication",
        }),
      },
      {
        title: S({
          fr: "Esprit d'équipe et autonomie",
          en: "Teamwork / Autonomy",
        }),
      },
    ],
  },
  {
    title: S({ fr: "Générales", en: "General" }),
    skills: [
      { title: "Git", yoe: 7 },
      { title: S({ fr: "Accessibilité", en: "Accessibility" }), yoe: 3 },
      {
        title: S({ fr: "Enjeux RSE", en: "CSR issues" }),
        yoe: 2,
        hidden: true,
      },
    ],
  },
  {
    title: S({ fr: "Rendu 3D", en: "3D Rendering" }),
    skills: [
      { title: "ThreeJS / BabylonJS", yoe: 8 },
      { title: "Unity C#", yoe: 1 },
      { title: "D3.JS, Altair, Tableau", yoe: 1, hidden: true },
      { title: "Blender", yoe: 1, hidden: true },
      { title: "OpenVDB C++", yoe: 1, hidden: true },
      { title: "OpenGL", yoe: 3 },
    ],
  },
  {
    title: S({ fr: "Programmation", en: "Programming" }),
    skills: [
      { title: "C, C++, Qt", yoe: 5 },
      { title: "JavaScript / TS", yoe: 9 },
      { title: "Python / Data Science", yoe: 6 },
      { title: "Webpack", yoe: 3, hidden: true },
      { title: "Rust / WASM", yoe: 2 },
      { title: "Java, Kotlin", yoe: 2, hidden: true },
      { title: "Django, NextJS", yoe: 1, hidden: true },
    ],
  },
  {
    title: "Machine Learning",
    skills: [{ title: "Numpy / Sklearn / Keras / Pandas", yoe: 3 }],
    hidden: settings.showPicture,
  },
  {
    title: "Desktop",
    skills: [
      { title: "C / C++", yoe: 7 },
      { title: "Rust", yoe: 2 },
      { title: "Java / Java Swing", yoe: 1 },
      { title: "Electron", yoe: 1 },
    ],
    hidden: true,
  },
  {
    title: "Mobile",
    skills: [
      { title: "Android Kotlin", yoe: 1 },
      { title: "Flutter", yoe: 1 },
    ],
    hidden: true,
  },
];
