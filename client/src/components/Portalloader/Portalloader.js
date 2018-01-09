import React from 'react';
import MerchantPortal from './../Merchantportal';
import "./Portalloader.css";

class PortalLoader extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      user: 'merchant',
      username: 'Andrew',
      password: 'testPassword',
      profilePicture: null,
      messages: [{user:'Conrad Coffees', message:`Let's meet at...`}, {user:`Kim's Kookies`, message:`Hope you enjoy the cookies!`}],
      searches: ['Cookies', 'Coffee', 'Bread'],
      reviews: [{merchant:`David's Doughs`, user:`Bob`, review:`Delicious!`, rating: `5`}],
      savedMerchants: []
    };
  }

  render() {
    if(this.state.user == 'customer'){
      return(<CustomerPortal username={this.state.username} merchants={this.state.savedMerchants} searches={this.state.searches} messages={this.state.messages} reviews={this.state.reviews} />)
    }
    else {
       return(<MerchantPortal merchant={this.state.username} messages={this.state.messages} reviews={this.state.reviews}/>)
    }
  }
}

export default PortalLoader;
