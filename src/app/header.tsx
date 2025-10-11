import React from "react";
import Image from "next/image";

import profilePicture from "../../public/static/profile.jpeg";
import { you } from "./resumeData/you";
import { settings } from "./resumeData/settings";

export const Header = () => {
  return (
    <header>
      <div className="picturePanel">
        <Image
          src={profilePicture}
          alt="Profile picture"
          hidden={!settings.showPicture}
        />
      </div>
      <div className="namePanel">
        <h1>{you.name}</h1>
        <p>{you.lookingFor}</p>
      </div>
    </header>
  );
};
