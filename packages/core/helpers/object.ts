const deepEqual = (obj1: any, obj2: any): boolean => JSON.stringify(obj1) === JSON.stringify(obj2)

export { deepEqual }
