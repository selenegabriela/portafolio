import React from 'react'
import s from './Success.module.css'

const Success = ({children}) => {
  return (
    <div className={s.div}>
        {children}
    </div>
  )
}

export default Success