/** 
 * @author: Li Ge, lge@ucsd.edu
 * Module Name: Commander
 * Description:
 * Configure Options:
 * Methods:
 * Events: 
*/

var _ = require('lodash');
var undo = require('./undo');

function commander(ctx) {
  if (!(this instanceof commander)) {
    return new commander(ctx);
  }
  this.ctx = ctx;
  this.stack = new undo.Stack();
  this.commands = {};
  return this;
}

commander.prototype.setCommands = function(obj) {
  _.extend(this.commands, obj);
};

commander.prototype.addCommand = function(name, fun) {
  this.commands[name] = fun;
};

commander.prototype.removeCommands = function(arr) {
  var self;
      if (_.isString(arg)) {
        delete this.commands[str];
      } else if (_.isArray(arg)){
        _.each(arg, function(val) {
          self.removeCommands(val);
        });
      }
};

commander.prototype.undo = function() {
  this.stack.undo();
};

commander.prototype.redo = function() {
  this.stack.redo();
};

commander.prototype.execute = function() {
  if (arguments.length !== 1) {
    console.log(new Error('commander::execute only take one argument, either a string or array'));
    return false;
  }
  var cmd = arguments[0];
      if (_.isString(cmd)){
        cmd = cmd.split(' ');
      }
  if (!_.isArray(cmd) && cmd.length < 1) {
    return false;
  }
  
  if (cmd[0] === 'undo'){
    return this.undo();
  } else if (cmd[0] === 'redo'){
    return this.redo();
  } else {
    var Command = this.commands[cmd[0]];
    if (!_.isUndefined(Command) && _.isFunction(Command)) {
      var args = cmd.slice(1);
      return this.stack.execute(new Command(args));
    } else {
      return false;
    }
  }
};
module.exports = commander;
