# nodenotes
1.make an empty folder //ex. mynode
2.run npm i npm on node cmd,it will create/install node modules in our empty folder
3.run npm init ,it will create package.json, you have to give some values for more detail see https://docs.npmjs.com/getting-started/using-a-package.json
4.run npm install <package_name> --save this command add package dependency in package.json
5.run npm install npm@latest -g ,The current stable version of npm is 6.4.0
6.make app.js file in mynodefolder
6.1 write this in app.js console.log('hiii we are going on write direction');
var express = require('express');
var app = express();
7.run npm set init.scripts.start "node app.js"  
8.run npm i express --save ,for fast routing
9.run npm start
10 make new folders in mynode:assets,routes,config

Now Open my app.js file
