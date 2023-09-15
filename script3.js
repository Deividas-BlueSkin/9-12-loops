let arr = []

for (let i = 0; i < 100; i++) {
    arr[i] = i + 1
}

let newArr = arr.filter(function (num, index, array) {
    // console.log(`${num} num --> ${index} index`)
    return num % 2 == 0
})

// returns new array
let newArr1 = arr.map(function (num, index, array) {
    // console.log(`${num} num --> ${index} index`)
    return `${num} num --> ${index} index`

}).reverse()

//doesn't return new array
let newArr2 = arr.forEach(function (num, index, array) {
    // console.log(`${num} num --> ${index} index`)
    return `${num} num --> ${index} index`
})

// console.log(arr)
// console.log(newArr)
// console.log(newArr1)
// console.log(newArr2)


// function func() {
//     return 7 + 6
// }
// console.log(func())
// function func(n1,n2) {
//     return n1 + n2
// }
// console.log(func(7,6))
let go = function (text) {
    return 'GO ' + text
}
console.log(go('Florinon'))

let arrowFunc = () => {
    return 7 + 6
}
console.log(arrowFunc())

let arrowFunc2 = (n1, n2) => {
    return n1 + n2
}
console.log(arrowFunc2(6, 7))

let arrowFunc3 = t => {
    return t * t
}
console.log(arrowFunc3(55))

let arrowFunc4 = t => t * t

console.log(arrowFunc4(2))

let filterNums = arr.filter(num => num > 5)
console.log(filterNums)

let mapn = arr.map(num => 'map: ' + num * num)
console.log(mapn)