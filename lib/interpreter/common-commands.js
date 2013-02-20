var commands = [
  {
    name : 'info',
    execute : function() {
      this._interp.get('model').info();
    }
  }
];

module.exports = exports = commands;