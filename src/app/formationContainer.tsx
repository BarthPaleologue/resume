import React from "react";

export type Formation = {
    title: string;
    when: string;
    what: string;
}

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
            <h3>{formation.title}</h3>
            <h4>{formation.when}</h4>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
    );
}
