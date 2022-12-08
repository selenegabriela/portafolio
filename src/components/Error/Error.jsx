import React from 'react'
import s from './Error.module.css'

const Error = ({children}) => {
  return (
    <div className={s.div}>
        {children}
    </div>
  )
}

export default Error