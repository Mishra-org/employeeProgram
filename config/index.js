var configValues = require('./config.json');

module.exports = {
    getDbConnectionString : function(){
      return 'mongodb://'+configValues.user+':'+configValues.pwd+'@ds141294.mlab.com:41294/employee1';
}
}
