import React from 'react'
import picture from '../../images/selene.png'
import s from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={s.absolute}>
        <div>
            <p className={s.paragraph}>"Who’d be happy, let him be so: Nothing’s sure about tomorrow."</p>
            <p className={s.paragraph}>-Lorenzo di Medici</p>
        </div>
        <img className={s.img} src={picture} alt="me" />
        <a href='/home' className={`${s.paragraph} ${s.paragraphBgColor}`}>Welcome to my Portfolio</a>
    </div>
  )
}

export default Welcome