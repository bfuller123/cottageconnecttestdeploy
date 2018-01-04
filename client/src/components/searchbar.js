import React from 'react';

class Searchbar extends React.Component {
  render() {
    return(
      <form>
        <h3 className="search seachHeader">Food</h3>
        <input type="text" className="search searchInput" id="searchFood" placeholder="ex. cookies" />
        <h3 className="search seachHeader">Area</h3>
        <input type="text" className="search searchInput" id="searchCity" placeholder="ex. Dallas, TX or 75202" />
        <input type="submit" className="search searchButton" id="searchSubmit" value="search" />
      </form>
    )
  }
}

export default Searchbar;
