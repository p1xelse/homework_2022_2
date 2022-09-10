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

    return args.reduce((accumulator, curValue) => {
        if (curValue === null) {
            throw new TypeError("One of the args is null");
        }
        if (typeof curValue !== "object") {
            throw new TypeError("One of the args is no object");
        }

        return Object.keys(curValue).reduce((_accumulator, key) => {
            if (!(key in _accumulator))
            _accumulator[key] = curValue[key];
            
                return _accumulator
        }, accumulator)
    }, {})
}
