var configValues = require('./config.json');

module.exports = {
    getDbConnectionString : function(){
      return 'mongodb://'+configValues.user+':'+configValues.pwd+'@ds255794.mlab.com:55794/employee1';
}
}