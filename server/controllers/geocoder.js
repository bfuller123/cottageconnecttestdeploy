import React from "react";

// EXAMPLE OF HTML FORM THAT WORKS WITH GEOCODER SCRIPT BELOW

// <div class="container">
//     <h2 id="text-center">Enter Location: </h2>
//     <form id="location-form">
//       <input type="text" id="location-input" class="form-control form-control-lg">
//       <br>
//       <button type="submit" class="btn btn-primary btn-block">Submit</button>
//     </form>
//     <div class="card-block" id="formatted-address"></div>
//     <div class="card-block" id="address-components"></div>
//     <div class="card-block" id="geometry"></div>
//   </div>


// source for axios.  Can be installed as an NPM
 // <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    // Call Geocode
    //geocode();

    // Get location form
    var locationForm = document.getElementById('location-form');

    // Listen for submit
    locationForm.addEventListener('submit', geocode);

    function geocode(e){
      // Prevent actual submit
      e.preventDefault();

      var location = document.getElementById('location-input').value;

      // NEED TO COMMENT OUT KEY ONCE HOSTED ON HEROKU
      axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      	params:{
      		address:location,
      		key:'AIzaSyC_nTVvqzEckQ6WzQmCV_POw6a80BmOQPo'
      	}
      })
      .then(function(response){
        // Log full response
        console.log(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);

        // Formatted Address
        var formattedAddress = response.data.results[0].formatted_address;
        var formattedAddressOutput = `
        <ul class="list-group">
        <li class="list-group-item">${formattedAddress}</li>
        </ul>
        `;

        // Address Components
        var addressComponents = response.data.results[0].address_components;
        var addressComponentsOutput = '<ul class="list-group">';
        for(var i = 0;i < addressComponents.length;i++){
        	addressComponentsOutput += `
        	<li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
        	`;
        }
        addressComponentsOutput += '</ul>';

        // Geometry
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var geometryOutput = `
        <ul class="list-group">
        <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
        <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
        </ul>
        `;
        console.log(lat);
        console.log(lng);
        // Output to app
        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
        document.getElementById('address-components').innerHTML = addressComponentsOutput;
        document.getElementById('geometry').innerHTML = geometryOutput;
    })
      .catch(function(error){
      	console.log(error);
      });
  }

export default geocoder;
