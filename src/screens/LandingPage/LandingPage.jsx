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
  const [ disabledButton, setDisabledButton ] = useState(false);

  const showWelcome = () => {
    setDisabledButton(true);
    setShowWelcomeComponent(true);
    
    setTimeout(() => {
      setShowWelcomeComponent(false)
      navigate('/home');
    }, 8000)
    setDisabledButton(true);
  }

  return (
    <div >
      {showWelcomeComponent && <Welcome/>}
      <div>
        <div className={s.flexNameImage}>
          <div className={s.leftSide}>
            <img className={s.icons} src={iconUp} alt="icon" />
            <div>
              <p className={s.inlineParagraph}>Hi,</p>
              <p className={s.inlineParagraph}>my name is </p>
            </div>
            <img className={s.name} src={nameImage} alt="name" />
            <img className={s.icons} src={iconDown} alt="icon" />
          </div>
          <div className={s.rightSide}>
            <img className={s.img} src={laptopImage} alt="laptop-icon"/>
          </div>
        </div>
        <div className={s.positionButton}>
          <div>
            <p className={s.position}>Fullstack web developer</p>
          </div>
          <button disabled={disabledButton} onClick={showWelcome}>
            Continue
          </button>
        </div>
        
      </div>
      <div>
      </div>
    </div>
  )
}

export default LandingPage;