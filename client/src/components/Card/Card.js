import React from 'react';
import "./Card.css";

//TODO: Need to make it so the name of shop only shows X amount of characters

class Card extends React.Component {

  render() {
    return(
    <div className="card">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="cardName">{this.props.name}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <img className="cardImage" src={this.props.image} />
        </div>
        <div className="col-lg-8">
          <h4 className="cardAddress">{this.props.address}</h4>
        </div>
      </div>
    </div>

    )
  }
}

export default Card;
