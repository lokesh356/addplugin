var exec = require('cordova/exec');

exports.addMethod = function (arg0, success, error) {
    exec(success, error, 'addplugin', 'addMethod', arg0);
};
