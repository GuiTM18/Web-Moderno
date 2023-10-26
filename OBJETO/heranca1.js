const ferrari = {
    modelo: 'LaFerrari',
    VelMax: 350
}

const volvo = {
    modelo: 'V40',
    VelMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)