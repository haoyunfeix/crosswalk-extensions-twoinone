// Put in this file the JavaScript API for twoinone_windows_3

var _keyboardQuery = "queryKeyboard()";
var _keyboardListener = null;

var _tabletQuery = "queryTablet()";
var _tabletListener = null;

var _logListener = null;

extension.setMessageListener(function (msg) {

    if (_logListener instanceof Function) {
        _logListener(msg);
    }

    if (msg.substring(0, _keyboardQuery.length) === _keyboardQuery &&
        _keyboardListener instanceof Function) {
        var payload = msg.substring(_keyboardQuery.length);
        _keyboardListener(payload === "true");
    }

    if (msg.substring(0, _tabletQuery.length) === _tabletQuery &&
        _tabletListener instanceof Function) {
        var payload = msg.substring(_tabletQuery.length);
        _tabletListener(payload === "true");
    }
});

exports.log = function(callback) {
    _logListener = callback;
};

exports.haveKeyboard = function() {
    var result = extension.internal.sendSyncMessage(_keyboardQuery);
    return result === "true";
};

exports.monitorKeyboard = function(callback) {
    _keyboardListener = callback;
};

exports.isTablet = function() {
    var result = extension.internal.sendSyncMessage(_tabletQuery);
    return result === "true";
};

exports.monitorTablet = function(callback) {
    _tabletListener = callback;
};

// Emulator

exports.emulator = {};

exports.emulator.setIsTablet = function(isTablet) {
    extension.internal.sendSyncMessage("emulateSetIsTablet()" + (isTablet ? "true" : "false"));
};
