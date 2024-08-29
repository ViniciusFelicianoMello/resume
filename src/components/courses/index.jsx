/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './courses.sass';

const Courses = ({ courses }) => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDropdown = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='courses'>
      <h2>{t('coursesTitle')}</h2>
      <div className="courses_content">
        {courses.map((course, index) => (
            <div className="courses_item dropdown" onClick={() => toggleDropdown(index)} key={index}>
              <h3>{t(course.title)} <a href={course.certificateLink} download>
                  <i className="fa-solid fa-file-arrow-down"></i></a>
              </h3>
              <div className="dropdown_content" style={{ transition: 'all .5s', maxHeight: expandedIndex === index ? '30vh' : '0', overflow: 'hidden', }}>
                  <p>{t(course.description)}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;