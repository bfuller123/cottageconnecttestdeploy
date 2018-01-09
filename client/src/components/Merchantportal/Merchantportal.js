import React from 'react';
import "./MerchantPortal.css";

class MerchantPortal extends React.Component {

  render() {
    let categories = this.props.categories.map((item) => (
      <li><input type="text" value={item} /></li>
    ));

    let goods = this.props.goods.map((item) => (
      <li><input type="text" value={item} /></li>
    ));

    return(
      <div className="background">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-12">
            <h2 className="MHede">Welcome, {this.props.merchant}</h2>
            <h4 className="MType">Shop Address:  <input type="text" value={this.props.address} id="UserAddress" /></h4>
            <h4 className="MType">Shop Email:  <input type="text" value={this.props.email} id="UserEmail" /></h4>
            <h4 className="MType">Type of Shop:
              <ul>
                {categories}
              </ul></h4>
              <button id="addNewCategory" className="btn btn-info btn-lg" onClick={this.props.addCategoryBtnClick}>Add</button>
            <h4 className="MType">Products for Sale:
              <ul>
              {goods}
              </ul></h4>
              <button id="addNewGood" className="btn btn-info btn-lg" onClick={this.props.addGoodBtnClick}>Add</button>
              <button id="updateMerchantButton" className="btn btn-info btn-lg" onClick={this.props.submitBtnClick}>Update</button>
          </div>
        </div>
      </div>
    )
  }
}

export default MerchantPortal;
