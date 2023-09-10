import { Lang, S, currentLang } from "../internationalization";
import { settings } from "./settings";

export type Skill = {
    title: string;
    yoe?: number;
    hidden?: boolean;
}

export type SkillList = {
    title: string;
    skills: Skill[];
    hidden?: boolean;
}

export const skills: SkillList[] = [
    {
        title: S({ fr: "Général", en: "General" }),
        skills: [
            { title: "Git", yoe: 6 },
            { title: "Soft skills" },
            { title: S({ fr: "Accessibilité", en: "Accessibility" }), yoe: 3 },
            { title: S({ fr: "Enjeux RSE", en: "CSR issues" }), yoe: 2 },
        ]
    },
    {
        title: S({ fr: "Graphismes", en: "Graphics" }),
        skills: [
            { title: "WebGL BabylonJS", yoe: 8 },
            { title: "D3.JS, Altair, Tableau", yoe: 1 },
            { title: "Blender", yoe: 1, hidden: true },
            { title: "OpenVDB C++", yoe: 1 },
        ]
    },
    {
        title: S({ fr: "Programmation", en: "Programming" }),
        skills: [
            { title: "HTML, CSS, JS", yoe: 9 },
            { title: "C, C++, Qt", yoe: 5 },
            { title: "React, Typescript", yoe: 4 },
            { title: "Webpack", yoe: 3 },
            { title: "Rust, WebAssembly", yoe: 2 },
            { title: "Java, Kotlin", yoe: 2 },
            { title: "Django, NextJS", yoe: 1, hidden: true },
        ]
    },
    {
        title: "Machine Learning",
        skills: [
            { title: "Numpy / Sklearn / Keras / Pandas", yoe: 3 },
        ],
        hidden: settings.showPicture
    },
    {
        title: "Desktop",
        skills: [
            { title: "C / C++", yoe: 7 },
            { title: "Rust", yoe: 2 },
            { title: "Java / Java Swing", yoe: 1 },
            { title: "Electron", yoe: 1 },
        ],
        hidden: true
    },
    {
        title: "Mobile",
        skills: [
            { title: "Android Kotlin", yoe: 1 },
            { title: "Flutter", yoe: 1 },
        ],
        hidden: true
    },
];