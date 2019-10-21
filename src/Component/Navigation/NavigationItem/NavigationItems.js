import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems = () => (
<ul className = {classes.NavigationItems}>
    <Link to = '/'><NavigationItem link = '/' >Home</NavigationItem></Link>
    <Link to = '/favorite'><NavigationItem link = '/favorite' >Favotire</NavigationItem></Link>
</ul>
)

export default NavigationItems;