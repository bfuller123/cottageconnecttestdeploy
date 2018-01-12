import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import axios from 'axios';

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
      address: {
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: ''
      },
      categories: [],
      goods: []
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
      this.loadCottage();
    });
    xhr.send();
  };

  loadCottage() {
    console.log("going to load user");
    axios({
      method: 'post',
      url: 'cc/cottages/load',
      params: {
        id: this.state.user.email
      }
    })
    .then((response) => {
      console.log(response);
      this.loadReponseData(response.data[0]);
    })
  };

  loadReponseData(data){
      this.setState({address:{
          streetAddress1: data.streetAddress1,
          streetAddress2: data.streetAddress2,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode
      }});
      this.setState({categories: data.category});
      this.setState({goods: data.inventory});
  };

 updateMerchant() {
    axios({
      method: 'post',
      url: 'cc/cottages/update',
      params: {
        id : this.state.user.email,
        streetAddress1 : this.state.address.streetAddress1,
        streetAddress2 : this.state.address.streetAddress2,
        city : this.state.address.city,
        state : this.state.address.state,
        zipCode : this.state.address.zipCode,
        category : this.state.categories,
        inventory: this.state.goods
      }
    })
    .then((response) => {
      console.log(response.data);
      this.loadReponseData(response.data);
    })
  }

  addClicked(e) {
    let itemClicked = e.target.id;
    let currentState = this.state[itemClicked];
    currentState.push("");
    this.setState({itemClicked: currentState});
  };

  removeClicked(e) {
    let itemClicked = e.target.dataset.attribute;
    let itemGroup = e.target.dataset.group;
    let currentState = this.state[itemGroup];
    currentState.splice(itemClicked, 1);
    this.setState({itemGroup: currentState});
  }

  itemChange(e) {
    let itemToChange = e.target.dataset.attribute;
    let itemGroup = e.target.dataset.group;
    let currentState = this.state[itemGroup];
    currentState[itemToChange] = e.target.value;
    this.setState({itemGroup: currentState});
  };

  /**
   * Render the component.
   */
  render() {
    return (<div><Dashboard secretData={this.state.secretData} user={this.state.user} address={this.state.address} categories={this.state.categories} goods={this.state.goods} btnClickHandler={() => {this.updateMerchant()}} addClick={(e) => {this.addClicked(e)}} removeClick={(e) => {this.removeClicked(e)}} itemChanged={(e) => {this.itemChange(e)}} /></div>);
  }

}

export default DashboardPage;
