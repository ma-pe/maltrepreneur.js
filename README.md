# maltrepreneur.js
Composition of Helper-Methods concerning processing of Objects and Arrays written in ES6. Without any dependencies.

## Usage

```
import Maltrepreneur, { Arr, Obj } from "maltrepreneur.js"

const testArray = [{title: "foo"}, {title: "bar"}];

Maltrepreneur.Arr.getUniqueValuesByPropertyFromObjectArray(testArray, "title"); // => ["foo", "bar"]

// also possible, depending on import-type
Arr.getUniqueValuesByPropertyFromObjectArray(testArray, "title"); // => ["foo", "bar"]
```

## API-Documentation

tbd.
