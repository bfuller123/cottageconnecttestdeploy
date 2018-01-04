import React from 'react';
import "./Card.css";

//TODO: Need to make it so the name of shop only shows X amount of characters

class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <img className="cardImage" src={this.props.image} />
        <div className="cardDetails">
          <h2 className="cardName">{this.props.name}</h2>
          <h4 className="cardAddress">{this.props.address}</h4>
        </div>
      </div>
    )
  }
}

export default Card;
