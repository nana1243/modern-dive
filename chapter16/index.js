const person = {
    name : 'Lee',
    age : 30
}

/*  Output: Object.getOwnPropertyDescriptors(person)
* {
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 30, writable: true, enumerable: true, configurable: true }
}

* */
console.log(Object.getOwnPropertyDescriptors(person));