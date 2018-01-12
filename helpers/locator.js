const path = require('path');
const db = require('../database/index.js');

//Worst time: 450ms
//Best time: 152ms
var getCloseRestaurants = (userLat, userLon, callback) => {
	db.getAllRestaurants((err, restaurants) => {
		var allResults = {};
		var distances = [];
		var closestResults = [];

		restaurants.forEach(restaurant => {
			var resLat = parseFloat(restaurant.latitude);
			var resLon = parseFloat(restaurant.longitude);
			var distance = hypotenator(userLat, userLon, resLat, resLon);

			allResults[distance] = restaurant;
			distances.push(distance);
		});

		var distancesSorted = mergeSort(distances);
		
		for (var i = 0; i < 10; i++) {
			var restaurantStr = JSON.stringify(allResults[distancesSorted[i]]);
			var restaurant = JSON.parse(restaurantStr);
			restaurant.distance = distancesSorted[i];
			
			closestResults.push(restaurant);
		}

		callback(closestResults);
	});
}

var hypotenator = (latA, lonA, latB, lonB) => {
	const R = 6371;
	var dLat = degreeToRadians(latB-latA); 
	var dLon = degreeToRadians(lonB-lonA); 
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(degreeToRadians(latA)) * Math.cos(degreeToRadians(latB)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; 
	return d;
};

var degreeToRadians = (degree) => {
    return degree * (Math.PI/180);
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};


module.exports = {
	getCloseRestaurants: getCloseRestaurants	
};