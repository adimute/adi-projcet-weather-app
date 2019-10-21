import React from 'react'
import './Model.css'
import Backdrop from '../Backdrop/Backdrop'

const Model = (props) => (

   

    <div>
        <Backdrop back = {props.back} show = {props.show} />
        <div className = 'Model' style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0',}}>
            {props.children}
        </div>
    </div>
   
)

export default Model