/* eslint-disable react/prop-types */
import './skills.sass'
import { useTranslation } from 'react-i18next';


const Skills = ({ skills }) => {
    const { t } = useTranslation();
  return (
    <div className='skills'>
      <h2>{t('skillsTitle')}</h2>
      <div className="skills_flex">
        {skills.map((skillGroup, index) => (
          <ul className="skills_list" key={index}>
            {skillGroup.map((skill, i) => (
              <li key={i}>
                <i className={skill.icon}><span>{skill.span}</span></i>
                {skill.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Skills
