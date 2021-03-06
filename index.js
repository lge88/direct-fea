var _ = require("lodash");
var Events = require('backbone').Events;
var geo = require('./lib/geo');
var mesh = require('./lib/mesh');
var define = require('./lib/define');
var template = require('./lib/template');
var commander = require('./lib/commander');

function Model(opt) {
  if (!(this instanceof Model)) {
    return new Model(opt);
  }
  _.extend(this, Events);

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

Model.prototype.options = function(key, val) {
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
    console.error('Model::options(): invalid arguments');
    return this;
  }
  _.merge(this._options, obj);
  return this;
};

Model.prototype.geo = function() {
  return this._geo;
};

Model.prototype.mesh = function() {
  return this._mesh;
};

Model.prototype.template = function(str) {
  return this._templates[str];
};

Model.prototype.local = function(key, value) {
  this._locals[key] = value;
};

Model.prototype.clearLocal = function() {
  this._locals = {};
};

Model.prototype.units = function(str) {
  this.options({
    units : str
  });
};

Model.prototype.exec = function() {
  
};

exports.Model = Model;
exports.createModel = function() {
  return Model();
};