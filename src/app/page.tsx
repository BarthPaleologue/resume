import { AccessLinkIcon } from './accessLinkIcon';
import { Experience, ExperienceContainer } from './experienceContainer';
import { experiences } from './experiences';
import { FormationContainer } from './formationContainer';
import { formations } from './formations';
import { Lang, YoE, currentLang } from './internationalization';
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
            {formations.map((formation) => (<FormationContainer key={formation.titleFR} formation={formation} />))}
          </section>
          <section>
            <h2><span className="icon experience-icon inverted"></span><AccessLinkIcon text={currentLang === Lang.FR ? "Expérience" : "Experience"} inverted url='https://barth.paleologue.fr' title="Online Portfolio" /></h2>
            {experiences.map((experience: Experience) => (<ExperienceContainer key={experience.titleFR} experience={experience} />))}
          </section>
        </div>
        <div className="rightPanel">
          <section className="contact">
            <h2><span className="icon contact-icon inverted"></span>Contact</h2>
            <div>
              <p><span className="icon location-icon"></span>Palaiseau, France</p>
              <p><span className="icon phone-icon"></span><a href="tel:+33637296737">+33 6 37 29 67 37</a></p>
              <p><span className="icon portfolio-icon"></span><a href="https://barth.paleologue.fr" target="_blank">{currentLang === Lang.FR ? "Portfolio en ligne" : "Online portfolio"}</a></p>
              <p><span className="icon email-icon"></span><a href="mailto:barth@paleologue.fr">barth@paleologue.fr</a></p>
            </div>
          </section>
          <section>
            <h2><span className="icon skill-icon inverted"></span>{currentLang === Lang.FR ? "Compétences" : "Skills"}</h2>
            <div>
              <h3>Général</h3>
              <p>Git ({YoE(6)})</p>
              <p>Soft Skills</p>
              <p>Accessibilité ({YoE(3)})</p>
              <p>Enjeux RSE ({YoE(2)})</p>
            </div>
            <div>
              <h3>Graphismes</h3>
              <p>WebGL BabylonJS ({YoE(8)})</p>
              <p>D3.JS, Altair, Tableau (&lt;{YoE(1)})</p>
              <p>Blender ({YoE(1)})</p>
              <p>OpenVDB C++ (&lt;{YoE(1)})</p>
            </div>
            <div>
              <h3>Programmation</h3>
              <p>HTML, CSS, JS ({YoE(9)})</p>
              <p>C, C++, Qt ({YoE(5)})</p>
              <p>React, Typescript ({YoE(4)})</p>
              <p>Webpack ({YoE(3)})</p>
              <p>Rust, WebAssembly ({YoE(2)})</p>
              <p>Java, Kotlin ({YoE(2)})</p>
              <p hidden>Django, NextJS ({YoE(1)})</p>
            </div>
            <div hidden>
              <h3>Machine Learning</h3>
              <p>Numpy / Sklearn / Keras / Pandas ({YoE(3)})</p>
            </div>
            <div hidden>
              <h3>Desktop</h3>
              <p>C / C++ ({YoE(7)})</p>
              <p>Rust ({YoE(2)})</p>
              <p>Java / Java Swing ({YoE(1)})</p>
              <p>Electron ({YoE(1)})</p>
            </div>
            <div hidden>
              <h3>Mobile</h3>
              <p>Android Kotlin ({YoE(1)})</p>
              <p>Flutter ({YoE(1)})</p>
            </div>
          </section>
          <section>
            <h2><span className="icon language-icon inverted"></span>{currentLang === Lang.FR ? "Langues" : "Languages"}</h2>
            <div>
              <p>{currentLang === Lang.FR ? "Français (Natif)" : "French (Native)"}</p>
              <p>{currentLang === Lang.FR ? "Anglais" : "English"} (C1)</p>
              <p>{currentLang === Lang.FR ? "Japonais" : "Japanese"} (B1)</p>
              <p hidden>{currentLang === Lang.FR ? "Espagnol" : "Spanish"} (A2)</p>
            </div>
          </section>
          <section>
            <h2><span className="icon hobby-icon inverted"></span>{currentLang === Lang.FR ? "Loisirs" : "Hobbies"}</h2>
            <div>
              <p>Piano ({YoE(5)})</p>
              <p>{currentLang === Lang.FR ? "Flûte à bec" : "Recorder"} ({YoE(10)})</p>
              <p>{currentLang === Lang.FR ? "Course à pied" : "Jogging"}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
