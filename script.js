let body = document.body

let container = document.querySelector('div')

function create(HTMLelement = 'div', parent, classes, id) {
    let element = document.createElement(HTMLelement)
    if (parent) { parent.append(element) }
    else { document.body.append(element) }
    if (classes) { element.className = classes }
    if (id) { element.id = id }
    return element
}

// let text = create()
// let num = 0

// for(let i=0;i<10;i++){
//     num++
//     text.textContent = num
// }

function multi(num) {
    for (let i = 1; i < 100; i = i * num) {
        console.log(i)
    }
}
function add(num) {
    for (let i = 1; i < 100; i += num) {
        console.log(i)
    }
}
function sub(num) {
    for (let i = 100; i > 1; i -= num) {
        console.log(i)
    }
}
function pow(num) {
    for (let i = 2; i < 100; i = i ** num) {
        console.log(i)
    }
}

multi(2)
multi(5)
add(5)
sub(2)
pow(2)
pow(3)

function numLoop(inc, action, start, end) {
    if (end > start) {
        if (action == '*') {
            for (let i = start; i < end; i = i * inc) {
                console.log(i)
            }
        }
        if (action == '/') {
            for (let i = end; i > start; i = i / inc) {
                console.log(i + ' danger!')
            }
        }
        if (action == '+') {
            for (let i = start; i < end; i = i + inc) {
                console.log(i)
            }
        }
        if (action == '-') {
            for (let i = start; i < end; i = i - inc) {
                console.log(i)
            }
        }
    }
    else if (start > end) {
        if (action == '*') {
            for (let i = end; i < start; i = i / inc) {
                console.log(i + ' danger!')
            }
        }
        if (action == '/') {
            for (let i = start; i > end; i = i * inc) {
                console.log(i)
            }
        }
        if (action == '+') {
            for (let i = end; i < start; i = i - inc) {
                console.log(i)
            }
        }
        if (action == '-') {
            for (let i = end; i < start; i = i - inc) {
                console.log(i)
            }
        }
    }
}


