import './infos.sass'
import { useTranslation } from 'react-i18next';

const Infos = () => {
  const { t } = useTranslation();

  return (
    <div className='aside_infos'>
      <ul>
        <li>
          {/* ITEM */}
          <a href='mailto:viniciusfelicianomello@hotmail.com' target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i>
              <span>viniciusfelicianomello@hotmail.com</span>
          </a>
        </li>
        {/* ITEM */}
        <li>
          <a href='https://api.whatsapp.com/message/66LU3HDFMEWVO1?autoload=1&app_absent=0' target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-phone"></i>
              <span>+55 11 97174-7781</span>
          </a>
        </li>
        {/* ITEM */}
        <li>
          <a href='https://www.google.com/maps/place/São+Paulo,+Brasil' target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-location-dot"></i>
              <span>{t('location')}</span>
          </a>
        </li>
        {/* ITEM */}
        <li>
          <a href='#'>
              <i className="fa-regular fa-calendar"></i>
              <span>06 / 09 / 1999</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Infos
