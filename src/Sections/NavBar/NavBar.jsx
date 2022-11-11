import React from 'react';
import s from './NavBar.module.css'
import github from '../../images/github.svg'
import whatsapp from '../../images/whatsapp.svg'
import linkedin from '../../images/linkedin.svg'

const NavBar = () => {
  return (
    <div className={s.navbar}>
        <img className={s.iconsContact} src={github} alt="github" />
        <img className={s.iconsContact} src={whatsapp} alt="whatsapp" />
        <img className={s.iconsContact} src={linkedin} alt="linkedin" />

    </div>
  )
}

export default NavBar