import React from "react";


var lat1 = 32.8974800; //center of dallas, WILL BE AN INPUT FROM OUR DATABASE
var lon1 = -97.0404430;  //center of dallas, WILL BE AN INPUT FROM OUR DATABASE

// below is code for a radius search

var searchRadius = 10; // this is in miles, WILL BE A USER SELECTABLE INPUT

// earth's radius in miles = ~6371
var earthRadius = 3959;

// converts radians to degrees
function rad2deg(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
};

// converts degrees to radians
function deg2rad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
};

  
// latitude boundaries
var maxLat = lat1 + rad2deg(searchRadius / earthRadius);
var minLat = lat1 - rad2deg(searchRadius / earthRadius);

// longitude boundaries (longitude gets smaller when latitude increases)
var maxLng = lon1 + rad2deg(searchRadius / earthRadius / Math.cos(deg2rad(lat1)));
var minLng = lon1 - rad2deg(searchRadius / earthRadius / Math.cos(deg2rad(lat1)));

console.log(lat1, lon1);
console.log(maxLat, minLat, maxLng, minLng);


// Now that we have these outer bounds, we can fetch results in our database like this (notice how an index can now be used to retrieve matching values for latitude/longitude):

// SELECT *
// FROM coordinates
// WHERE
//    lat BETWEEN :minlat AND :maxlat
//    lng BETWEEN :minlng AND :maxlng


export default radiusSearch;

