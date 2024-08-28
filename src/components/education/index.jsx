/* eslint-disable react/prop-types */
import './education.sass'
import { useTranslation } from 'react-i18next';

const Education = ({ education }) => {
    const { t } = useTranslation();
  return (
    <div className='education'>
      <h2>{t('educationTitle')}</h2>
      <div className="education_content">
        {education.map((education, index) => (
            <div className="education_item" key={index}>
                <h3>{t(education.title)}</h3>
                <h4>{t(education.info)}</h4>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Education
