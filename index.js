"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*** OBJECT ***/
var Obj = exports.Obj = function Obj() {
    _classCallCheck(this, Obj);
};

/*** ARRAY ***/

Obj.getOwnPropNamesFromObject = function (obj) {
    var propNames = [];
    undefined.doForEveryOwnPropNameInObject(obj, function (prop) {
        propNames.push(prop);
    });
    return propNames;
};

Obj.doForEveryOwnPropNameInObject = function (obj, cb) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            cb(prop);
        }
    }
};

Obj.doForEveryOwnPropValueInObject = function (obj, cb) {
    undefined.doForEveryOwnPropNameInObject(obj, function (prop) {
        cb(obj[prop], prop);
    });
};

Obj.increaseValueIfExistsElseSetToOne = function (obj, attr) {
    if (typeof obj[attr] === "number") obj[attr]++;else obj[attr] = 1;
};

Obj.map = function (obj, func) {
    var mappedObj = {};
    var cb = function cb(val, prop) {
        mappedObj[prop] = func(val, prop);
    };
    undefined.doForEveryOwnPropValueInObject(obj, cb);
    return mappedObj;
};

var Arr = exports.Arr = function Arr() {
    _classCallCheck(this, Arr);
};

Arr.getUniqueValuesByPropertyFromObjectArray = function (objArr, prop) {
    var values = [];
    objArr.forEach(function (obj) {
        if (values.indexOf(obj[prop]) < 0) values.push(obj[prop]);
    });
    return values;
};

exports.default = {
    Obj: Obj,
    Arr: Arr
};