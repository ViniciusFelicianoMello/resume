import About from '../../components/about'
import Courses from '../../components/courses'
import Education from '../../components/education'
import Experience from '../../components/experience'
import Language from '../../components/language'
import Skills from '../../components/skills'
import './page.sass'

const Page = () => {
  const languages = [
    { name: 'languagePor', level: 'native', barClass: 'native_bar' },
    { name: 'languageEng', level: 'advanced', barClass: 'advanced_bar' },
  ];
  const skills = [
    [
      { icon: "fa-brands fa-html5", name: "HTML" },
      { icon: "fa-brands fa-css3-alt", name: "CSS" },
      { icon: "fa-brands fa-js", name: "JavaScript" },
      { icon: "fa-brands fa-react", name: "React" },
      { icon: "fa-brands fa-sass", name: "Sass" },
      { icon: "fa-brands fa-git-alt", name: "Git Github" },
    ],
    [
      { icon: "fa-brands fa-python", name: "Python" },
      { icon: "fa-brands fa-python", name: "Django" },
      { icon: "fa-solid fa-c", name: "C#", span: '#' },
      { icon: "fa-solid fa-c", name: ".Net", span: '#' },
      { icon: "fa-solid fa-database", name: "SQL" },
    ],
    [
      { icon: "fa-solid fa-image", name: "Photoshop" },
      { icon: "fa-solid fa-pen-nib", name: "Illustrator" },
      { icon: "fa-solid fa-golf-ball-tee", name: "CorelDraw" },
    ],
  ];
  const courses = [
    {
      title: 'courseTitleOne',
      description: 'courseDescOne',
      certificateLink: '/pdf/certificate/Iniciante em programação - Alura.pdf',
    },
    {
      title: 'courseTitleTwo',
      description: 'courseDescTwo',
      certificateLink: '/pdf/certificate/A partir do zero HTML e CSS - Alura.pdf',
    },
    {
      title: 'courseTitleThree',
      description: 'courseDescThree',
      certificateLink: '/pdf/certificate/CSS  aprofunde em estilos - Alura.pdf',
    },
    {
      title: 'courseTitle4',
      description: 'courseDesc4',
      certificateLink: '/pdf/certificate/Desenvolva aplicações Web com JavaScript - Alura.pdf',
    },
    {
      title: 'courseTitle5',
      description: 'courseDesc5',
      certificateLink: '/pdf/certificate/Python com Orientação a Objetos - Alura.pdf',
    },
    {
      title: 'courseTitle6',
      description: 'courseDesc6',
      certificateLink: '/pdf/certificate/Django crie aplicações em Python - Alura.pdf',
    },
    {
      title: 'courseTitle7',
      description: 'courseDesc7',
      certificateLink: '/pdf/certificate/Csharp com orientação a objetos - Alura.pdf',
    },
    {
      title: 'courseTitle8',
      description: 'courseDesc8',
      certificateLink: '/pdf/certificate/Csharp Coleções, arquivos e bibliotecas - Alura.pdf',
    },
    {
      title: 'courseTitle9',
      description: 'courseDesc9',
      certificateLink: '/pdf/certificate/Conhecendo SQL - Alura.pdf',
    },
    {
      title: 'courseTitle10',
      description: 'courseDesc10',
    },
  ];
  const experience = [
    {
      title: 'experienceTitle1',
      position: 'experiencePos1',
      infos: 'experienceInfo1',
    },
    {
      title: 'experienceTitle2',
      position: 'experiencePos2',
      infos: 'experienceInfo2',
    },
    {
      title: 'experienceTitle3',
      position: 'experiencePos3',
      infos: 'experienceInfo3',
    },
    {
      title: 'experienceTitle4',
      position: 'experiencePos4',
      infos: 'experienceInfo4',
    },
  ];
  const education = [
    {
      title: "educationTitle1",
      info: "educationInfo1"
    },
    {
      title: "educationTitle2",
      info: "educationInfo2"
    },
  ];

  return (
    <section className='page'>
      <About />
      <Language languages={languages} />
      <Skills skills={skills}/>
      <Courses courses={courses} />
      <Experience experience={experience} />
      <Education education={education} />
    </section>
  )
}

export default Page