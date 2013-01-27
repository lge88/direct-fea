var ops = require('opensees');
var gmsh = require('gmsh');
var _ = require("lodash");
var Events = require('backbone').Events;

function Model(opt) {
    _.extend(this, Events);

    // default options, will be override by set()
    this.options = {
        template : 'solid3d'
    };
    
    this.set(opt);
    this.geo = gmsh.createGeo();
    this.options.mesh = gmsh.createMeshOptions();
    
}

Model.prototype.addPoint = function(array, lc) {
    
    // TODO: Deal with arguments
    
    this.geo.addPoint(array, lc);
    return this;
};

Model.prototype.set = function(key, val) {
    
    // TODO: Deal with arguments
    var obj;
    if (arguments.length === 1 && typeof key === 'object') {
        obj = key;
    } else if (arguments.length === 2 && typeof key === 'string') {
        obj = {
            key : val
        };
    } else {
        console.error('Model::set(): invalid arguments');
        return false;
    }
    _.merge(this.options, obj);
    return this;
};

require('./templates/frame2d.js');
require('./templates/truss2d.js');
require('./templates/frame3d.js');
require('./templates/truss3d.js');
require('./templates/plane2d.js');
require('./templates/solid3d.js');

exports.Model = Model;
exports.createModel = function() {
    console.log('Create a fea model');
    return new Model();
};