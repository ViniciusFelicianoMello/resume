import './controls.sass'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Controls = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBrazil, setIsBrazil] = useState(true);
  const { i18n } = useTranslation();

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };
  
  const handleLanguageToggle = () => {
    setIsBrazil(!isBrazil);
    i18n.changeLanguage(isBrazil ? 'en' : 'pt'); 
  };

  return (
    <div className="page_controls"> 
        {/* DARK MODE */}
        <div className="controls_dark">
            <input type="checkbox" name="darkmode" id="darkmode" style={{ display: 'none' }} checked={isDarkMode} onChange={handleDarkModeToggle} />
            <label htmlFor="darkmode">
              <i className="fa-solid fa-sun"></i>
              <i className="fa-solid fa-moon"></i>
            </label>
        </div>
        {/* DOWNLOAD */}
        <div className="controls_download">
          <a href="/pdf/viniciuscv.pdf" download>
            <i className="fa-solid fa-file-arrow-down"></i>
          </a>
        </div>
        {/* Lenguage */}
        <div className="controls_lenguage">
          <div className="lenguage_country" onClick={handleLanguageToggle}>
            <img 
                src={isBrazil ? "/svg/brazil.svg" : "/svg/usa.svg"} 
                alt={isBrazil ? "Brazil Flag" : "USA Flag"} 
              />
          </div>
        </div>
    </div>
  )
}

export default Controls
