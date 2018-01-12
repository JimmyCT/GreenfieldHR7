const pg = require('pg');
var conString = "pg://localhost:5432/postgres";
const client = new pg.Client({
	connectionString: conString //change to connectionString: process.env.DATABASE_URL when deployed to Heroku
   // ssl: true
});

client.connect();

let searchByRestaurantName = (name, callback) => {
	const text = 'SELECT * from restaurants where name like $1::text';
	client.query(text,[`%${name}%`] , (err, res) => {
	  if (err) {
	  	callback(err.stack, null);
	  } else {
	  	if (res.rows.length === 0) {
	  		client.query('select * from restaurants where category = $1', ['Burgers'], (err, resTwo)=>{
	  			if(!err) {
	  				callback(null, resTwo.rows)
	  			}
	  		})
	  	} else {
	  		callback(null, res.rows);	
	  	}
	  }
    })
}

let searchByRestaurantCategory = (category, callback) => {
	const text = 'SELECT * from restaurants where category like $1::text';
	client.query(text,[`%${category}%`] , (err, res) => {
	  if (err) {
	  	callback(err.stack, null);
	  } else {
	    if (res.rows.length === 0) {
	  		client.query('select * from restaurants where category = $1', ['Burgers'], (err, resTwo)=>{
	  			if(!err) {
	  				callback(null, resTwo.rows)
	  			}
	  		})
	  	} else {
	  		callback(null, res.rows);	
	  	}
	  }
	})
}


let addUser = (userInfo, callback) => {
	const selectQuery = 'select * from users where gmailid = $1';
	const insertQuery = 'insert into users (gmailaddress, gmailid, firstName, lastName) values ($1, $2, $3, $4)';
	client.query(selectQuery, [userInfo.id], (err, res) => {
		if (err) {
			callack(err.stack, null);
		} else {
			if (res.rows.length === 0) {
				client.query(insertQuery, [userInfo.emails[0].value, userInfo.id, userInfo.name.givenName, userInfo.name.familyName], (err, res2) => {
					callback(null, res.rows);
				})
			} else {
				callback(null, res.rows);
			}
		}
	})
}

let searchUser = (id, callback) => {
	const selectQuery = 'select * from users where id = $1';
	client.query(selectQuery, [id], (err, res) => {
		if (err) {
			callback(err.stack, null);
		} else {
			callback(null, res.rows[0]);
		}
	})
}



let getAllRestaurants = (callback) => {
	const queryStr = 'SELECT * FROM restaurants';
	client.query(queryStr, (err, restaurants) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, restaurants.rows);
		}
	});
}

module.exports = {
	searchByRestaurantName: searchByRestaurantName,
  searchByRestaurantCategory: searchByRestaurantCategory,
  addUser: addUser,
  searchUser: searchUser,
  getAllRestaurants: getAllRestaurants
}

