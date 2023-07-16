import React from "react";
import { AccessLinkIcon } from "./accessLinkIcon";

export type Experience = {
    title: string;
    url: string;
    when: string;
    what: string[];
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
            <h3>{experience.title} <AccessLinkIcon url={experience.url} /></h3>
            <h4>{experience.when}</h4>
            <ul>
                {experience.what.map((what: string) => (
                    <li key={what} dangerouslySetInnerHTML={createMarkup(what)}></li>
                ))}
            </ul>
        </div>
    )
}