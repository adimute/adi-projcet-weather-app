import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class Favorites extends Component {

    constructor(props){
        super(props);
        this.state={
            city: '',
            temp:'',
            forcast: '',
            key: ''
        };
      } 

      render() {

      

    return (
      <div className="weather-card">
        
          {['Tal Aviv ', '24C ', 'Cludy'].map((city, id, temp, forcast) => {
            return  <Card >
            <Card.Body>
              <h2>{city}</h2>
              <h2>{temp}</h2>
              <p> {forcast}</p>
            </Card.Body>
          </Card> 
          })}
      </div>
    )
  }
}
