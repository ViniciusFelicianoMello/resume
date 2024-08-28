import './about.sass'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
  return (
    <div className='about'>
        <h2>{t('aboutTitle')}</h2>
        <p>{t('aboutMe')}</p>
    </div>
  )
}

export default About
