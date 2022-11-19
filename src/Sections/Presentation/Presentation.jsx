import React from 'react';
import logo from '../../images/my-portfolio2.svg'
import s from './Presentation.module.css'

const Presentation = () => {
  return (
    <section id='presentation'>
      <div className={s.containerLogo}>
        <img className={s.logo} src={logo} alt="logo" />
      </div>
      <div className={s.flexSection}>
        <div>
          <div className={s.whoAmI}>
            <div>
              <h1>WHO AM I?</h1>
            </div>
            <div>
              <p>Una persona apasionada por aprender y crear con lo aprendido. Soy una desarrolladora web que llegó del mundo de las letras, donde todo puede ser posible, con la intención de plasmar (lo que ellas y la imaginación dictan) en el mundo de la virtualidad... pues como un grande y excelente profesor decía: "si puedes imaginarlo, puedes crearlo".</p>
            </div>
          </div>
          <div>
            <h3>Mi nombre es Selene Amador Díaz y ha sido un gusto.</h3>
          </div>
        </div>
        <div>
          <h2>TECNOLOGÍAS</h2>
          <div>
            <p>Actualmente manejo las siguientes tecnologías:</p>
          </div>
          <div>
            <ul>
              <li>Javascript</li>
              <li>React JS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node JS</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>Mongo DB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation;