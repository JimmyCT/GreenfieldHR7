const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy

const googleClient = require('../../config.js')
const database = require('../../database/index.js')

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	//query database for user by id
	//when query in dataase is finished...
		//invoke done(err, user) where we replace err with null
	console.log('this occured');
	database.searchUser(id, function(err, user) {
		if (err) {
			console.error('ERROR:', err);
		} else {
			console.log('done with search User', user);
			done(null, user);
		}
	});
});

passport.use(new googleStrategy({
	clientID: googleClient.googleClientID,
	clientSecret: googleClient.googleClientSecret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
	database.addUser(profile, function(err, users) {
		if (err) {
			console.error('ERROR:', err);
		} else {
			done(null, users[0]);
		}
	});
	//done needs to be invoked inside callback of db function 
	//done (err, userInfo); userInfo is user's info in db
	console.log('strategy', profile);
}));
