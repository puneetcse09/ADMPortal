/**
 * Created by ravikant on 15/11/15.
 */
var express = require('express'),
    path = require('path'),
    compression = require('compression');
//var RedisStore = require('connect-redis')(express);
module.exports = function(app,config) {
    var rootPath = path.normalize(__dirname + '/../..');

    app.set('env',config.env);
    app.set('x-powered-by','NioGraph');
    config.env === 'prod' || config.env === 'production' ? app.set('view cache',true) : app.set('view cache',false);
    app.use(express.static(path.join(rootPath, '.tmp')));
    app.use(express.static(path.join(rootPath, 'downloads')));

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', rootPath + '/src/client');
}

