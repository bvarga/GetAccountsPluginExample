GetAccountsPluginExample
========================

an example project for GetAccountsPlugin 

The example app is in the repo, however here is a writeup about how it was born.

1. first I created a cordova app.

    cordova create app com.bvarga.example app
    
2. added android platform

    cordova platform add android
    
3. add the plugin. 

  Clone the [GetAccountsPlugin](https://github.com/bvarga/GetAccountsPlugin) 
  next to this repo, and type (don't forget to change the current dir to `app`):
  
    cordova plugin add ../../GetAccountsPlugin
    
4. add some code to the app. Under www/js/index.js add this int onDeviceReady:

          getaccounts.get( function(result){
          app.log('users: ' + JSON.stringify(result));
        }, function(error){
          app.log('error: ' + JSON.stringify(error));
        });

  and add the log method, which looks like this:
  
    log: function(msg){
      console.log(msg);
      var item = document.createElement('p');
      item.appendChild(document.createTextNode(msg));
      var element = document.getElementById('deviceready').appendChild(item);
    },
    
