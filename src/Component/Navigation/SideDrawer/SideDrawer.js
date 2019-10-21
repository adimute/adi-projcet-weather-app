import React from 'react'
import NavigationItems from '../NavigationItem/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {

    let switchClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        switchClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <div>
            <Backdrop show={props.open} back={props.closed} />
            <div className={switchClasses.join(' ')}>
                <div className={classes.Logo}>

                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </div>
    )
}

export default SideDrawer;