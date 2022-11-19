import React from 'react';
import Presentation from '../../Sections/Presentation/Presentation';
import Proyects from '../../Sections/Proyects/Proyects';
import Interests from '../../Sections/Interests/Interests';
import Footer from '../../Sections/Footer/Footer';
import NavBar from '../../Sections/NavBar/NavBar';
import s from './Home.module.css';


const Home = () => {
  return (
    <div className={s.flexContent}>
      <div>
        <NavBar/>
      </div>
      <div>
        <Presentation />
        <Proyects />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default Home;