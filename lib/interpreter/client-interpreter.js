var commands = [
  {
    name : 'info',
    execute : function() {
      this._interp.get('model').info();
    }
  }
];

commands = commands.concat(require('./client-commands.js'));

module.exports = exports = function(proto) { 
  proto.interpreter = function() {
    if (!this._interpreter) {
      this._interpreter = require('interpreter.js')({
        model : this
      });
      this._interpreter.addCommand(commands);
    }
    return this._interpreter;
  };
};