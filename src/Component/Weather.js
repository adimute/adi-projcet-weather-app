import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Talaviv from './Talaviv';
import axios from 'axios'



export default class Weather extends Component {

    constructor(props){
        super(props);
        this.state={
          weather:[]
        };
      } 


      componentDidMount(){
        const b = {name: 'hello'}
           axios.post('https://weather-app-63d98.firebaseio.com/hello.json', b) 
           .then(Response => {
             console.log(Response);
           }) 
      }
    

      // componentDidMount() {
      //     axios.get('http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=Rh4phzOJgGzAwzrj7nZOmhUBsPW1750n')
      //       .then(Response => {
      //         axios.post('https://weather-app-63d98.firebaseio.com/adi2".json', Response)
      //           .then(Response => {
      //             console.log(Response);
      //           })
      //       })
      //     }

      render() {

        const title = {
          textAlign: "center",
          margin: "10px 10px 20px",
          paddingTop: "15px"
        }
    

        return (
          <div>
            <Talaviv />

              {()=> {this.props.post.map((city, id, temp, forcast) => {
            return  <Card >
            <Card.Body>
              <h2>{id}{city}</h2>
              <h2>{temp}</h2>
              <p>{forcast}</p>
            </Card.Body>
          </Card> 
          })}}
            
              </div>


  )
}
}
