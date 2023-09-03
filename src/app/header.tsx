import React from 'react';
import Image from 'next/image';

import profilePicture from '../../public/static/profile.jpeg';
import { Lang, currentLang } from './internationalization';

export const Header = () => {
  return (
    <header>
      <div className="picturePanel">
        <Image src={profilePicture} alt="Profile picture" />
      </div>
      <div className="namePanel">
        <h1>Barthélemy Paléologue</h1>
        <p>{currentLang === Lang.FR ?
          "En recherche de stage Ingénieur en informatique graphique" :
          "Looking for an internship as a computer graphics engineer"}</p>
      </div>
    </header>
  )
}