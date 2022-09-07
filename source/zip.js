'use strict';

function zip(...args)
{
    if (args.length == 0) {
        throw new Error("No args")
    }
    let newObj = {}
    for (let arg of args) {
        for (let key of Object.keys(arg)){
            if (!(key in newObj))
                newObj[key] = arg[key]
        }
    }
    return newObj
}
