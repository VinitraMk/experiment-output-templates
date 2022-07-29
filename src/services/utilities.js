export const isNullOrUndefined = val => typeof val === 'undefined' || val === null;

export const createNewObject = object => JSON.parse(JSON.stringify(object));

export const createNewArray = array => {
    const arrayCopy = array.map(a=>createNewObject(a));
    return arrayCopy;
};


