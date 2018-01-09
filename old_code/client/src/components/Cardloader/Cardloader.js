import React from 'react';
import Card from './card';
import "./Cardloader.css";

//this will later become data from the backend
let shops = [
  {
    name: "Brett's Burgers",
    image: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg",
    address:"123 fake st Dallas, TX 75214"
  },
  {
    name: "Kim's Kookies",
    image:"https://images-gmi-pmc.edge-generalmills.com/eb52c020-c145-440c-8445-911f133c0096.jpg",
    address:"224 Cookie Ave Dallas, TX 75202"
  },
  {
    name: "Conrad Coffees",
    image: "https://img.leafcdn.tv/640/clsd/getty/6e53d38291414c82bea2d44cdcbf69f1",
    address:"404 Java Way Richardson, TX"
  },
  {
    name: "David's Doughs",
    image:"https://images-na.ssl-images-amazon.com/images/I/51mpGRim00L._SX355_.jpg",
    address:"350 Yeast Ct Addison, TX"
  }
];

class Cardloader extends React.Component {
  state = {
    itemsForCards: shops
  }

  render() {
    //taking a list and mapping into a new list that contains every list item
    const list = this.state.itemsForCards.map((item) => (
      <Card name={item.name} image={item.image} address={item.address}/>
    ));

    //since React can render based on Arrays, we throw in the list of list items to be rendered
    return(
      <div className="cards">
        {list}
      </div>
    );
  }
}

export default Cardloader;
