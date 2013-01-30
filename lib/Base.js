var _ = require("lodash");
var Events = require('backbone').Events;

function Base(opt) {
  if (!(this instanceof Base)) {
    return new Base(opt);
  }
  _.extend(this, Events);
  _.merge(this.options, opt);

  // defaults:   
  this._options = {
    units : 'lb,in,c',
    geo : {},
    mesh : {}
  };
  this.options(opt);

  // submodules:
  this._commander = commander(this);
  this.geo = geo(this);
  this.mesh = mesh(this);
  this.define = define(this);
  this.pattern = pattern(this);
  this.loadcase = lodecase(this);
  this.assign = assign(this);
  this.template = template(this);

  // data:
  this._msh = {};
  this._geo = {};
  this._locals = {};
  this._materials = {};
  this._assignments = {};
  this._timeSeries = {};
  this._patterns = {};
  this._cases = {};
  
  return this;
}

Base.prototype.options = function(key, val) {
  var obj;
  if (arguments.length === 1 && typeof key === 'object') {
    obj = key;
  } else if (arguments.length === 2 && typeof key === 'string') {
    obj = {
      key : val
    };
  } else if (arguments.length === 1 && typeof key === 'string') {
    key.split('.');
    return this._options[key];
  } else {
    console.error('Base::options(): invalid arguments');
    return this;
  }
  _.merge(this._options, obj);
  return this;
};

module.exports = exports = Base;
