const express = require('express');
const bodyParser  = require('body-parser');
const path  = require('path');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');
const cookieSession = require('cookie-session');
//const googleClient = require('../config.js');
const passport = require('passport');
const database = require('../database/index.js')
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use(cookieSession({
// 	maxAge: 24 * 3600000,
// 	keys: [googleClient.cookieKey]
// }));
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

app.get('/restaurant/name/:name', (req, res)=>{
	let name = req.params.name;
	database.searchByRestaurantName(name, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
      res.status(200).json(results);
		}
	})
});

app.get('/restaurant/category/:category', (req, res)=>{
	let category = req.params.category;
	database.searchByRestaurantCategory(category, (err, results)=>{
		if (err) {
			res.status(404).send(err);
		} else {
			console.log('server get this result from db', results[0])
            res.status(200).json(results);
		}
	})
});

app.get('/restaurant/near', (req, res) => {
	console.log('listening to reqs on /restaurant/near');
});

app.listen(app.get('port'), function() {
  console.log('server listen on port ' + app.get('port'))
})

// example