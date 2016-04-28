// /*demo starter code from https://nodejs.org/en/about/*/

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 1337;

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {
//   console.log('Server running at http://${hostname}:${port}/');
// });

/*install twitter package via npm in terminal
https://www.npmjs.com/package/twitter*/
// require(['twitter'], function() {

// });

// define(function (require) {
// 	var Twitter = require('twitter');
// });

// Twit = require('twit');

// define(['require', 'twitter'], function (require) {
// 	var Twitter = require('twitter');
// })

var servi = require('servi');
var Twitter = require('twitter');
var http = require("http");


 
var client = new Twitter({
  consumer_key: 'k8CuMnRIA9q86vLlRNAuXOIFt',
  consumer_secret: 'YhC65MpcTDNAcU0nTBjStGatNfrWUJCDzl1wZUmRR2nJLL1d5j',
  access_token_key: '500278571-YwUQozdxDJu3WUhcqUe0Pxeqkv8X2suh8Eqg8ti3',
  access_token_secret: 'xm4DcKL6GyKfoFJTT6jtCEPZdOOrQrSt84xqAsupUKbRT'
});

var app = new servi(true);
port(8080);
route('/statuses', getData);
serveFiles("public");
 
// var params = {screen_name: 'crystalbrusch'};
// client.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets);
//   }
// });



function getData(request) {
	client.get('search/tweets', {q: 'love'}, function(error, data, response) { 
		console.log(data);
	    request.header("application/json");
	    request.respond(JSON.stringify(data.statuses))
	});
	console.log('done');
}
start();



// function getData(request) {





// //var params = {screen_name: 'crystalbrusch'};
// client.get('search/tweets', {q: 'love'}, function(error, tweets, response) { 
// 		console.log(tweets);
// 	}, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets);


//     request.header("application/json");
//     request.respond(JSON.stringify(data.statuses));


//   }
// });

// console.log('done');



// }
// start();




/*create a Twitter App
https://apps.twitter.com/*/

/*Twitter RESTful API calls
https://dev.twitter.com/rest/public*/
















