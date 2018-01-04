import React from 'react';
import "./Customerportal.css";


class CustomerPortal extends React.Component {


  render() {
    let savedMerchants = this.props.merchants.map((item) => (
      <li>{item}</li>
    ));

    let recentSearches = this.props.searches.map((item) => (
      <li>{item}</li>
    ));

    let messages = this.props.messages.map((item) => (
      <li>{item.user}: {item.message}</li>
    ));

    let reviews = this.props.reviews.map((item) => (
      <li>{item.merchant}: {item.review}  ({item.rating} out of 5)</li>
    ));

    return(
      <div>
      <h2>Welcome, {this.props.username}</h2>
      <h4>Saved Merchants</h4>
      <ul>
        {savedMerchants}
      </ul>
      <h4>Recent Searches</h4>
      <ul>
        {recentSearches}
      </ul>
      <h4>Messages</h4>
      <ul>
        {messages}
      </ul>
      <h4>Your Reviews</h4>
      <ul>
        {reviews}
      </ul>
      </div>
    )
  }
}

export default CustomerPortal;
