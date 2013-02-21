var Backbone = require('backbone');
var interp = require('interpreter.js')();
interp.addCommand(require('./commands/server-commands.js'));

var base = require('./common-base.js')(Backbone);
var Geo = require('./geo')(base);
var Domain = require('./domain')(base);
var Solver = require('./solver')(base);

var FeModel = base.Base.extend({
  defaults : {

  },
  initialize : function() {
    interp._ctx['feModel'] = model;
    this.set({
      interpreter : interp
    });
  }
});

exports.FeModel = FeModel;