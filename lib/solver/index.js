module.exports = exports = function(proto) {  
  proto.solver = function() {
    if (!this._solver) {
      var Solver  = require('./' + this.options.solver);
      this._solver = new Solver(this);
    }
    return this._solver;
  };
};