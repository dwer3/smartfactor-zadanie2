import React, {Component} from 'react';
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.postPlaces = this.postPlaces.bind(this);
    }

  postPlaces(name) {
    const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-AUTH-LOGIN': "Damian Werbowy",
          'X-AUTH-TOKEN': '6fee3b56-d8f0-4d68-a4da-3378970237da'
      },
        body: {
          "1": true,
          "2": true,
          "3": false,
          "4": true,
          "5": false,
          "6": false,
          "7": true,
          "8": false
          }
    };
    fetch('https://rekrutacja-sf.herokuapp.com/parking/'+name, requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data)});
  }

  render() {
      return (
        <div className="form-wrapper">
            <label>Nazwa parkingu</label>
            <input type="text" id="placeName"></input>
            <button onClick={name => this.postPlaces(document.getElementById('placeName').value)}>Wyślij</button>
        </div>
      );
  }
}

export default Form;