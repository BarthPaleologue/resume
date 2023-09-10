import { Experiences } from './experienceContainer';
import { Formations } from './formationContainer';
import { Header } from './header';
import { Skills } from './skillContainer';
import { Hobbies } from './hobbyContainer';
import { Languages } from './languageContainer';
import { ContactContainer } from './contactContainer';

import './styles/App.scss';
import { Lang, currentLang } from './internationalization';
import { settings } from './resumeData/settings';

export default function Home() {
  return (
    <main className='App'>
      <Header />
      <div className={"panelContainer " + (settings.showPicture ? "withPicture" : "withoutPicture")}>
        <div className="largePanel">
          <Formations />
          <Experiences />
        </div>
        <div className="smallPanel">
          <ContactContainer />
          <Skills />
          <Languages />
          <Hobbies />
        </div>
      </div>
    </main>
  )
}
