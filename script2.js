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
arr.pop()
console.log(`${arr.length} mid -> ${(arr.length) / 2}`)
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
// let t29 = arr.slice(0, 5) + arr.slice(-8, 8)
let t29 = arr.slice(0, 5).concat(arr.slice(-8, 8))
// let t30 = arr.slice(2, 3) + arr.slice(14, 3)
// let t30 = arr.slice(2, 3).concat(arr.slice(14, 3))

let t30 = [...arr.slice(2, 3), ...arr.slice(14, 3)]

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// next task 3
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-


// sukurti funkcija, kuri apjungtu 3.3 - 3.7 uzduotis?
// funkcija tures priimti masyva ir skaiciu is kurio turi dalintis masyve esantis skaicius



let result = []
result.push(arr.filter(function (n, i, arr) { return n > 0 }))
result.push(arr.filter(function (n, i, arr) { return n < 0 }))

function divide(array, divider) {
    let res = []
    for (let i = 0; i < divider.length; i++) {
        res[i] = (array.filter(function (filterNum) { return filterNum % divider[i] == 0 }))
    }
}
divide(arr, [2, 3, 5, 11, 31])

// result.push(arr.filter(function (n, i, arr) { return n % 2 == 0 }))
// result.push(arr.filter(function (n, i, arr) { return n % 3 == 0 }))
// result.push(arr.filter(function (n, i, arr) { return n % 5 == 0 }))
// result.push(arr.filter(function (n, i, arr) { return n % 11 == 0 }))
// result.push(arr.filter(function (n, i, arr) { return n % 31 == 0 }))

result.push(arr.filter(function (n, i, arr) { return n % 2 == 0 && n % 3 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 3 == 0 && n % 7 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 5 == 0 && n % 9 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 5 == 0 && n % 11 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 2 == 0 || n % 3 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 3 == 0 || n % 5 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 5 == 0 || n % 6 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 7 == 0 || n % 8 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 9 == 0 || n % 13 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 2 == 0 || n % 3 == 0 || n % 5 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 5 == 0 || n % 7 == 0 || n % 9 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 7 == 0 || n % 8 == 0 || n % 11 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n % 9 == 0 || n % 12 == 0 || n % 13 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n > 100 }))
result.push(arr.filter(function (n, i, arr) { return n > 555 }))
result.push(arr.filter(function (n, i, arr) { return n >= 888 }))
result.push(arr.filter(function (n, i, arr) { return n >= 6789 }))
result.push(arr.filter(function (n, i, arr) { return n < 50 }))
result.push(arr.filter(function (n, i, arr) { return n < 1000 }))
result.push(arr.filter(function (n, i, arr) { return n <= -1 }))
result.push(arr.filter(function (n, i, arr) { return n <= -5564 }))
result.push(arr.filter(function (n, i, arr) { return n < 1000 && n > 500 }))
result.push(arr.filter(function (n, i, arr) { return n < 100 && n > 0 }))
result.push(arr.filter(function (n, i, arr) { return n < 0 && n > -50 }))
result.push(arr.filter(function (n, i, arr) { return n <= 0 && n > -100 }))
result.push(arr.filter(function (n, i, arr) { return n >= 0 && n < 55 }))
result.push(arr.filter(function (n, i, arr) { return n >= 444 && n <= 654 }))
result.push(arr.filter(function (n, i, arr) { return n > 0 && n % 2 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n > 0 && n % 3 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n < 0 && n % 4 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n < 0 && n % 111 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n > 500 && n % 2 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n > 1000 && n % 3 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n < 1000 && n % 9 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n < 500 && n % 2 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n >= 33 && n % 3 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n >= 444 && n % 12 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n <= 155 && n % 5 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n <= -333 && n % 9 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n > 100 && n < 500 && n % 5 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n >= 888 && n < 1000 && n % 2 == 0 }))
result.push(arr.filter(function (n, i, arr) { return n <= 888 && n >= -333 && n % 3 == 0 && n != 0 }))
result.push(arr.filter(function (n, i, arr) { return isNaN(n) }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.length > 5 }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.length <= 5 }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.length < 7 }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.includes('t') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.includes('y') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && (n.includes('e') || n.includes('a')) }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && (n.includes('t') && n.includes('i')) }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && (n.includes('t') && !n.includes('k')) }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && (n.includes('a') && !n.includes('s')) }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.includes('t') && (n.match(/t/g) || []).length > 1 }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.includes('st') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.includes('nd') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && !n.includes('s') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && !n.includes('t') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && (!n.includes('r') && !n.includes('l')) }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && !isNaN(n[0]) }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.startsWith('s') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.startsWith('o') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.endsWith('d') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.endsWith('s') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.length > 4 && n.includes('o') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.length >= 5 && n.includes('a') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n.length % 2 == 0 }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && !n.length % 2 == 0 && n.includes('s') }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n[2] == 'a' }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && n[3] == 'l' }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && !n[4] == 't' && n.length > 4 }))
result.push(arr.filter(function (n, i, arr) { return typeof n === 'string' && !n.startsWith('e') && n.length < 6 && isNaN(n[0]) }))

