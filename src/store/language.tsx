import React, { useContext, useState } from "react";

type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  update: (lang: "ru" | "en") => void;
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: "ru",
  update: (lang: "ru" | "en") => {},
});

export const ColorModeProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>("ru");

  return (
    <LanguageContext.Provider value={{ language, update: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language, update } = useContext(LanguageContext);

  return { language, update };
};
