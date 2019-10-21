import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItem/NavigationItems'
import { Link } from 'react-router-dom'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
       <Link to='/'><h2 style={{textDecoration: 'none'}} >Herolo Weather App</h2></Link>
        <div onClick={props.openSideDrawer} ><span className={classes.Disp}>&#9776;</span></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)


export default Toolbar


