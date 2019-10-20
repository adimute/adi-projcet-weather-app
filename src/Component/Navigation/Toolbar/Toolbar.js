import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItem/NavigationItems'


const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <h2>Herolo Weather</h2>
        <div onClick={props.openSideDrawer} ><span className={classes.Disp}>&#9776;</span></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)


export default Toolbar
