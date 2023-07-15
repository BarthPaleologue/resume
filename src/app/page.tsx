import { AccessLinkIcon } from './accessLinkIcon';
import { FormationContainer } from './formationContainer';
import { formations } from './formations';
import { Header } from './header';
import './styles/App.scss';

export default function Home() {
  return (
    <main className='App'>
      <Header />
      <div className="panelContainer">
        <div className="leftPanel">
          <section className="formation">
            <h2><span className="icon formation-icon inverted"></span>Formation</h2>
            {formations.map((formation) => (
              <FormationContainer
                formation={formation} />
            ))}
          </section>
          <section>
            <h2><span className="icon experience-icon inverted"></span>Expérience</h2>
            <div>
              <h3>Univers Procédural <AccessLinkIcon url="https://medium.com/@barth_29567/procedural-gas-giants-f2a61bc6bd97" /></h3>
              <h4>Juin 2021 - Aujourd'hui</h4>
              <ul>
                <li>Utilisation de <b>Rust</b> et <b>WASM</b> pour des performances maximales</li>
                <li>Conception d'effets visuels en <b>GLSL</b> (atmosphère, nuages...)</li>
                <li>Modélisation d&apos;objets sur <b>Blender</b></li>
                <li>Organisation d&apos;un projet très vaste sur le schéma <b>MVC</b></li>
              </ul>
            </div>
            <div>
              <h3>Visualisation de la popularité des prénoms <AccessLinkIcon url="https://medium.com/@barth_29567/procedural-gas-giants-f2a61bc6bd97" /></h3>
              <h4>Juin 2023 à Telecom Paris</h4>
              <ul>
                <li>Création d'une <b>carte de France interactive</b> avec <b>D3.JS</b></li>
                <li><b>Optimisation</b> des données pour des <b>intéractions instantannées</b></li>
                <li><b>Organisation du travail</b> d&apos;équipe avec <b>Git</b> et les <b>soft skills</b></li>
              </ul>
            </div>
            <div>
              <h3>Pipeline de simulation de fluide 3D <AccessLinkIcon url="https://medium.com/@barth_29567/procedural-gas-giants-f2a61bc6bd97" /></h3>
              <h4>Avril 2023 - Juin 2023 à Telecom Paris</h4>
              <ul>
                <li>Simulation du fluide 3D en <b>C++</b> basé sur un <b>papier de recherche</b></li>
                <li>Utilisation de la librairie <b>OpenVDB</b> pour la transformation en volume</li>
                <li>Utilisation de <b>Blender Cycles</b> pour le rendu final</li>
                <li>Utilisation des <b>soft skills</b> pour faciliter le <b>travail en équipe</b></li>
              </ul>
            </div>
            <div hidden>
              <h3>Application de Todo List <AccessLinkIcon url="https://barth.paleologue.fr/todo" /></h3>
              <h4>[undefined] à Telecom Paris</h4>
              <ul>
                <li>Conception avec <b>Typescript</b> et <b>React</b></li>
                <li>Organisation du travail d'équipe avec <b>Git</b> et les <b>soft skills</b></li>
              </ul>
            </div>
            <div hidden>
              <h3>Application Android</h3>
              <h4>[undefined] à Telecom Paris</h4>
              <ul>
                <li>Utilisation de <b>Kotlin</b> avec <b>Android Studio</b></li>
                <li>Conception d'une interface <b>accessible</b> et <b>intuitive</b></li>
              </ul>
            </div>
            <div>
              <h3>Stage dans un laboratoire de recherche <AccessLinkIcon url="https://www.ls2n.fr/" /></h3>
              <h4>Août 2022 au LS2N à Nantes</h4>
              <ul>
                <li><b>Coopération</b> en <b>méthode agile</b> avec un chercheur</li>
                <li>Conception d&apos;une visualisation interactive avec <b>Pygame</b></li>
                <li>Création d&apos;une <b>représentation innovante</b> pour les structure de treillis</li>
              </ul>
            </div>
            <div>
              <h3>Application de résolution de labyrinthe JAVA <AccessLinkIcon url="https://www.ls2n.fr/" /></h3>
              <h4>Décembre 2021 - Février 2022 à Telecom Paris</h4>
              <ul>
                <li>GUI intuitive et polyvalente avec <b>Swing</b></li>
                <li>Génération de labyrinthe basée sur <b>l&apos;algorithme de Prim</b></li>
              </ul>
            </div>
            <div hidden>
              <h3>Sites Web pour le forum de Télécom Paris <AccessLinkIcon url="https://forum.telecom-paris.fr/" /></h3>
              <h4>Septembre 2021 - Février 2023 à Telecom Paris</h4>
              <ul>
                <li>Maintenance d&apos;un Frontend responsive moderne</li>
                <li hidden>Création d&apos;un Backend Java Tomcat</li>
                <li>Amélioration du Backend Django</li>
                <li>Génération dynamique de PDF</li>
              </ul>
            </div>
            <div hidden>
              <h3>Simulation d'interférences ondulatoires <AccessLinkIcon url="https://www.ls2n.fr/" /></h3>
              <h4>Juillet 2021</h4>
              <ul>
                <li>Parallélisation grâce à un shader <b>GLSL</b></li>
              </ul>
            </div>
            <div hidden>
              <h3>Interface de rangement de films pour Windows <AccessLinkIcon url="https://www.ls2n.fr/" /></h3>
              <h4>Février 2021</h4>
              <ul>
                <li>Développement avec Electron et NodeJS</li>
                <li>Récupération des affiches par Web Scraping</li>
                <li hidden>Création d&apos;une application d&apos;installation</li>
              </ul>
            </div>
            <div hidden>
              <h3>Détection des fausses informations par IA <AccessLinkIcon url="https://www.ls2n.fr/" /></h3>
              <h4>Septembre 2020 - Juin 2021 au Lycée Clemenceau (Nantes)</h4>
              <ul>
                <li>Utilisation de Pandas, Numpy pour traiter les données</li>
                <li>Conception d&apos;un réseau de neurones convolutif avec Keras</li>
                <li>Utilisation des grandes techniques de NLP</li>
              </ul>
            </div>
            <div hidden>
              <h3>Réseau de neurones GAN <AccessLinkIcon url="https://www.ls2n.fr/" /></h3>
              <h4>Octobre 2019 - Juillet 2020</h4>
              <ul>
                <li>Manipulation d&apos;images avec Pillow</li>
                <li>Processing des données avec numpy</li>
                <li>Création du réseau avec l&apos;API Keras de Tensorflow</li>
                <li>Utilisation de Jupyter Notebook</li>
              </ul>
            </div>
            <div hidden>
              <h3>Réseau de neurones convolutifs pour MNIST <AccessLinkIcon url="https://www.ls2n.fr/" /></h3>
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
            <h2><span className="icon contact-icon inverted"></span>Contact</h2>
            <div>
              <p><span className="icon location-icon"></span>Palaiseau, France</p>
              <p><span className="icon phone-icon"></span>+33 6 37 29 67 37</p>
              <p><span className="icon email-icon"></span><a href="mailto:barth@paleologue.fr">barth@paleologue.fr</a></p>
            </div>
          </section>
          <section>
            <h2><span className="icon skill-icon inverted"></span>Compétences</h2>

            <div>
              <h3>Travail d&apos;équipe</h3>
              <p>Git <span className="yearsOfExperience">(6 ans)</span></p>
              <p>Soft Skills</p>
            </div>
            <div>
              <h3>Dev Web</h3>
              <p>HTML, CSS, JS (9 ans)</p>
              <p>React, Typescript (4 ans)</p>
              <p>Webpack (3 ans)</p>
              <p>Rust, WebAssembly (2 ans)</p>
              <p>Django, NextJS (1 an)</p>
            </div>
            <div>
              <h3>Graphismes</h3>
              <p>WebGL BabylonJS (9 ans)</p>
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
            <div>
              <h3>Autres</h3>
              <p>Accessibilité (3 ans)</p>
              <p>Enjeux RSE (2 ans)</p>
              <p hidden>SQL (2 ans)</p>
              <p hidden>OCAML (1 an)</p>
            </div>
          </section>
          <section>
            <h2><span className="icon language-icon inverted"></span>Langues</h2>
            <div>
              <p>Français (Natif)</p>
              <p>Anglais (C1)</p>
              <p>Japonais (B1)</p>
              <p hidden>Espagnol (A2)</p>
            </div>
          </section>
          <section>
            <h2><span className="icon hobby-icon inverted"></span>Loisirs</h2>
            <div>
              <p>Piano (5 ans)</p>
              <p>Flûte à bec (10 ans)</p>
              <p>Course à pied</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
