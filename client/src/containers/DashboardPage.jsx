import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

//TODO: Make it so it pulls in the information for the categories, goods, and address from the correct tables.


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {},
      address: '123 Fake St Dallas TX 75214',
      categories: ['Coffee', 'Tea', 'Donuts'],
      goods: ['Whole Bean Coffee', 'Loose Leaf Tea', 'Chocolate Donut', 'Cake Donut']
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }

  updateMerchant(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/updateMerchant/Brett');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log(xhr.response.message);
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<div><Dashboard secretData={this.state.secretData} user={this.state.user} address={this.state.address} categories={this.state.categories} goods={this.state.goods} btnClickHandler={this.updateMerchant} /></div>);
  }

}

export default DashboardPage;
