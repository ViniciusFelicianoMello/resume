import About from '../../components/about'
import Language from '../../components/language'
import Skills from '../../components/skills'
import './page.sass'

const Page = () => {
  const languages = [
    { name: 'languagePor', level: 'native', barClass: 'native_bar' },
    { name: 'languageEng', level: 'advanced', barClass: 'advanced_bar' },
  ];

  return (
    <section className='page'>
      <About />
      <Language languages={languages} />
      <Skills />
    </section>
  )
}

export default Page