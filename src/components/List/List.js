import React, {Component} from 'react';
import "./List.css"

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
    };
    
    this.countPlaces = this.countPlaces.bind(this);
    this.getPlaces = this.getPlaces.bind(this);
    this.getPlaces();
}   

getPlaces() {
  fetch("parking")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  countPlaces(places) {
    let quantity = Object.keys(places).filter(k => places[k]);
    return quantity.length;
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Błąd: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Ładowanie...</div>;
    } else {
      return (
        <table cellSpacing="0">
        <thead>
            <tr>
                <th>Nazwa parkingu</th>
                <th>Ilość wolnych miejsc</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{this.countPlaces(item.places)}</td>
                </tr>
            ))}
        </tbody>
    </table>
      );
    }
  }
}

export default List;