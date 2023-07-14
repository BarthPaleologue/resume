import { Header } from './header';
import './styles/App.scss';

export default function Home() {
  return (
    <main className='App'>
      <Header />
      <div className="panelContainer">
        <div className="leftPanel">
          <section>
            <h2><span className="icon formation-icon"></span>Formation</h2>
            <div>
              <h3>Diplôme d&apos;Ingénieur - Télécom Paris</h3>
              <h4>Septembre 2021 à Juillet 2024</h4>
              <p>Formation généraliste spécialisée en graphisme et science des données.</p>
            </div>
            <div>
              <h3>Classe Prépa MPSI/MP - Lycée Clemenceau Nantes</h3>
              <h4>Septembre 2019 à Juin 2021</h4>
              <p>Formation scientifique généraliste en maths, physique et informatique.</p>
            </div>
          </section>
          <section>
            <h2><span className="icon experience-icon"></span>Expérience</h2>
            <div>
              <h3>Univers Procédural</h3>
              <h4>Depuis Juin 2021</h4>
              <ul>
                <li>Création de programmes et utilitaires Rust de génération de terrain</li>
                <li>Gestion sécurisée du multithreading</li>
                <li>Utilisation de WebAssembly pour des performances maximales</li>
                <li>Conception d&apos;un niveau de détail dynamique pour les planètes</li>
                <li>Conception d&apos;un shader d&apos;atmosphère volumétrique</li>
                <li>Modélisation d&apos;objets sur Blender</li>
                <li>Organisation d&apos;un projet très vaste sur le schéma MVC</li>
              </ul>
            </div>
            <div>
              <h3>Pipeline de simulation de fluide 3D</h3>
              <h4>Avril 2023 à Juin 2024 à Telecom Paris</h4>
              <ul>
                <li>Simulation du fluide 3D en C++ basé sur un papier de recherche</li>
                <li>Utilisation de la librairie OpenVDB pour la transformation en volume</li>
                <li>Utilisation de Blender pour le rendu final</li>
                <li>Utilisation des soft skills pour assurer le travail en équipe</li>
              </ul>
            </div>
            <div>
              <h3>Stage dans un laboratoire de recherche (<a href="http://www.ls2n.fr/">LS2N</a>)</h3>
              <h4>Août 2022 à Nantes</h4>
              <ul>
                <li>Coopération en méthode agile avec un chercheur</li>
                <li>Conception d&apos;une visualisation interactive en Python</li>
                <li>Création d&apos;une visualisation innovante pour les structure de treillis</li>
              </ul>
            </div>
            <div>
              <h3>Application graphique de résolution de labyrinthe JAVA</h3>
              <h4>Décembre 2021 à Février 2022 à Telecom Paris</h4>
              <ul>
                <li>GUI intuitive et polyvalente avec Swing</li>
                <li>Génération de labyrinthe basée sur l&apos;algorithme de Prim</li>
              </ul>
            </div>
            <div hidden>
              <h3>Sites Web pour le forum de Télécom Paris</h3>
              <h4>Septembre 2021 à Février 2023 à Telecom Paris</h4>
              <ul>
                <li>Maintenance d&apos;un Frontend responsive moderne</li>
                <li hidden>Création d&apos;un Backend Java Tomcat</li>
                <li>Amélioration du Backend Django</li>
                <li>Génération dynamique de PDF</li>
              </ul>
            </div>
            <div>
              <h3>Simulation d&apos;ondes sphériques en GLSL sur le web</h3>
              <h4>Juillet 2021</h4>
              <ul>
                <li>Création d&apos;un fragment shader en GLSL</li>
                <li>Interface graphique pour communiquer avec le shader</li>
              </ul>
            </div>
            <div hidden>
              <h3>Interface de rangement de films pour Windows</h3>
              <h4>Février 2021</h4>
              <ul>
                <li>Développement avec Electron et NodeJS</li>
                <li>Récupération des affiches par Web Scraping</li>
                <li hidden>Création d&apos;une application d&apos;installation</li>
              </ul>
            </div>
            <div hidden>
              <h3>Détection des fausses informations par IA</h3>
              <h4>Septembre 2020 à Juin 2021 au Lycée Clemenceau (Nantes)</h4>
              <ul>
                <li>Utilisation de Pandas, Numpy pour traiter les données</li>
                <li>Conception d&apos;un réseau de neurones convolutif avec Keras</li>
                <li>Utilisation des grandes techniques de NLP</li>
              </ul>
            </div>
            <div hidden>
              <h3>Réseau de neurones GAN</h3>
              <h4>Octobre 2019 à Juillet 2020</h4>
              <ul>
                <li>Manipulation d&apos;images avec Pillow</li>
                <li>Processing des données avec numpy</li>
                <li>Création du réseau avec l&apos;API Keras de Tensorflow</li>
                <li>Utilisation de Jupyter Notebook</li>
              </ul>
            </div>
            <div hidden>
              <h3>Réseau de neurones convolutifs pour MNIST</h3>
              <h4>Janvier 2019</h4>
              <ul>
                <li>Utilisation de TensorflowJS</li>
                <li>Utilisation de l&apos;API Keras de Tensorflow</li>
                <li>Création d&apos;une interface graphique web d&apos;évaluation du modèle</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="rightPanel">
          <section>
            <h2><span className="icon contact-icon"></span>Contact</h2>
            <div>
              <p>Palaiseau, France</p>
              <p>+33 6 37 29 67 37</p>
              <p><a href="mailto:barth@paleologue.fr">barth@paleologue.fr</a></p>
            </div>
          </section>
          <section>
            <h2><span className="icon skill-icon"></span>Compétences</h2>

            <div>
              <h3>Général</h3>
              <p>Soft Skills</p>
              <p>Git <span className="yearsOfExperience">(6 ans)</span></p>
            </div>
            <div>
              <h3>Dev Web</h3>
              <p>HTML / CSS / JS (9 ans)</p>
              <p>React & Typescript (4 ans)</p>
              <p>Webpack (3 ans)</p>
              <p>WebAssembly (2 ans)</p>
              <p>Django (1 an)</p>
            </div>
            <div>
              <h3>Graphismes</h3>
              <p>WebGL (BabylonJS) (9 ans)</p>
              <p>D3.JS (1 an)</p>
              <p>Blender (1 an)</p>
              <p>Seaborn (1 an)</p>
              <p>OpenVDB C++ (1 an)</p>
            </div>
            <div hidden>
              <h3>Machine Learning</h3>
              <p>Numpy / Sklearn / Keras / Pandas (3 ans)</p>
            </div>
            <div hidden>
              <h3>Desktop</h3>
              <p>C / C++ (7 ans)</p>
              <p>Rust (2 ans)</p>
              <p>Java / Java Swing (1 an)</p>
              <p>Electron (1 an)</p>
            </div>
            <div hidden>
              <h3>Mobile</h3>
              <p>Android Kotlin (1 an)</p>
            </div>
            <div hidden>
              <h3>Autres</h3>
              <p>SQL (2 ans)</p>
              <p>OCAML (1 an)</p>
            </div>
          </section>
          <section>
            <h2><span className="icon language-icon"></span>Langues</h2>
            <p>Français (Natif)</p>
            <p>Anglais (C1)</p>
            <p>Japonais (B1)</p>
            <p hidden>Espagnol (A2)</p>
          </section>
          <section>
            <h2><span className="icon hobby-icon"></span>Loisirs</h2>
            <p>Piano (5 ans)</p>
            <p>Flûte à bec (10 ans)</p>
            <p>Jeux vidéos</p>
            <p>Course à pied</p>
          </section>
        </div>
      </div>
    </main>
  )
}
