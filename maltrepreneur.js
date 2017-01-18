/*** OBJECT ***/
export class Obj {

    static getOwnPropNamesFromObject = (obj) => {
        let propNames = [];
        doForEveryOwnPropNameInObject(obj, prop => {
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
        doForEveryOwnPropNameInObject(obj, (prop) => {
            cb(obj[prop], prop);
        })
    };

    static increaseValueIfExistsElseSetToOne = (obj, attr) => {
        if (typeof obj[attr] === "number")
            obj[attr]++;
        else
            obj[attr] = 1;
    };
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

export default {
    Arr,
    Obj
};