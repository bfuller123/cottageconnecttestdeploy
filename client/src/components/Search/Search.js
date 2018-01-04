import React from 'react';
import "./Search.css";

class Searchbar extends React.Component {
  render() {
    return(
      <form className="SearchBox" id="Search">
        <div className="SearchCenter">
          <h1 className="SearchHed">Quick Search of your Area</h1>
          <h3 className="search seachHeader">Food &#160;</h3>
          <input type="text" className="search searchInput" id="searchFood" placeholder="ex. cookies" />
          <h3 className="search seachHeader">Area&#160;</h3>
          <input type="text" className="search searchInput" id="searchCity" placeholder="ex. Dallas, TX or 75202" />
          <input type="submit" className="search searchButton" id="searchSubmit" value="search" />
        </div>   
      </form>
    )
  }
}

export default Searchbar;