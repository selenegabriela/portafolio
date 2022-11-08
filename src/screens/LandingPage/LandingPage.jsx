import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LandingPage.module.css';
import laptopImage from '../../images/laptop.png'
import nameImage from '../../images/selenegabriela.svg'

const Home = () => {

  return (
    <div>
      <div>
        <div className={s.flexNameImage}>
          <div>
            <p>Hola,</p>
            <p>Mi nombre es </p>
            <img className={s.name} src={nameImage} alt="name" />
          </div>
          <div>
            <img src={laptopImage} alt="laptop-icon"/>
          </div>
        </div>
        <div className={s.positionButton}>
          <p>Fullstack web developer</p>
          <NavLink to='/home'>
            <button>Continuar</button>
          </NavLink>
        </div>
        
      </div>
      <div>
      </div>
    </div>
  )
}

export default Home;