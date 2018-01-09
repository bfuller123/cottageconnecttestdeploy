import React from 'react';
import "./Search.css";
import CardLoader from "../Cardloader";
import axios from 'axios';

class Searchbar extends React.Component {

  constructor(){
    super();

    this.state = {
      searchResults: []
    }
  };

  sendInfo(e){
    e.preventDefault();
    let newData = [];
    //if you want to switch to a post method, put through params:{key:value, key2:value2}
    axios({
      method: 'get',
      url: '/cc/merchants'
    })
    //have to use arrow function here and on line 52 since es6 arrow functions since they always use this of the enclosing scope and therefore can place this to SearchBar!!
    .then((response) => {
      console.log(response.data);
      newData = response.data.slice(0, 3);
      console.log(newData);
      this.setState({searchResults: newData});
    })
  };

  render() {
    return(
      <div>
        <form className="SearchBox form-inline" id="Search">

           <h1 className="SearchHed">Quick Search of your Area</h1>
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-6 col-sm-12">
                <div className="form-group">
                  <h3 className="search seachHeader">Food &#160;
                  <input type="text" className="search searchInput" id="searchFood" placeholder="ex. cookies" /></h3>
                </div>
                <div className="form-group">
                  <h3 className="search seachHeader">&#160;&#160;Area&#160;
                  <input type="text" className="search searchInput" id="searchCity" placeholder="ex. Dallas, TX or 75202" /></h3>
                </div>
                <input type="submit" className="btn btn-info btn-lg search searchButton p-3" id="searchSubmit" value="Search" onClick={(e) => this.sendInfo(e)} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-6 col-sm-12">
                <h3>Results</h3>
                <CardLoader results={this.state.searchResults}/>
              </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Searchbar;
