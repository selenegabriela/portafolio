import React from "react";
import amazona from '../../images/1.png'
import veterinaryDates from '../../images/3.png'
import cryptocurrencies from '../../images/4.png'
import crm from '../../images/5.png'
import PFT from '../../images/6.jpg'
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
            <a target='_blank' rel="noreferrer" className={s.projectsLink} href='https://amazona-mern-app.onrender.com/'>
              <img src={amazona} width='300' height='150' alt="amazona app" />
              <p>Amazona app</p>
            </a>
            <p className={s.description}>A comprehensive e-commerce platform inspired by Amazon, designed with React, Node.js, Express, MongoDB, Redux, HTML, and CSS. This app offers a full-featured shopping experience for both users and administrators.

            <br/><br/>Features: 
            <br/>✔️ User authentication and profile management
            <br/>✔️ Browse, add to cart, and purchase products with PayPal integration
            <br/>✔️ Admin panel for product management (add, update, delete)
            <br/>✔️ Manage orders (mark as delivered, delete)
            <br/>✔️ CRUD operations for products, users, and orders
            <br/>✔️ Secure, user-friendly interface with both admin and user views</p>
          </li>
          <li className={s.app}>
            <a target='_blank' rel="noreferrer" className={s.projectsLink} href='https://personal-finance-tracker-sgad.netlify.app/dashboard'>
              <img src={PFT} width='300' height='150' alt="personal finance tracker app" />
              <p>Personal Finance Tracker</p>
            </a>
            <p className={s.description}>A web application designed to help users track income and expenses, visualize spending patterns, and set budget goals. Built with React.js (frontend) and Node.js with Express (backend), the app provides an intuitive dashboard for financial management.

            <br/><br/>Features:
            <br/>✔️ Add, edit, and delete income & expenses
            <br/>✔️ Real-time dashboard with financial insights
            <br/>✔️ Secure authentication & user data protection
            <br/>✔️ Interactive charts for spending analysis
            <br/>✔️ Budget goal-setting by category
            </p>
          </li>
          <li className={s.app}>
            <a target='_blank' rel="noreferrer" className={s.projectsLink} href='https://crm-json-server.netlify.app/'>
              <img src={crm} width='300' height='150' alt="crm app" />
              <p>Customer Relationship Management</p>
            </a>
            <p className={s.description}>A robust Customer Relationship Management (CRM) system built with React, React Router DOM, Tailwind CSS, and JSON Server. This application allows efficient management of customer data.

            <br/><br/><br/>Features: 
            <br/>✔️ Create, read, update, and delete customer information (CRUD)
            <br/>✔️ Intuitive user interface with responsive design
            <br/>✔️ Seamless navigation with React Router DOM
            <br/>✔️ Easy data management using JSON Server as the backend</p>
          </li>
          <li className={s.app}>
            <a target='_blank' rel="noreferrer" className={s.projectsLink} href='https://veterinary-dates-react.netlify.app/'>
              <img src={veterinaryDates} width='300' height='150' alt="veterinary dates app" />
              <p>Veterinary Dates App</p>
            </a>
            <p className={s.description}>
            A veterinary patient management system built with React and Tailwind CSS, using local storage to persist changes. This app enables the tracking and management of veterinary patient data.

            <br/><br/>Features: 
            <br/>✔️ Add, update, and delete patient records (CRUD)
            <br/>✔️ Track patient information such as name, symptoms, and discharge status
            <br/>✔️ Responsive and user-friendly interface with Tailwind CSS
            <br/>✔️ Data stored in local storage for easy access and persistence</p>
          </li>
          <li className={s.app}>
            <a target='_blank' rel="noreferrer" className={s.projectsLink} href='https://cryptocurrencies-prices-sgad.netlify.app/'>
              <img src={cryptocurrencies} width='300' height='150' alt="cryptocurrencies app" />
              <p>Cryptocurrencies Prices App</p>
            </a>
            <p className={s.description}>A cryptocurrency price tracker that displays real-time prices in MXN, USD, Euro, and GBP. Built with React and Styled Components, this app offers an intuitive way to monitor cryptocurrency prices in multiple currencies.

            <br/><br/>Features: 
            <br/>✔️ Real-time cryptocurrency prices in multiple currencies (MXN, USD, Euro, GBP)
            <br/>✔️ Custom hooks for handling select and option tags
            <br/>✔️ Clean, responsive design using Styled Components
            <br/>✔️ Easy navigation and user-friendly interface</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects;