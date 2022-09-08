'use strict';
/**
 * Функция, объединяющая ключи из объектов в один объект
 * @param {object} args - объекты
 * @returns {object} | {}
 * @throws исключение в случае отсутствия аргумента
 * @example
 * zip({1: 1}, {2:2}) return {1:1, 2:2}
 */ 
const zip = (...args) => {
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
