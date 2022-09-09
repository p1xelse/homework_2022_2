'use strict';
/**
 * Функция, объединяющая ключи из объектов в один объект
 * @param {...Object} args - объекты
 * @returns {Object}
 * @throws исключение в случае отсутствия аргумента
 * @throws {TypeError} в случае, если хотя бы один из параметров не объект
 * @example
 * // returns {1:1, 2:2}
 * zip({1: 1}, {2:2})
 */
const zip = (...args) => {
    if (args.length === 0) {
        throw new Error("No args");
    }

    let initValue = {}

    let newObj = args.reduce((accumulator, curValue) => {
        if (typeof curValue != "object") {
            throw new TypeError("One of the args is no object");
        }

        for (let key of Object.keys(curValue)) {
            if (!(key in accumulator))
                accumulator[key] = curValue[key];
        }

        return accumulator
    }, initValue)

    return newObj
}
