/* eslint-disable react/prop-types */
import './language.sass'
import { useTranslation } from 'react-i18next';

const Language = ({ languages }) => {
    const { t } = useTranslation();

  return (
    <div className='language'>
      <h2>{t('languageTitle')}</h2>

      {languages.map((language, index) => (
        <div key={index} className="language_item">
          <div className="language_item_text">
            <h3>{t(language.name)}</h3>
            <p>{t(language.level)}</p>
          </div>
          <div className="language_bar">
            <span></span>
            <span className={language.barClass}></span>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Language
