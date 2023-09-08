import React from "react";
import { Formation, formations } from "./resumeData/formations";
import { AccessLinkIcon } from "./accessLinkIcon";
import { IS } from "./strings";

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

export const Formations = ({ }) => {
    return (
        <section className="formation">
            <h2><span className="icon formation-icon inverted"></span>{IS.formation}</h2>
            {formations.map((formation) => (<FormationContainer key={formation.title} formation={formation} />))}
        </section>
    )
}