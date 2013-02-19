// var _ = require('lodash');
// var events = require('events');
// var util = require('util');
// util.inherits(FeModel, events.EventEmitter);




var GeoCollectionBase = Backbone.Collection.extend({
  model : GeoBase,
  set : function(attrs, options) {
    options || (options = {});
    options.validate = true;
    return Backbone.Model.prototype.set.call(this, attrs, options);
  },
  end : function() {
    return this.collection;
  },
  nth : function(nth, m) {
    if (!_.isUndefined(m)) {
      this.add(m, {
        at : nth,
        merge : true
      });
    }
    return this.at(nth);
  }
});

exports.GeoBase = GeoBase;
exports.GeoCollectionBase = GeoCollectionBase;
exports.makeAPI = makeAPI;




    

var defaultOptions = {
  solver : 'OpenSees'

};

function FeModel(conf) {
  events.EventEmitter.call(this);
  this.options = _.defaults(conf || {}, defaultOptions);
  
};

FeModel.prototype.info = function() {
  console.log('I am fe Model');
};

// Load submodules:
require('./geo')(FeModel.prototype);
// require('./mesh')(FeModel.prototype);
// require('./io')(FeModel.prototype);
// require('./templates')(FeModel.prototype);
require('./solver')(FeModel.prototype);
require('./interpreter')(FeModel.prototype);

exports.createModel = function(conf) {
  return new FeModel(conf);
};

