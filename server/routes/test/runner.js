process.env.Node_ENV = 'test';

var base = process.env.PWD;
var config = require(base + '/config'),
    mongoose = require('mongoose'),
    post = require(base + '/server/routes'),
    Post = require(base + '/app/')