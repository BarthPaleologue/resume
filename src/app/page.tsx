import { AccessLinkIcon } from './accessLinkIcon';
import { Experience, ExperienceContainer } from './experienceContainer';
import { experiences } from './experiences';
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
            {formations.map((formation) => (<FormationContainer key={formation.title} formation={formation} />))}
          </section>
          <section>
            <h2><span className="icon experience-icon inverted"></span>Expérience <AccessLinkIcon inverted url='https://barth.paleologue.fr' /></h2>
            {experiences.map((experience: Experience) => (<ExperienceContainer key={experience.title} experience={experience} />))}
          </section>
        </div>
        <div className="rightPanel">
          <section className="contact">
            <h2><span className="icon contact-icon inverted"></span>Contact</h2>
            <div>
              <p><span className="icon location-icon"></span>Palaiseau, France</p>
              <p><span className="icon phone-icon"></span>+33 6 37 29 67 37</p>
              <p><span className="icon portfolio-icon"></span><a href="https://barth.paleologue.fr" target="_blank">Online portfolio</a></p>
              <p><span className="icon email-icon"></span><a href="mailto:barth@paleologue.fr">barth@paleologue.fr</a></p>
            </div>
          </section>
          <section>
            <h2><span className="icon skill-icon inverted"></span>Compétences</h2>
            <div>
              <h3>Général</h3>
              <p>Git (6 ans)</p>
              <p>Soft Skills</p>
              <p>Accessibilité (3 ans)</p>
              <p>Enjeux RSE (2 ans)</p>
            </div>
            <div>
              <h3>Graphismes</h3>
              <p>WebGL BabylonJS (8 ans)</p>
              <p>D3.JS, Altair, Tableau (&lt;1 an)</p>
              <p>Blender (1 an)</p>
              <p>OpenVDB C++ (&lt;1 an)</p>
            </div>
            <div>
              <h3>Programmation</h3>
              <p>HTML, CSS, JS (9 ans)</p>
              <p>React, Typescript (4 ans)</p>
              <p>Webpack (3 ans)</p>
              <p>C++ (5 ans)</p>
              <p>Rust, WebAssembly (2 ans)</p>
              <p>Java, Kotlin (2 ans)</p>
              <p hidden>Django, NextJS (1 an)</p>
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
