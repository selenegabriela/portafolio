import React from 'react'
import s from './Error.module.css'

const Error = ({children}) => {
  return (
    <div className={s.white}>
        {children}
    </div>
  )
}

export default Error