import { Language, languages } from "./resumeData/languages";
import { IS } from "./strings";

interface LanguageContainerProps {
  language: Language;
}

export const LanguageContainer = ({ language }: LanguageContainerProps) => {
  return (
    <p key={language.title}>
      {language.icon} {language.title} ({language.level})
    </p>
  );
};

export const Languages = ({}) => {
  return (
    <section>
      <h2>
        <span className="icon language-icon inverted"></span>
        {IS.languages}
      </h2>
      <div>
        {languages.map((language) => (
          <LanguageContainer key={language.title} language={language} />
        ))}
      </div>
    </section>
  );
};
