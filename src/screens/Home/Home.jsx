import React from 'react';
import Presentation from '../../Sections/Presentation/Presentation';
import Proyects from '../../Sections/Proyects/Proyects';
import Interests from '../../Sections/Interests/Interests';
import Technologies from '../../Sections/Technologies/Technologies';
import Footer from '../../Sections/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Presentation />
      <Proyects />
      <Interests />
      <Technologies />
      <Footer />
    </div>
  )
}

export default Home;