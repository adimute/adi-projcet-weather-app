import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import './App.css'
import Nav from './Component/Nav'
import Weather from './Component/Weather'
import Favorites from './Component/Favorites'
import AutoComplete from './Component/AutoComplete'
import Countries from './Component/Countries'
import Talaviv from './Component/Talaviv'
import Loaction from './Component/Loaction'

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      flag: false,
      flag1: false,
      weatherPost: [],
      isLoading: true
    }
  }
    
 

  // componentDidMount() {
  //   axios.get('http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=Rh4phzOJgGzAwzrj7nZOmhUBsPW1750n')
  //     .then(Response => {
  //       axios.post('https://weather-app-63d98.firebaseio.com/adi2".json', Response)
  //         .then(Response => {
  //           console.log(Response);
  //         })
  //     })
  // }
  // componentDidMount(){
  //   const a = {name: 'bla'}
  //      axios.post('https://weather-app-63d98.firebaseio.com/adi.json', a) 
  //      .then(Response => {
  //        console.log(Response);
  //      }) 
  // }


// componentDidMount(){
//   axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=Rh4phzOJgGzAwzrj7nZOmhUBsPW1750n')
//   .then(Response =>{
//     axios.post('https://weather-app-63d98.firebaseio.com/adi.json', Response) 
//          .then(Response => {
//            console.log(Response);
//          }) 
//   })
// }

  componentDidMount() {
    axios.get('https://weather-app-63d98.firebaseio.com/adi/-Lr_TNCkz7MQAn3T7d_1.json')
      .then(Response => {
        this.setState({
          data: Response.data
        })
      })
  }


render() {
  
  console.log(this.state.data)
    // const a = this.state.weatherPost.map(day => {
    // let dayx = day;
    //   if (new Date(day.Date).getDay() === 0 ){ 
    //     day = 'Sun'
    //   }else if (new Date(day.Date).getDay() === 1 ){ 
    //     day = 'Mon'
    //   }else if (new Date(day.Date).getDay() === 2 ){ 
    //     day = 'Tue'
    //   }else if (new Date(day.Date).getDay() === 3 ){ 
    //     day = 'Wed'
    //   }else if (new Date(day.Date).getDay() === 4 ){ 
    //     day = 'Thu'
    //   }else if (new Date(day.Date).getDay() === 5 ){ 
    //     day = 'Fri'
    //   }else if (new Date(day.Date).getDay() === 6 ){ 
    //     day = 'Sat'
    //   }

    //   return (
    //     <div style  = {{border: "2px solid black", margin: '10px'}}>
    //       {dayx}
    //       <p>{day.Day.IconPhrase}</p>
    //       <p>max - {((Number(day.Temperature.Maximum.Value) - 32 ) * 5 / 9).toFixed(0) + "C"}</p>
    //       <p>min -{((Number(day.Temperature.Minimum.Value) - 32 ) * 5 / 9).toFixed(0) + ""}</p>
          
    //     </div>
    //   )
    // })

   
    return (
      <div>

        <Router>
          <Switch>
            <Route exact path='/' component={Nav} />
            <Route exact path='/weather' component={() => { return <Weather /> }} />
            <Route exact path='/favorites' component={Favorites} />
          </Switch>
        </Router>
        <div className="App-Component">
        <AutoComplete citys={Countries} />

      </div>
      </div>
    )
  }
  }
