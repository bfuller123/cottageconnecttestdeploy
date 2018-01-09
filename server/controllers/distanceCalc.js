import React from "react";

// EXAMPLE OF HTML div (p) THAT WORKS WITH distance SCRIPT BELOW

// <p>This example calls a function which calculates the distance of two lat/long points:</p>

// 	<p id="demo"></p>


	// this is based on the Haversine formula

function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  // return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  return 7918 * Math.asin(Math.sqrt(a)); // 2 * R; R = 3959 miles

}	
		var lat1 = 32.8974800; //center of dallas, WILL BE AN INPUT FROM OUR DATA
		var lon1 = -97.0404430;  //center of dallas, WILL BE AN INPUT FROM OUR DATA
		var lat2 = 32.9481789;  //center of richardson, WILL BE AN INPUT FROM OUR DATA
		var lon2 = -96.7297206;  //center of richardson, WILL BE AN INPUT FROM OUR DATA

document.getElementById("demo").innerHTML = distance(lat1, lon1, lat2, lon2);


export default distanceCalc;