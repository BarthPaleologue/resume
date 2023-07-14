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
          <p>L&apos;important c&apos;est de passer un bon moment</p>
        </div>
      </header>
    )
}