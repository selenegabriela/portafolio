import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LandingPage.module.css';
const Home = () => {

  return (
    <div className={s.div}>
      <div>
        <p>"Quien quiera ser feliz que lo sea: del mañana no hay certeza".</p>
        <span>-Lorenzo de' Medici</span>
      </div>
      <div>
        <NavLink to='/home'>
          <button>Continuar</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home;