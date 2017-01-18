var maltrepreneur = require("./index.js");

var test = maltrepreneur.Obj.map({
    test: "test",
    top: "blubb"
}, prop => {
    return prop + "?";
});

console.log(test);