console.log(result)

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// new task
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
let resultArray = []
// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą.
// Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:

// 4.1. Tik skaičius (number tipo duomenis).
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        let result = arr[i]
        console.log(result)
    }
}

var temp = arr.filter(function (num) {
    if (!isNaN(num)) {
        console.log(num)
        return num
    }
})
resultArray.push(temp)

resultArray.push(arr.map(function (str) {
    if (typeof (str) === 'string') {
        console.log(str)
        return str
    }
}).filter(num => num !== undefined))

// resultArray.push(arr.map(function (num) {
//     if (!isNaN(num)) {
//         console.log(num)
//         return num
//     }
// }).filter(num => num !== undefined))

// 4.2. Tik tekstą (string tipo duomenis).
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
        console.log(arr[i])
    }
}

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(Math.pow(arr[i], 4))
    }
}
resultArray.push(
    arr.map(function (num) {
        if (!isNaN(num)) {
            console.log(Math.pow(num, 4))
            return Math.pow(num, 4)
        }
    }).filter(num => num !== undefined)
)

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(arr[i] + 55)
    }
}
resultArray.push(arr.map(function (num) {
    if (!isNaN(num)) {
        console.log(num + 55)
    }
}).filter(num => num !== undefined))
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(arr[i] / 2)
    }
}
resultArray.push(arr.map(function (num) {
    if (!isNaN(num)) {
        console.log(num / 2)
    }
}).filter(num => num !== undefined))
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log('number: ' + arr[i])
    }
}
resultArray.push(arr.map(function (num) {
    if (!isNaN(num)) {
        console.log('number: ' + num)
    }
}).filter(num => num !== undefined))
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(`Index ${i}, Nubmer: ${arr[i]}`)
    }
}
resultArray.push(arr.map(function (num, i) {
    if (!isNaN(num)) {
        console.log(`Index ${i}, Nubmer: ${num}`)
    }
}).filter(num => num !== undefined))

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(i * arr[i])
    }
}
resultArray.push(arr.map(function (num, i) {
    if (!isNaN(num)) {
        console.log(i * num)
    }
}).filter(num => num !== undefined))

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        let temp
        if (i != 0) {
            temp = arr[i - 1] * arr[i]
        } else { temp = arr[i] }
        console.log(temp)
    }
}
resultArray.push(
    arr.filter(function (num, i) {
        if (!isNaN(num)) {
            let temp
            if (i != 0) {
                temp = arr[i - 1] * num
            } else { temp = num }
            return temp
        }
    }))

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i] && arr[i] * 5 > 350)) {
        console.log(arr[i])
    }
}
resultArray.push(arr.map(function (num) {
    if (!isNaN(num) && num * 5 > 350) {
        console.log(num)
    }
}).filter(num => num !== undefined))

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
        console.log(`${arr[i]} has ${arr[i].length} chars`)
    }
}
resultArray.push(arr.map(function (str) {
    if (typeof (str) === 'string') {
        console.log(`${str} has ${str.length} chars`)
    }
}).filter(num => num !== undefined))
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
        let temp
        temp.push(arr[i].toUpperCase().split('').flat().join('-'))
        console.log(temp)
    }
}
resultArray.push(arr.map(function (str) {
    if (typeof (str) === 'string') {
        console.log(str.toUpperCase().split('').flat().join('-'))
    }
}).filter(num => num !== undefined))
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
        let temp = []
        temp = arr[i].split('')
        temp[0] = '_'
        temp[2] = '_'
        temp = temp.join('')
        console.log(temp)
    }
}
resultArray.push(arr.map(function (str) {
    if (typeof (str) === 'string') {
        let temp = []
        temp = str.split('')
        temp[0] = '_'
        temp[2] = '_'
        temp = temp.join('')
        console.log(temp)
    }
}).filter(num => num !== undefined))
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
        console.log(arr[i].split('').reverse().join(''))
    }
}
resultArray.push(arr.map(function (str) {
    if (typeof (str) === 'string') {
        console.log(str.split('').reverse().join(''))
    }
}).filter(num => num !== undefined))

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
        console.log(`word '${arr[i]}' is between '${arr[i - 1]}' and '${arr[i + 1]}' in the array`)
    }
}
resultArray.push(arr.map(function (str, i) {
    if (typeof (str) === 'string') {
        console.log(`word '${str}' is between '${arr[i - 1]}' and '${arr[i + 1]}' in the array`)
    }
}).filter(num => num !== undefined))

console.log(resultArray)