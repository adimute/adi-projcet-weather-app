import React, { Component } from 'react'
// import Favorite from './Favorite/Favorite'
import Homepage from './Homepage/Homepage'
export default class Home extends Component {
   
    state = {
        selectedCity: false,
        tempCityData: {}
    }
   
    test = () => { 
        console.log("ddddd")
    }

    
    
    
    render() {
          


        return (
            <div>
               <Homepage  test = {this.test}/>

               
            </div>
        )
    }
}
