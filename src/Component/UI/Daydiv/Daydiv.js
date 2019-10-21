import React from 'react'
import classes from './Daydiv.module.css'
import WeatherIcon from './WeatherIcon/WeatherIcon'


const Daydiv = (props) => {

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="col">
                        <div className={classes.Block}>
                            {props.favorite ? <button class="btn btn-link" className={classes.Button} onClick={() => props.removeFavoriteCity(props.numCityIndex)}>X</button> : null}
                            <p className={classes.Name}>{props.name}</p>
                            {props.favorite ? <p className={classes.Counntry} >{props.country}</p> : null}
                            <h3 className={classes.Date} >{props.date}</h3>
                            <p className={classes.Temp} >{props.temp}</p>
                            <WeatherIcon iconNum={props.iconNum} />
                            <p className={classes.Detail} >{props.detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Daydiv;