var Backbone = require('backbone');
var _ = require('lodash');

var Base = Backbone.Model.extend({
  set : function(attrs, options) {
    options || (options = {});
    options.validate = true;
    return Backbone.Model.prototype.set.call(this, attrs, options);
  },
  end : function() {
    return this.collection;
  },
  attr : function(key, value) {
    if (arguments.length === 1) {
      if (_.isString(key)) {
        return this.get(key);
      } else if (_.isObject(key)) {
        return this;
      }
    } else if (arguments.length === 2 && _.isString(key)) {
      var obj = {};
      obj[key] = value;
      this.set(obj);
      return this;
    } 
    return console.error("Invalid usage of attr");
  }
});

function makeAPI(key) {
  var api = {};
  if (_.isString(key)) {
    api[key] = function(x) {
      if (_.isUndefined(x)) {
        return this.attr(key);
      } else {
        return this.attr(key, x);
      }
    };
  } else if (_.isArray(key)) {
    _.each(key, function(val) {
      if (_.isString(val)) {
        api[val] =  function(x) {
          if (_.isUndefined(x)) {
            return this.attr(val);
          } else {
            return this.attr(val, x);
          }
        };
      }
    });
  }
  return api;
}

var CollectionBase = Backbone.Collection.extend({
  model : Base,
  set : function(attrs, options) {
    options || (options = {});
    options.validate = true;
    return Backbone.Model.prototype.set.call(this, attrs, options);
  },
  end : function() {
    return this.collection;
  },
  addAndSelect : function(obj) {
    var ret;
    this.once('add', function(o) {
      ret = o;
    });
    this.add(obj);
    return ret; 
  },
  nth : function(index, m) {
    if (!_.isUndefined(m)) {
      this.add(m, {
        at : nth,
        merge : true
      });
    }
    return this.at(index);
  }
});

exports.Base = Base;
exports.makeAPI = makeAPI;
exports.CollectionBase = CollectionBase;
