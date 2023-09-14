let arr = []

for (let i = 0; i < 100; i++) {
    arr[i] = i + 1
}

let newArr = arr.filter(function (num, index, array) {
    console.log(`${num} num --> ${index} index`)
    // console.log(array)//return all array
    return num % 5 == 0
})

console.log(arr)
console.log(newArr)