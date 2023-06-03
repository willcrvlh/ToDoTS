import github from '../../svg/github.svg'
import linkedin from '../../svg/linkedin.svg'
import S from './Footer.module.css'


export default function Footer () {
  return (
    <footer className={S.footer}>
      <a href="http://www.github.com/willcrvlh"><img src={github} alt="simbolo do github" className={S.img} /></a>
        <span>
            Projeto realizado por Willian Carvalho
        </span>
    <a href="https://www.linkedin.com/in/willcrvlh"><img src={linkedin} alt="simbolo do linkdedin" className={S.img} /></a>
    </footer>
  );
}
