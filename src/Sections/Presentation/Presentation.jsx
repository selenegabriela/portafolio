import React from 'react';
import logo from '../../images/my-portfolio2.svg'
import javascript from '../../images/javascript.svg'
import react from '../../images/react.svg'
import html from '../../images/html.svg'
import css from '../../images/css.svg'
import sass from '../../images/sass.svg'
import graphql from '../../images/graphql.svg'
import node from '../../images/node.svg'
import express from '../../images/express.svg'
import sequelize from '../../images/sequelize.svg'
import mongodb from '../../images/mongodb.svg'
import git from '../../images/git.svg'
import github from '../../images/github.svg'
import s from './Presentation.module.css'

const Presentation = () => {
  return (
    <section id='presentation'>
      <div className={s.containerLogo}>
        <img className={s.logo} src={logo} alt="logo" />
      </div>
      <div className={s.flexSection}>
        <div className={s.whoAmI}>
            <div>
              <h2>WHO AM I?</h2>
            </div>
            <div>
              <p>
              I am a highly passionate individual who loves to learn and create new things, and I believe that programming is the perfect field for those who share these passions. I thrive on accepting new challenges and finding solutions to specific problems. The sense of satisfaction that comes from overcoming frustration and discovering the light at the end of the tunnel is what drives me. If you're interested in getting in touch with me,
              don't hesitate: <a className={s.doIt} href="#contact-me">contact me!</a>
              </p>
            </div>
        </div>
        <div className={s.line}></div>
        <div className={s.technologies}>
          <h2>TECHNOLOGIES</h2>
          <div>
            <p>These are the technologies I know:</p>
          </div>
          <div className={s.flexTechnologies}>
            <ul className={s.ul}>
              <li className={s.flexIcon}>
                <img className={s.iconSize} src={javascript} alt="" />
                <span>Javascript</span>
              </li>
              <li className={s.flexIcon}>
                <img className={s.iconSize} src={react} alt="" />
                <span>React JS</span>
              </li>
              <li className={s.flexIcon}>
                <img className={s.iconSize} src={html} alt="" />
                <span>HTML</span>
              </li>
              <li className={s.flexIcon}>
                <img className={s.iconSize} src={css} alt="" />
                <span>CSS</span>
              </li>
              <li className={`${s.flexIcon} ${s.hideMobile}`}>
                <img className={s.iconSize} src={sass} alt="" />
                <span>SASS</span>
              </li>
              <li className={`${s.flexIcon} ${s.hideMobile}`}>
                <img className={s.iconSize} src={graphql} alt="" />
                <span>Graphql</span>
              </li>
            </ul>
            <ul className={s.ul}>
              <li className={s.flexIcon}>
                <img className={s.iconSize} src={node} alt="" />
                <span>Node JS</span>
              </li>
              <li className={s.flexIcon}>
                <img className={`${s.iconSize} ${s.expressMargin}`} src={express} alt="" />
                <span>Express</span>
              </li>
              <li className={s.flexIcon}>
                <img className={s.iconSize} src={sequelize} alt="" />
                <span>Sequelize</span>
              </li>
              <li className={s.flexIcon}>
                <img className={s.iconSize} src={mongodb} alt="" />
                <span>Mongo DB</span>
              </li>
              <li className={`${s.flexIcon} ${s.hideMobile}`}>
                <img className={s.iconSize} src={git} alt="" />
                <span>Git</span>
              </li>
              <li className={`${s.flexIcon} ${s.hideMobile}`}>
                <img className={s.iconSize} src={github} alt="" />
                <span>GitHub</span>
              </li>
            </ul>
            <ul className={s.ul}>
              <li className={`${s.flexIcon} ${s.showMobile}`}>
                <img className={s.iconSize} src={sass} alt="" />
                <span>SASS</span>
              </li>
              <li className={`${s.flexIcon} ${s.showMobile}`}>
                <img className={s.iconSize} src={graphql} alt="" />
                <span>Graphql</span>
              </li>
              <li className={`${s.flexIcon} ${s.showMobile}`}>
                <img className={s.iconSize} src={git} alt="" />
                <span>Git</span>
              </li>
              <li className={`${s.flexIcon} ${s.showMobile}`}>
                <img className={s.iconSize} src={github} alt="" />
                <span>GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation;