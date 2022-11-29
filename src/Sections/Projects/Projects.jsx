import React from "react";
import amazona from '../../images/1.png'
import budgetControl from '../../images/2.png'
import veterinaryDates from '../../images/3.png'
import cryptocurrencies from '../../images/4.png'
import logo from '../../images/my-portfolio2.svg'
import s from './Projects.module.css'

const Projects = () => {
  return (
    <section>
      <div className={s.flexSection}>
        <div className={s.flexHeaderProjects}>
          <a href="#presentation">
            <img src={logo} width='100' alt="home" />
          </a>
          <h2>PROJECTS</h2>
          <div></div>
        </div>
        <ul className={s.wrapApps}>
          <li className={s.app}>
            <a className={s.projectsLink} href='https://my-amazona-app-sgad.herokuapp.com/'>
              <img src={amazona} width='300' height='150' alt="amazona app" />
              <p>Amazona app</p>
            </a>
            <p className={s.description}>E-commerce similar to Amazon. I used: MongoDB, Express, Node, React, Redux, HTML and CSS. Its main characteristics are:
            CRUD: We can create, get, update and delete data;
            there is an administrator view and a user view;
            Paypal payment system;
            authentication;
            users can register, modify their profile, add products to the cart and pay for those products, and
            administrators can do all of the above and add products, modify or delete them. In addition, they have the option to delete orders or mark them as delivered.</p>
          </li>
          <li className={s.app}>
            <a className={s.projectsLink} href='https://expenses-control-sgad.netlify.app/'>
              <img src={budgetControl} width='300' height='150' alt="budget control app" />
              <p>Budget Control App</p>
            </a>
            <p className={s.description}>This is a budget control. You enter a budget and you can add expenses in order to control it. It's possible to create, get, edit and deletet these expenses (CRUD). And you can delete and edit them if you swipe left and right respectively.

            It was done with React, CSS and I used the local storage to keep the data.</p>
          </li>
          <li className={s.app}>
            <a className={s.projectsLink} href='https://veterinary-dates-react.netlify.app/'>
              <img src={veterinaryDates} width='300' height='150' alt="veterinary dates app" />
              <p>Veterinary Dates App</p>
            </a>
            <p className={s.description}>
            This project was made with React and Tailwindcss.

            I used localstorage to keep the changes and it has a CRUD inside.

            The goal of this project is to monitor the patients of a veterinary: to register their name, their symptoms, if they were discharged, etc.</p>
          </li>
          <li className={s.app}>
            <a className={s.projectsLink} href='https://cryptocurrencies-prices-sgad.netlify.app/'>
              <img src={cryptocurrencies} width='300' height='150' alt="cryptocurrencies app" />
              <p>Cryptocurrencies Prices App</p>
            </a>
            <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies arcu sed risus commodo consectetur. Donec porta augue a justo rhoncus viverra.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects;