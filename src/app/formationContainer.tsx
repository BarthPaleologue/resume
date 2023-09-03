import React from "react";
import { Lang, currentLang } from "./internationalization";

export type Formation = {
    titleFR: string;
    titleEN: string;
    whenFR: string;
    whenEN: string;
    whatFR: string;
    whatEN: string;
}

export interface FormationContainerProps {
    formation: Formation;
}

export const FormationContainer = ({ formation }: FormationContainerProps) => {
    function createMarkup() {
        return {
            __html: currentLang === Lang.FR ? formation.whatFR : formation.whatEN
        }
    }
    return (
        <div className="formationContainer" >
            <h3>{currentLang === Lang.FR ? formation.titleFR : formation.titleEN}</h3>
            <h4>{currentLang === Lang.FR ? formation.whenFR : formation.whenEN}</h4>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
    );
}
