var fea = require('../index.js');
var model = fea.createModel();

model
  .unit('lb,in,c')
  .geo()
    // Use tag for permanent, use alias for tmp
    .point().alias('a1')
    .x(0).y(0).z(0).dx(-0.13).dy(4.00).dz(8.00).alias('A')
  .geo();


