import React from "react";
import { AccessLinkIcon } from "./accessLinkIcon";
import { Lang, currentLang } from "./internationalization";

export type Experience = {
    titleFR: string;
    titleEN: string;
    url: string;
    whenFR: string;
    whenEN: string;
    whatFR: string[];
    whatEN: string[];
    enabled: boolean;
}

export interface ExperienceContainerProps {
    experience: Experience;
}

export const ExperienceContainer = ({ experience }: ExperienceContainerProps) => {
    function createMarkup(htmlString: string) {
        return {
            __html: htmlString
        }
    }
    return (
        <div className="experienceContainer" hidden={!experience.enabled}>
            <h3><AccessLinkIcon url={experience.url} text={currentLang === Lang.FR ? experience.titleFR : experience.titleEN} /></h3>
            <h4>{currentLang === Lang.FR ? experience.whenFR : experience.whenEN}</h4>
            <ul>
                {(currentLang === Lang.FR ? experience.whatFR : experience.whatEN).map((what: string) => (
                    <li key={what} dangerouslySetInnerHTML={createMarkup(what)}></li>
                ))}
            </ul>
        </div>
    )
}