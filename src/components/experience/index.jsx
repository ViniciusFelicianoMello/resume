/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './experience.sass';

const Experience = ({ experience }) => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDropdown = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className='experience'>
      <h2>{t('experienceTitle')}</h2>
        <div className="experience_content">
            {experience.map((experience, index) => (
                <div className="experience_item dropdown" onClick={() => toggleDropdown(index)} key={index}>
                    <h3>{t(experience.title)}</h3>
                    <h4>{t(experience.position)}</h4>
                    <div className="dropdown_content" style={{ transition: 'all .5s', maxHeight: expandedIndex === index ? '30vh' : '0', overflow: 'hidden', }}>
                        <p>{t(experience.infos)}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
