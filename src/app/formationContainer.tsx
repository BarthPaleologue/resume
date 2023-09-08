import React from "react";
import { Lang, currentLang } from "./internationalization";
import { Formation } from "./resumeData/formations";
import { AccessLinkIcon } from "./accessLinkIcon";

export interface FormationContainerProps {
    formation: Formation;
}

export const FormationContainer = ({ formation }: FormationContainerProps) => {
    function createMarkup() {
        return {
            __html: formation.what
        }
    }
    return (
        <div className="formationContainer" >
            <h3>{formation.url ? <AccessLinkIcon text={formation.title} url={formation.url} /> : formation.title}</h3>
            <h4>{formation.when}</h4>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
    );
}
