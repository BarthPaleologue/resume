import { Experience } from "./experienceContainer";

export const experiences: Experience[] = [
    {
        title: "Visualisation de la popularité des prénoms",
        url: "https://github.com/BarthPaleologue/BirthNameViz",
        when: "Juin 2023 à Telecom Paris",
        what: [
            "Création d'une <b>carte de France interactive</b> avec <b>D3.JS</b>",
            "<b>Optimisation</b> des données pour des <b>intéractions instantannées</b>",
            "<b>Organisation du travail</b> d&apos;équipe avec <b>Git</b> et les <b>soft skills</b>"
        ],
        enabled: true
    },
    {
        title: "Pipeline de simulation et rendu de fluide 3D",
        url: "https://github.com/Konodinger/Liquid3D",
        when: "Avril 2023 - Juin 2023 à Telecom Paris",
        what: [
            "Simulation du fluide 3D en <b>C++</b> basé sur un <b>papier de recherche</b>",
            "Utilisation de la librairie <b>OpenVDB</b> pour la transformation en volume",
            "Utilisation de <b>Blender Cycles</b> pour le rendu final",
            "Utilisation des <b>soft skills</b> pour faciliter le <b>travail en équipe</b>"
        ],
        enabled: true
    },
    {
        title: "Application de Todo List",
        url: "https://barth.paleologue.fr/todo",
        when: "Mars 2023 - Avril 2023 à Telecom Paris",
        what: [
            "Conception avec <b>Typescript</b> et <b>React</b>",
            "Organisation du travail d'équipe avec <b>Git</b> et les <b>soft skills</b>"
        ],
        enabled: false
    },
    {
        title: "Application de dessin 2D",
        url: "https://github.com/BarthPaleologue/Paint4D",
        when: "Octobre 2022 - Novembre 2022 à Telecom Paris",
        what: [
            "Conception avec Qt et C++ d'une interface intuitive",
        ],
        enabled: false
    },
    {
        title: "Application Android",
        url: "https://github.com/BarthPaleologue/Stonks",
        when: "Septembre 2022 à Telecom Paris",
        what: [
            "Utilisation de <b>Kotlin</b> avec <b>Android Studio</b>",
            "Conception d'une interface <b>accessible</b> et <b>intuitive</b>"
        ],
        enabled: false
    },
    {
        title: "Stage au LS2N (Laboratoire de recherche)",
        url: "https://www.ls2n.fr/",
        when: "Août 2022 à Nantes",
        what: [
            "<b>Coopération</b> en <b>méthode agile</b> avec un chercheur",
            "Conception d&apos;une visualisation interactive avec <b>Pygame</b>",
            //"Création d&apos;une <b>représentation innovante</b> pour les structure de treillis"
        ],
        enabled: true
    },
    {
        title: "Univers Procédural",
        url: "https://medium.com/@barth_29567/procedural-gas-giants-f2a61bc6bd97",
        when: "Juin 2021 - Aujourd'hui",
        what: [
            "Utilisation de <b>Rust</b> et <b>WASM</b> pour des performances maximales",
            "Conception d'effets visuels en <b>GLSL</b> (atmosphère, nuages...)",
            "Modélisation d'objets sur <b>Blender</b>",
            //"Organisation d'un projet très vaste sur le schéma <b>MVC</b>"
        ],
        enabled: true
    },
    {
        title: "Application de résolution de labyrinthe JAVA",
        url: "https://github.com/BarthPaleologue/maze-solver-generator",
        when: "Octobre 2021 - Mars 2022 à Telecom Paris",
        what: [
            "GUI intuitive et polyvalente avec <b>Swing</b>",
            "Génération de labyrinthe basée sur <b>l&apos;algorithme de Prim</b>"
        ],
        enabled: true
    },
    {
        title: "Site Web pour le forum de Télécom Paris",
        url: "https://forum.telecom-paris.fr/",
        when: "Septembre 2021 - Février 2023 à Telecom Paris",
        what: [
            "Maintenance d'un Frontend responsive moderne",
            "Création d'un Backend Java Tomcat",
            "Amélioration du Backend Django",
            "Génération dynamique de PDF"
        ],
        enabled: false
    },
    {
        title: "Simulation d'interférences ondulatoires",
        url: "https://www.ls2n.fr/",
        when: "Juillet 2021",
        what: [
            "Parallélisation grâce à un shader <b>GLSL</b>"
        ],
        enabled: false
    },
    {
        title: "Interface de rangement de films pour Windows",
        url: "https://github.com/BarthPaleologue/moviecenter",
        when: "Février 2021",
        what: [
            "Développement avec Electron",
            "Récupération des affiches par Web Scraping",
        ],
        enabled: false
    },
    {
        title: "Détection des fausses informations par IA",
        url: "https://github.com/BarthPaleologue/FAKENEWS",
        when: "Septembre 2020 - Juin 2021 au Lycée Clemenceau (Nantes)",
        what: [
            "Utilisation de Pandas, Numpy pour traiter les données",
            "Conception d'un réseau de neurones convolutif avec Keras",
            "Utilisation des grandes techniques de NLP"
        ],
        enabled: false
    },
    {
        title: "Génération d'image avec réseau de neurones GAN",
        url: "https://github.com/BarthPaleologue/EdelGAN",
        when: "Octobre 2019 - Juillet 2020",
        what: [
            "Manipulation d&apos;images avec Pillow",
            "Processing des données avec numpy",
            "Création du réseau avec Keras",
            "Utilisation de Jupyter Notebook"
        ],
        enabled: false
    },
    {
        title: "Réseau de neurones convolutifs pour MNIST",
        url: "https://github.com/BarthPaleologue/MNIST",
        when: "Janvier 2019",
        what: [
            "Conception d'un réseau avec Keras",
            "Création d'une interface web avec TensorflowJS"
        ],
        enabled: false
    }
]