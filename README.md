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