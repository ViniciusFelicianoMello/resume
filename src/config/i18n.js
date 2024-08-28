// src/config/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "position": "Full-stack developer",
      "location": "SP - São Paulo, Brazil",
      //About Me
      "aboutTitle": "About me",
      "aboutMe": "With two years of experience leading a team at an advertising and printing company in Portugal, where I also worked as a designer. I currently manage an e-commerce business and take on freelance projects in web development and design. I'm looking for new opportunities to learn and contribute my expertise. I have knowledge in Python, Django, SQL, React, Sass, HTML, CSS, JavaScript, Git, Github, Photoshop, and Illustrator.",
      //language
      "languageTitle": "Languages",
      "languagePor": "Portuguese",
      "languageEng": "English",
      "native": "Native",
      "advanced": "Advanced",
    }
  },
  pt: {
    translation: {
      "position": "Desenvolvedor full-stack",
      "location": "SP - São Paulo, Brasil",
      //Sobre mim
      "aboutTitle": "Sobre mim",
      "aboutMe": "Sou um desenvolvedor apaixonado por tecnologia, com experiência de dois anos liderando uma equipe em uma empresa de publicidade e gráfica em Portugal, onde também atuei como designer. Atualmente, gerencio um e-commerce e realizo freelances de desenvolvimento web e design. Busco novas oportunidades para aprender e contribuir com meu conhecimento. Tenho conhecimento em Python, Django, SQL, React, Sass, HTML, CSS, JavaScript, Git, Github, Photoshop e Illustrator. ",
      //Idioma
      "languageTitle": "Idiomas",
      "languagePor": "Português",
      "languageEng": "Inglês",
      "native": "Nativo",
      "advanced": "Avançado",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;