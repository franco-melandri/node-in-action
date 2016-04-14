'use strict';

module.exports = function (request, reply) {
 
	 var context = {
 		pageTitle: "Home Page",
 		pageContent: "Hello World!!!!!"
 	};
 
 	reply.view('./views/home', context);
};