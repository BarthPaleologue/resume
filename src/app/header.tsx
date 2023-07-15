import React from 'react';
import Image from 'next/image';

import profilePicture from '../../public/static/profile.jpeg';

export const Header = () => {
    return (
        <header>
        <div className="picturePanel">
          <Image src={profilePicture} alt="Profile picture" />
        </div>
        <div className="namePanel">
          <h1>Barthélemy Paléologue</h1>
          <p>En recherche de stage Ingénieur en informatique graphique</p>
        </div>
      </header>
    )
}