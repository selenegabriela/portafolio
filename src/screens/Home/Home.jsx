import React from 'react';
import Presentation from '../../Sections/Presentation/Presentation';
import Proyects from '../../Sections/Proyects/Proyects';
import Interests from '../../Sections/Interests/Interests';
import Technologies from '../../Sections/Technologies/Technologies';
import Footer from '../../Sections/Footer/Footer';
import NavBar from '../../Sections/NavBar/NavBar';
import logo from '../../images/my-portfolio2.svg'
import s from './Home.module.css';


const Home = () => {
  return (
    <div className={s.flexContent}>
      <div>
        <NavBar/>
      </div>
      <div>
        <div className={s.containerLogo}>
          <img className={s.logo} src={logo} alt="logo" />
        </div>
        <Presentation />
        <Proyects />
        <Interests />
        <Technologies />
        <Footer />
      </div>
    </div>
  )
}

export default Home;