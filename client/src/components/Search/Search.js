import React from 'react';
import "./Search.css";
import CardLoader from "../Cardloader";
import axios from 'axios';

class Searchbar extends React.Component {

  constructor(){
    super();

    this.state = {
      searchResults: [],
      searchCity: '',
      searchFood: '',
      searchRadius: '5'
    }
  };

  sendInfo(e){
    e.preventDefault();
    let newData = [];
    let zipCode = this.state.searchCity;
    let food = this.state.searchFood;
    let searchURL = '/cc/merchants';

    if(zipCode.length > 0 && food.length > 0){
      searchURL = `/cc/merchants/search/${zipCode}/${food}`;
    }
    else if(zipCode.length > 0 && food.length == 0){
      searchURL = `/cc/merchants/zip/${zipCode}`;
    }
    else if(food.length > 0 && zipCode.length == 0){
      searchURL = `/cc/merchants/category/${food}`;
    }

    //if you want to switch to a post method, put through params:{key:value, key2:value2}
    axios({
      method: 'get',
      url: searchURL
    })
    //have to use arrow function here and on line 52 since es6 arrow functions since they always use this of the enclosing scope and therefore can place this to SearchBar!!
    .then((response) => {
      console.log(response.data);
      newData = response.data.slice(0, 3);
      console.log(newData);
      this.setState({searchResults: newData});
    })
  };

  zipCodeChangeHandler(e){
    this.setState({searchCity: e.target.value});
  };

  foodChangeHandler(e){
    this.setState({searchFood: e.target.value});
  };

  radiusChangeHandler(e){
    this.setState({searchRadius: e.target.value});
  };

  render() {
    return(
      <div>
        <form className="SearchBox form-inline" id="Search">
           <h1 className="SearchHed">Search for a Cottage</h1>

            <div className="row">
              <div className="col-lg-3 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-12">
                <div className="form-group">
                  <h3 className="search seachHeader">Food
                  <input type="text" className="search searchInput" id="searchFood" placeholder="ex. cookies" onChange={(e) => this.foodChangeHandler(e)} /></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="form-group">
                  <h3 className="search seachHeader">Area
                  <input type="text" className="search searchInput" id="searchCity" placeholder="ex. Dallas, TX or 75202" onChange={(e) => this.zipCodeChangeHandler(e)} /></h3>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="form-group">
                  <h3 className="search seachHeader">Radius (miles)</h3>
                  <h3>
                    <select className="search searchInput" id="searchRadius" onChange={(e) => this.radiusChangeHandler(e)}>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                    </select>
                  </h3>
                </div>
              </div>

              <br />

              <div className="col-lg-1 col-md-1 col-sm-6">
                <h3><input type="submit" className="button search searchButton p-3" id="searchSubmit" value="Search" onClick={(e) => this.sendInfo(e)} /></h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-6 col-sm-12">
                <h2 className="ResultsHed">Results</h2>
                <CardLoader clickHandler={this.props.clickHandler} results={this.state.searchResults}/>
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Searchbar;
