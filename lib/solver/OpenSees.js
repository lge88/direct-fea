var OpenSees = require('opensees');
var Solver = require('./Solver');

function OpenSeesSolver(model) {
  Solver.call(this, model);
  var ops = this.opensees = new OpenSees();
  
  ops.on('stdout', function(str) {
    console.log('stdout:' + str);
  });

  ops.on('stderr', function(str) {
    console.log('stderr:' + str);
  });

  ops.on('initialized', function(str) {
    console.log('initialized!');
    ops.interp('puts "current dir: [pwd]"');
    ops.interp('enable_model_history');
    ops.interp('source /home/GL/Develop/js/node-opensees/tests/tcl/truss.tcl');
    // ops.interp('model basic -ndm 2 -ndf 3');
    // ops.interp('node 2 3 3');
    // ops.interp('puts "try original node:"');
    
    // ops.interp('__node 1 2 3');
    
    ops.interp('print_cmd_history');
    // ops.interp('puts "\nhistory:\n$command_history"');
    // ops.interp('puts "\nhistory:\n[history]"');
  });
}
OpenSeesSolver.prototype = Object.create(Solver.prototype);

OpenSeesSolver.prototype.watchModel = function() {
  // this._model.on();
  return this;
};

OpenSeesSolver.prototype.solve = function() {
  console.log('OpenSees solve model:', this._model);
  return this;
};

module.exports = exports = OpenSeesSolver;

