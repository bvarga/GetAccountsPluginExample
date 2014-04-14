cordova.define("com.bvarga.getaccounts.GetAccountPlugin", function(require, exports, module) { var GetAccounts = function() {};

GetAccounts.prototype.get = function(success, fail) {
	return cordova.exec( success, fail, 'GetAccountsPlugin', 'get', ["null"] );
};

module.exports = new GetAccounts();
});
