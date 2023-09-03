import React from "react";
import { AccessLinkIcon } from "./accessLinkIcon";
import { Experience } from "./resumeData/experiences";

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
            <h3><AccessLinkIcon url={experience.url} text={experience.title} /></h3>
            <h4>{experience.when}</h4>
            <ul>
                {(experience.what).map((what: string) => (
                    <li key={what} dangerouslySetInnerHTML={createMarkup(what)}></li>
                ))}
            </ul>
        </div>
    )
}