import { Language } from "./resumeData/languages";

interface LanguageContainerProps {
    language: Language;
}

export const LanguageContainer = ({ language }: LanguageContainerProps) => {
    return (
        <p key={language.title}>{language.title} ({language.level})</p>
    )
}