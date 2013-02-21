var _ = require('lodash');
module.exports = exports = function(base) {
  var Base = base.Base;
  var makeAPI = base.makeAPI;

  var Domain = Base.extend(_.extend({
    defaults : {

    },
    initialize : function(feModel) {
      this._model = feModel;
      var _this = this;
      this.end = this.model = function() {
        return _this._model;
      };
      
      var back = function() {
        return _this;
      };

    }

  }, makeAPI(['elements', 'nodes'])));
  
  return Domain;
};