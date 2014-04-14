cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.bvarga.getaccounts/www/getaccounts.js",
        "id": "com.bvarga.getaccounts.GetAccountPlugin",
        "clobbers": [
            "getaccounts"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.bvarga.getaccounts": "3.0.0"
}
// BOTTOM OF METADATA
});