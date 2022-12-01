import React from 'react';
import Presentation from '../../Sections/Presentation/Presentation';
import Projects from '../../Sections/Projects/Projects';
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
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default Home;