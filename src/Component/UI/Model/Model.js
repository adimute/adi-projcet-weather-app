import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/ox'
const Model = (props) => (
    <Aux>
        <Backdrop back = {props.back} show = {props.show} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',

            }}
        >
            {props.children}
        </div>
    </Aux>
)

export default Model