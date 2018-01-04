import React from 'react';

class MerchantPortal extends React.Component {


  render() {
    let messages = this.props.messages.map((item) => (
      <li>{item.user}: {item.message}</li>
    ));

    let reviews = this.props.reviews.map((item) => (
      <li>{item.user}: {item.review}  ({item.rating} out of 5)</li>
    ));

    return(
      <div>
      <h2>Welcome, {this.props.merchant}</h2>
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

export default MerchantPortal;
