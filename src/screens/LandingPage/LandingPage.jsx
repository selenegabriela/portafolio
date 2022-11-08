import React, { useState } from 'react';
import s from './LandingPage.module.css';
import laptopImage from '../../images/laptop.png'
import nameImage from '../../images/selenegabriela.svg'
import iconUp from '../../images/icon-up.svg'
import iconDown from '../../images/icon-down.svg'
import { useNavigate } from 'react-router-dom';
import Welcome from '../../components/Welcome/Welcome';

const LandingPage = () => {
  const navigate = useNavigate();
  const [ showWelcomeComponent, setShowWelcomeComponent ] = useState(false);

  const showWelcome = () => {
    setShowWelcomeComponent(true);

    setTimeout(() => {
      setShowWelcomeComponent(false)
      navigate('/home');
    }, 5000)
  }

  return (
    <div >
      {showWelcomeComponent && <Welcome/>}
      <div>
        <div className={s.flexNameImage}>
          <div>
            <img className={s.icons} src={iconUp} alt="icon" />
            <p>Hola,</p>
            <p>mi nombre es </p>
            <img className={s.name} src={nameImage} alt="name" />
            <img className={s.icons} src={iconDown} alt="icon" />
          </div>
          <div>
            <img className={s.img} src={laptopImage} alt="laptop-icon"/>
          </div>
        </div>
        <div className={s.positionButton}>
          <div>
            <p className={s.position}>Fullstack web developer</p>
          </div>
          <button onClick={showWelcome}>
            Continuar
          </button>
        </div>
        
      </div>
      <div>
      </div>
    </div>
  )
}

export default LandingPage;