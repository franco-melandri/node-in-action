
'use strict';

var glue = require('glue');

module.exports = (function() {
	

	// var Hapi = require(‘hapi’);
	// var server = new Hapi.Server();
	// server.connection({ port: 80 });
	 
	// server.start(function (err) {
	//   // Server running on port 80
	// });	

	
	const options = {
    	relativeTo: __dirname
	};

	glue.compose(require('./config/manifest.json'), 
			     options, 
			     (err, server) => {
					console.log('Starting server...');
					server.start (err => {
							if(err) {
								console.log(err);
								throw err;
							}
						console.log('Server running on port 8000');				
					});
	});

})();
