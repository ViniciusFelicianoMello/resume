import Controls from '../../components/controls'
import Infos from '../../components/infos'
import Title from '../../components/title'
import './aside.sass'

const Aside = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/vinicius-feliciano-mello/", icon: "fa-brands fa-linkedin" },
    { href: "https://github.com/ViniciusFelicianoMello", icon: "fa-brands fa-github" },
    { href: "https://portifolio-vinicius-mello.vercel.app/", icon: "fa-regular fa-file-lines" },
  ];
  return (

    <section className="aside" >
      <Controls />
      <Title socialLinks={socialLinks}/>
      <Infos />
    </section>
  )
}

export default Aside