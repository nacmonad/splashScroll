var express = require ('express'),
	app = express();

//figure out what the environment variables are for respective cloud services
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
//app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.use(express.static(__dirname));

//ROUTES
//will automatically serve index.html from /public 


//LISTEN
app.listen(app.get('port'), function () {
	console.log('Listening on port '+ app.get('port'));
})