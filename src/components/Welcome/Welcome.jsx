import React from 'react'
import picture from '../../images/selene.png'
import s from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={s.absolute}>
        <img className={s.img} src={picture} alt="me" />
        <div>
            <p>Bienvenidxs a mi perfil</p>
        </div>
    </div>
  )
}

export default Welcome