import React from "react";
import { AccessLinkIcon } from "./accessLinkIcon";
import { Experience, experiences } from "./resumeData/experiences";
import { IS } from "./strings";

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

export const Experiences = ({ }) => {
    return (
        <section>
            <h2><span className="icon experience-icon inverted"></span><AccessLinkIcon text={IS.experience} inverted url='https://barth.paleologue.fr' title="Online Portfolio" /></h2>
            {experiences.map((experience) => (<ExperienceContainer key={experience.title} experience={experience} />))}
        </section>
    )
}