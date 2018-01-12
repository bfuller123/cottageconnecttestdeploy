import React from 'react';
import Card from '../Card';
import "./Cardloader.css";
import baseImage from './../../images/CChouse.png';

class Cardloader extends React.Component {

  render() {
    //taking a list and mapping into a new list that contains every list item
    const list = this.props.results.map((item) => (
      <Card clickHandler={this.props.clickHandler} businessId={item["email"]} name={item.businessName ? item.businessName : "Local Cottage"} address={item.streetAddress1} image={item.image ? item.image : baseImage}/>
    ));

    //since React can render based on Arrays, we throw in the list of list items to be rendered
    return(

     <div className="flex-container">
        <div className="cards">
          {list}
        </div>
     </div>
    );
  }
}

    export default Cardloader;
