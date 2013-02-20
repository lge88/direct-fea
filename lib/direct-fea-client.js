var Backbone = require('backbone');
require('backbone.iosync');
require('backbone.iobind');

var base = require('./common-base.js')(Backbone);
var Geo = require('./geo')(base);
var Mesh = require('./mesh')(base);


var FeModel = base.Base.extend({});

exports.FeModel = FeModel;
