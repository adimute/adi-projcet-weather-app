import React from 'react'
import classes from './Daydiv.module.css'

const Daydiv = (props) => {
    return (
        <div className = {classes.Block}>
            
            <h3 className = {classes.Date} >{props.date}</h3>
            <p className = {classes.Temp} >{props.temp}</p>
          <p className = {classes.Detail} >{props.detail}</p>
        </div>
    )
}
export default Daydiv