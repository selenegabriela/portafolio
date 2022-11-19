import React, { useState } from 'react';
import s from './NavBar.module.css'
import github from '../../images/github.svg'
import whatsapp from '../../images/whatsapp.svg'
import linkedin from '../../images/linkedin.svg'

const NavBar = () => {

  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  }

  return (
    <div className={s.navbar}>
      <div className={s.btnAndOptions}>
        <button onClick={handleShowOptions} className={`${s.btnCv} ${showOptions ? s.active : ''}`}>
          <hr />
          <hr />
          <hr />
        </button>
        <div className={!showOptions ? s.hide : ''}>
          <div className={s.containerOptions}>
            <a className={s.options} href='#presentation'>
              <p className={s.firstContainer}>Home</p>
            </a>
          </div>
          <div className={s.containerOptions}>
            <a className={s.options} href='https://drive.google.com/u/0/uc?id=1oGYdVO4nu1c_FwJnhhGUGDiCAYGqQFmM&export=download'>
              <p>Download CV in English</p>
            </a>
          </div>
          <div className={s.containerOptions}>
            <a className={s.options} href='https://drive.google.com/u/0/uc?id=1BbBeSs2z0oGhO7iz0QseC9Pzq-1NNcAu&export=download'>
              <p>Download CV in Spanish</p>
            </a>
          </div>
        </div>
      </div>
      <div className={s.navbarIcons}>
        <a target='_blank' rel='noreferrer' href="https://github.com/selenegabriela">
          <img className={s.iconsContact} src={github} alt="github" />
        </a>
        <a target='_blank' rel='noreferrer' href="https://wa.me/qr/J2ZJCB52XXIVE1">
          <img className={s.iconsContact} src={whatsapp} alt="whatsapp" />
        </a>
        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/selenegabriela/">
          <img className={s.iconsContact} src={linkedin} alt="linkedin" />
        </a>
      </div>

    </div>
  )
}

export default NavBar