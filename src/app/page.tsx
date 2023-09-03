import { AccessLinkIcon } from './accessLinkIcon';
import { Experience, ExperienceContainer } from './experienceContainer';
import { experiences } from './experiences';
import { FormationContainer } from './formationContainer';
import { formations } from './formations';
import { IString, Lang, S, YoE, currentLang } from './internationalization';
import { Header } from './header';
import './styles/App.scss';
import { IS } from './strings';
import { skills } from './skills';
import { SkillContainer } from './skillContainer';

export default function Home() {
  return (
    <main className='App'>
      <Header />
      <div className="panelContainer">
        <div className="leftPanel">
          <section className="formation">
            <h2><span className="icon formation-icon inverted"></span>{IS.formation}</h2>
            {formations.map((formation) => (<FormationContainer key={formation.titleFR} formation={formation} />))}
          </section>
          <section>
            <h2><span className="icon experience-icon inverted"></span><AccessLinkIcon text={IS.experience} inverted url='https://barth.paleologue.fr' title="Online Portfolio" /></h2>
            {experiences.map((experience) => (<ExperienceContainer key={experience.titleFR} experience={experience} />))}
          </section>
        </div>
        <div className="rightPanel">
          <section className="contact">
            <h2><span className="icon contact-icon inverted"></span>{IS.contact}</h2>
            <div>
              <p><span className="icon location-icon"></span>Palaiseau, France</p>
              <p><span className="icon phone-icon"></span><a href="tel:+33637296737">+33 6 37 29 67 37</a></p>
              <p><span className="icon portfolio-icon"></span><a href="https://barth.paleologue.fr" target="_blank">{IS.onlinePortfolio}</a></p>
              <p><span className="icon email-icon"></span><a href="mailto:barth@paleologue.fr">barth@paleologue.fr</a></p>
            </div>
          </section>
          <section>
            <h2><span className="icon skill-icon inverted"></span>{IS.skills}</h2>
            {skills.map((skillList) => (<SkillContainer key={skillList.title instanceof IString ? skillList.title.s : skillList.title} skillList={skillList} />))}
          </section>
          <section>
            <h2><span className="icon language-icon inverted"></span>{IS.languages}</h2>
            <div>
              <p>{currentLang === Lang.FR ? "Français (Natif)" : "French (Native)"}</p>
              <p>{currentLang === Lang.FR ? "Anglais" : "English"} (C1)</p>
              <p>{currentLang === Lang.FR ? "Japonais" : "Japanese"} (B1)</p>
              <p hidden>{currentLang === Lang.FR ? "Espagnol" : "Spanish"} (A2)</p>
            </div>
          </section>
          <section>
            <h2><span className="icon hobby-icon inverted"></span>{IS.hobbies}</h2>
            <div>
              <p>Piano ({YoE(5)})</p>
              <p>{S({ "fr": "Flûte à bec", "en": "Recorder" }).s} ({YoE(10)})</p>
              <p>{S({ "fr": "Course à pied", "en": "Jogging" }).s}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
