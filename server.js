var express = require ('express'),
	app = express();



//SETUP
//environment vars
//how to set up for Openshift/AWS/Heroku 
//figure out what the environment variables are for respective cloud services
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 80);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.use(express.static(__dirname));

//ROUTES
//will automatically serve index.html from /public 

//LISTEN
app.listen(app.get('port'), app.get('ip'), function () {
	console.log('Listening @' + app.get('ip') + ' on port '+ app.get('port'));
})