
'use strict';

exports.register = function (server, options, next) {
 
  var template = server.plugins['template-views'];
  
  template.views_settings.relativeTo = __dirname;
  server.views(template.views_settings);

  server.route({
    path: '/',
    method: 'GET',
    handler: require('./home')
  });
 
  next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};


