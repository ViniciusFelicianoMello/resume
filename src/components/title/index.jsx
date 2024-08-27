import PropTypes from 'prop-types';
import './title.sass';
import { useTranslation } from 'react-i18next';

const Title = ({ socialLinks }) => {
  const { t } = useTranslation();
  return (
    <div className='aside_title'>
      {/* IMG */}
      <div className="aside_img">
        <img src="https://github.com/ViniciusFelicianoMello.png" alt="ViniciusMello" />
      </div>
      {/* INFOS */}
      <div className="aside_name">
        <h2>Vinicius Feliciano Mello</h2>
        <h3>{t('position')}</h3>
      </div>
      {/* SOCIAL LINKS */}
      <ul className="aside_link">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define a validação de props para o componente Title
Title.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Title;
