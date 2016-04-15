'use strict';

module.exports = function (request, reply) {
 
	 var context = {
 		pageTitle: "About Page",
 		pageContent: "About"
 	};
 
 	reply.view('./views/about', context);
};