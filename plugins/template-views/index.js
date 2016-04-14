'use strict';

var Handlebars = require('handlebars'),
    engine = Handlebars.create();

exports.register = function (server, options, next) {

	console.log('ergistering');

    server.expose('views_settings', {
        engines: {
            html: engine
        },
    });

  	next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};
