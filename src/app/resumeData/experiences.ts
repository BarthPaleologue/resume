import { S } from "../internationalization";

export type Experience = {
    title: string;
    url: string;
    when: string;
    what: string[];
    enabled: boolean;
}

export const experiences: Experience[] = [
    {
        title: S({ fr: "Simulation d'écosystème", en: "Ecosystem Simulation" }),
        url: "https://github.com/BarthPaleologue/inf633-2023-2024",
        when: S({ fr: "Septembre 2023 - Octobre 2023 à Telecom Paris", en: "September 2023 - October 2023 at Telecom Paris" }),
        what: [
            S({ fr: "Utilisation approfondie du <b>moteur 3D Unity</b>", en: "In-depth use of the <b>Unity 3D Engine</b>" }),
            S({ fr: "Apprentissage par <b>algorithmes génétiques</b>", en: "Machine Learning with <b>genetic algorithms</b>" }),
            S({ fr: "Animation procédurale avec <b>Cinématique Inverse</b>", en: "Procedural animation with <b>Inverse Kinematics</b>" }),
            S({ fr: "Utilisation du <b>Triplanar Mapping</b> pour peindre un terrain réaliste", en: "Use of <b>Triplanar Mapping</b> to paint a realistic terrain" }),
        ],
        enabled: false
    },
    {
        title: S({ fr: "Visualisation de la popularité des prénoms", en: "Birth Name Popularity Visualization" }),
        url: "https://github.com/BarthPaleologue/BirthNameViz",
        when: S({ fr: "Juin 2023 à Telecom Paris", en: "June 2023 at Telecom Paris" }),
        what: [
            S({ fr: "Création d'une <b>carte de France interactive</b> avec <b>D3.JS</b>", en: "Creation of an <b>interactive map of France</b> with <b>D3.JS</b>" }),
            S({ fr: "<b>Optimisation</b> des données pour des <b>intéractions instantannées</b>", en: "<b>Optimization</b> of data for <b>instant interactions</b>" }),
            S({ fr: "<b>Organisation du travail</b> d&apos;équipe avec <b>Git</b> et les <b>soft skills</b>", en: "<b>Teamwork organization</b> with <b>Git</b> and <b>soft skills</b>" })
        ],
        enabled: true
    },
    {
        title: S({ fr: "Pipeline de simulation et rendu de fluide 3D", en: "3D Fluid Simulation and Rendering Pipeline" }),
        url: "https://github.com/Konodinger/Liquid3D",
        when: S({ fr: "Avril 2023 - Juin 2023 à Telecom Paris", en: "April 2023 - June 2023 at Telecom Paris" }),
        what: [
            S({ fr: "Simulation du fluide 3D en <b>C++</b> basé sur un <b>papier de recherche</b>", en: "3D fluid simulation in <b>C++</b> based on a <b>research paper</b>" }),
            S({ fr: "Utilisation de la librairie <b>OpenVDB</b> pour la transformation en volume", en: "Use of the <b>OpenVDB</b> library for volume transformation" }),
            S({ fr: "Utilisation de <b>Blender Cycles</b> pour le rendu final", en: "Use of <b>Blender Cycles</b> for the final rendering" }),
            //S({ fr: "Utilisation des <b>soft skills</b> pour faciliter le <b>travail en équipe</b>", en: "Use of <b>soft skills</b> to facilitate <b>teamwork</b>" })
        ],
        enabled: true
    },
    {
        title: S({fr: "Moteur 3D avec rendu temps réel", en: "3D Engine with Real-Time Rendering"}),
        url: "https://github.com/BarthPaleologue/feather",
        when: S({fr: "Octobre 2022 - Octobre 2023", en: "October 2022 - October 2023"}),
        what: [
            S({fr: "Utilisation avancée de <b>C++</b> et <b>OpenGL</b> pour le rendu", en: "Advanced <b>C++</b> and <b>OpenGL</b> for rendering"}),
            S({fr: "Pipeline de <b>post-traitement</b> configurable", en: "Configurable <b>post-processing</b> pipeline"}),
            S({fr: "Support des <b>compute shaders</b>", en: "<b>Compute Shader</b> support"}),
        ],
        enabled: true
    },
    {
        title: S({ fr: "Application de Todo List", en: "Todo List Application" }),
        url: "https://barth.paleologue.fr/todo",
        when: S({ fr: "Mars 2023 - Avril 2023 à Telecom Paris", en: "March 2023 - April 2023 at Telecom Paris" }),
        what: [
            S({ fr: "Conception avec <b>Typescript</b> et <b>React</b>", en: "Design with <b>Typescript</b> and <b>React</b>" }),
            S({ fr: "Organisation du travail d'équipe avec <b>Git</b> et les <b>soft skills</b>", en: "Teamwork organization with <b>Git</b> and <b>soft skills</b>" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Application de dessin 2D", en: "2D Drawing Application" }),
        url: "https://github.com/BarthPaleologue/Paint4D",
        when: S({ fr: "Janvier 2023 - Mars 2023 à Telecom Paris", en: "January 2023 - March 2023 at Telecom Paris" }),
        what: [
            S({ fr: "Conception avec <b>Qt</b> et <b>C++</b> d'une interface graphique", en: "Design with <b>Qt</b> and <b>C++</b> of an intuitive interface" }),
            S({ fr: "Système de <b>sauvegarde</b> du travail de l'utilisateur", en: "User <b>work saving</b> system" }),
        ],
        enabled: false
    },
    {
        title: S({ fr: "Application Android", en: "Android Application" }),
        url: "https://github.com/BarthPaleologue/Stonks",
        when: S({ fr: "Septembre 2022 à Telecom Paris", en: "September 2022 at Telecom Paris" }),
        what: [
            S({ fr: "Utilisation de <b>Kotlin</b> avec <b>Android Studio</b>", en: "Use of <b>Kotlin</b> with <b>Android Studio</b>" }),
            S({ fr: "Conception d'une interface <b>accessible</b> et <b>intuitive</b>", en: "Design of an <b>accessible</b> and <b>intuitive</b> interface" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Stage au LS2N (Laboratoire de recherche)", en: "Research Internship at LS2N" }),
        url: S({ fr: "https://www.ls2n.fr/", en: "https://www.ls2n.fr/?lang=en" }),
        when: S({ fr: "Août 2022 à Nantes", en: "August 2022 in Nantes" }),
        what: [
            S({ fr: "Coopération en <b>méthode agile</b> avec un chercheur", en: "<b>Agile cooperation</b> with a researcher" }),
            S({ fr: "Conception d'une <b>visualisation interactive</b> avec <b>Pygame</b>", en: "Design of an <b>interactive visualization</b> with <b>Pygame</b>" }),
            //S({ fr: "Création d'une <b>représentation innovante</b> pour les structure de treillis", en: "Creation of an <b>innovative representation</b> for truss structures" })
        ],
        enabled: true
    },
    {
        title: S({ fr: "Univers Procédural", en: "Procedural Universe" }),
        url: "https://medium.com/@barth_29567/procedural-gas-giants-f2a61bc6bd97",
        when: S({ fr: "Juin 2021 - Aujourd'hui", en: "June 2021 - Today" }),
        what: [
            S({ fr: "Utilisation avancée de <b>Typescript</b>, <b>Rust</b> et <b>WebAssembly</b>", en: "Advanced <b>Typescript</b>, <b>Rust</b> and <b>WebAssembly</b>" }),
            S({ fr: "Conception d'effets visuels en <b>GLSL</b> (atmosphère, nuages...)", en: "Design of visual effects in <b>GLSL</b> (atmosphere, clouds...)" }),
            S({ fr: "Modélisation d'objets sur <b>Blender</b>", en: "3D Modeling with <b>Blender</b>" }),
            S({ fr: "Architecture avancée avec <b>NodeJS</b> et <b>Webpack</b>", en: "Advanced architecture with <b>NodeJS</b> and <b>Webpack</b>" }),
            //S({ fr: "Organisation d'un projet très vaste sur le schéma <b>MVC</b>", en: "Organization of a very large project on the <b>MVC</b> scheme" })
        ],
        enabled: true
    },
    {
        title: S({ fr: "Application de résolution de labyrinthe JAVA", en: "Java Maze Solver Application" }),
        url: "https://github.com/BarthPaleologue/maze-solver-generator",
        when: S({ fr: "Octobre 2021 - Mars 2022 à Telecom Paris", en: "October 2021 - March 2022 at Telecom Paris" }),
        what: [
            S({ fr: "GUI intuitive et polyvalente avec <b>Swing</b>", en: "Intuitive and versatile GUI with <b>Swing</b>" }),
            S({ fr: "Génération de labyrinthe basée sur <b>l&apos;algorithme de Prim</b>", en: "Maze generation based on <b>Prim&apos;s algorithm</b>" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Site Web pour le forum de Télécom Paris", en: "Telecom Paris Forum Website" }),
        url: "https://forum.telecom-paris.fr/",
        when: S({ fr: "Septembre 2021 - Février 2023 à Telecom Paris", en: "September 2021 - February 2023 at Telecom Paris" }),
        what: [
            S({ fr: "Maintenance d'un Frontend responsive moderne", en: "Maintenance of a modern responsive Frontend" }),
            S({ fr: "Création d'un Backend Java Tomcat", en: "Creation of a Java Tomcat Backend" }),
            S({ fr: "Amélioration du Backend Django", en: "Improvement of the Django Backend" }),
            S({ fr: "Génération dynamique de PDF", en: "Dynamic PDF generation" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Simulation d'interférences ondulatoires", en: "Wave Interference Simulation" }),
        url: "https://www.ls2n.fr/",
        when: S({ fr: "Juillet 2021", en: "July 2021" }),
        what: [
            S({ fr: "Parallelisation grâce à un shader <b>GLSL</b>", en: "Parallelization thanks to a <b>GLSL</b> shader" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Interface de rangement de films pour Windows", en: "Movie Center" }),
        url: "https://github.com/BarthPaleologue/moviecenter",
        when: S({ fr: "Février 2021", en: "February 2021" }),
        what: [
            S({ fr: "Développement avec Electron", en: "Development with Electron" }),
            S({ fr: "Récupération des affiches par Web Scraping", en: "Recovery of posters by Web Scraping" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Détection des fausses informations par IA", en: "Fake News Detection with AI" }),
        url: "https://github.com/BarthPaleologue/FAKENEWS",
        when: S({ fr: "Septembre 2020 - Juin 2021 au Lycée Clemenceau (Nantes)", en: "September 2020 - June 2021 at Clemenceau High School (Nantes)" }),
        what: [
            S({ fr: "Utilisation de Pandas, Numpy pour traiter les données", en: "Use of Pandas, Numpy to process data" }),
            S({ fr: "Conception d'un réseau de neurones convolutif avec Keras", en: "Design of a convolutional neural network with Keras" }),
            S({ fr: "Utilisation des grandes techniques de NLP", en: "Use of major NLP techniques" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Génération d'image avec réseau de neurones GAN", en: "Image Generation with GAN" }),
        url: "https://github.com/BarthPaleologue/EdelGAN",
        when: S({ fr: "Octobre 2019 - Juillet 2020", en: "October 2019 - July 2020" }),
        what: [
            S({ fr: "Manipulation d'images avec Pillow", en: "Image manipulation with Pillow" }),
            S({ fr: "Processing des données avec numpy", en: "Data processing with numpy" }),
            S({ fr: "Création du réseau avec Keras", en: "Creation of the network with Keras" }),
            S({ fr: "Utilisation de Jupyter Notebook", en: "Use of Jupyter Notebook" })
        ],
        enabled: false
    },
    {
        title: S({ fr: "Réseau de neurones convolutifs pour MNIST", en: "Convolutional Neural Network for MNIST" }),
        url: "https://github.com/BarthPaleologue/MNIST",
        when: S({ fr: "Janvier 2019", en: "January 2019" }),
        what: [
            S({ fr: "Conception d'un réseau avec Keras", en: "Design of a network with Keras" }),
            S({ fr: "Création d'une interface web avec TensorflowJS", en: "Creation of a web interface with TensorflowJS" })
        ],
        enabled: false
    }
]