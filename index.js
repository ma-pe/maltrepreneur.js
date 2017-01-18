/*** OBJECT ***/
export class Obj {

    static getOwnPropNamesFromObject = (obj) => {
        let propNames = [];
        this.doForEveryOwnPropNameInObject(obj, prop => {
            propNames.push(prop)
        });
        return propNames;
    };

    static doForEveryOwnPropNameInObject = (obj, cb) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                cb(prop);
            }
        }
    };

    static doForEveryOwnPropValueInObject = (obj, cb) => {
        this.doForEveryOwnPropNameInObject(obj, (prop) => {
            cb(obj[prop], prop);
        })
    };

    static increaseValueIfExistsElseSetToOne = (obj, attr) => {
        if (typeof obj[attr] === "number")
            obj[attr]++;
        else
            obj[attr] = 1;
    };

    static map = (obj, func) => {
        let mappedObj = {};
        let cb = (val, prop) => {
            mappedObj[prop] = func(val, prop);
        };
        this.doForEveryOwnPropValueInObject(obj, cb);
        return mappedObj;
    }
}


/*** ARRAY ***/

export class Arr {

    static getUniqueValuesByPropertyFromObjectArray = (objArr, prop) => {
        let values = [];
        objArr.forEach((obj) => {
            if (values.indexOf(obj[prop]) < 0)
                values.push(obj[prop]);
        });
        return values;
    };

}

const Maltrepreneur = {
    Arr,
    Obj
};



(function () {
    'use strict';

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Maltrepreneur;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        define('maltrepreneur.js', [], function () {
            return Maltrepreneur;
        });
    } else {
        window.Maltrepreneur = Maltrepreneur;
    }
}());
