let arrayA = [1, 2, 3, 3, 4, 5, 6]

// console.log(arrayA)
// console.log(arrayA.length)
//console.log(arrayA[0])


// let arrayB = ['bo', 15, 1.4,'moon',13574.8196541232179,[55,66,77,88,99]]

// console.log(arrayB[5][4])

// arrayB[0] = 'Sun Wu'
// console.log(arrayB[0])

// arrayB[6] = 'Land of Sorrow'

//bad way
// arrayB[arrayB.length] = 'Land of Shadow'

// console.log(arrayB.pop())
// arrayB.push('vomit')
// arrayB.PowB ='Ooze vomit'

// arrayB.shift()
// console.log(arrayB.shift())
// console.log(arrayB.unshift())
// console.log(arrayB)

// console.log(arrayB)
// arrayB.slice(2)


// console.log(arrayB.slice(2).shift())
// console.log(arrayB.splice(2,1,'Ghohoohhhhhho'))
// console.log(arrayB)

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// task
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

console.log(`[<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=->]`)

let arr = [4, 5, -5556, 155, 640, '15x', 6789,
    -5564, 478, 654, 'apple', 789, -51, 55, -222,
    0, -357, -56, 'change', 444, 7778, 4154, 4751]

arr.shift()
arr.pop() /
    console.log(`${arr.length} mid -> ${(arr.length) / 2}`) /
    arr.splice(Math.trunc(arr.length) / 2, 1)
arr.splice(-2, 1)
arr.splice(1, 1)
arr.splice(6, 2)
arr.splice(-6, 3)
arr.splice(2, 1, 888)
arr.splice(9, 1, 33, 789, 6543)
arr.splice(-1, 1, 321, 654, 987)
arr.splice(1, 0, 11)
arr.splice(13, 0, 1)
arr.splice(-1, 0, -1)
arr.unshift(1, 2, 3)
arr.push(-333, -321, -312)
arr.splice(Math.trunc(arr.length) / 2, 0, 0)
arr.shift()
arr.pop()
arr.unshift('start')
arr.push('end')

console.log(arr)

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// next task
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

let t1 = arr.slice(0, 1)
let t2 = arr.slice(-1, 1)
let t3 = arr.slice(1, 1)
let t4 = arr.slice(-2, 1)
let t5 = arr.slice(7, 1)
let t6 = arr.slice(-9, 1)
let t7 = arr.slice(Math.trunc(arr.length / 2), 1)
let t8 = arr.slice(0, 3)
let t9 = arr.slice(-3, 3)
let t10 = arr.slice(0, 10)
let t11 = arr.slice(-10, 10)
let t12 = arr.slice(2, 6)
let t13 = arr.slice(-5, 5)
let t14 = arr.slice(10, 9)
let t15 = arr.slice(-9, 9)
let t16 = arr.slice(1)
let t17 = arr.slice(-1)
let t18 = arr.slice(5)
let t19 = arr.slice(-5)
let t20 = arr.slice(0, Math.trunc(arr.length / 2))//vid
let t21 = arr.slice(-Math.trunc(arr.length / 2), Math.trunc(arr.length / 2))
let t22 = arr.slice(1, arr.length - 2)
let t23 = arr.slice(5, arr.length - 5)
let t24 = arr.slice(1, arr.length - 10)
let t25 = arr.slice(7, arr.length - 2)
let t26 = arr.slice(9, arr.length - 14)
let t27 = arr.slice(10, 9)
let t28 = arr.slice(7, 12)
let t29 = arr.slice(0, 5) + arr.slice(-8, 8)
let t30 = arr.slice(2, 3) + arr.slice(14, 3)





