const config = require('../config.js');
const request = require('request');

const getPhotos = (review, callback) => {
		const query = review.name; 
		const location = `${review.latitude}, ${review.longitude}`;
		const radius = 1000;	// meters
	var options = { 
		method: 'GET',
  		url: `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=${query}&key=${config.googlePlacesKey}&location=${location}&radius=${radius}`
    }
	request(options, (error, response, body) => {
		if (error) {
			// no photo
			review.photoURL = "https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg";
			callback(photoURL);
		} else {
			let photoReference = body.split('<photo_reference>')[1].split('</photo_reference>')[0];
			let photoURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}&sensor=false&maxheight=100&maxwidth=100&key=${config.googlePlacesKey}`;
			review.photoURL = photoURL;
			callback(photoURL);
		}
	});
	
}

module.exports = {
	getPhotos: getPhotos
}

