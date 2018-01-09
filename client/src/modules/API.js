import axios from 'axios';

export default {

  // updateMerchant: function(){
  //   axios.get('/api/updateMerchant', {
  //     params: {
  //       id: "Brett"
  //     }
  //   })
  //   .then(function(response){
  //     console.log(response);
  //   })
  // }

  updateMerchant: function(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/updateMerchant');
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

};
