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
let ul = create('ul')
ul.style.listStyle = 'none'

function list(text) {
    let li = create('li', ul)
    li.textContent = text
}


function game(start, end) {
    for (let i = start; i <= end; i++) {
        let rez = ''
        if (i % 3 == 0) {
            rez += 'Fizz'
        }
        if (i % 5 == 0) {

            rez += 'Buzz'
        }
        if (i % 7 == 0) {

            rez += 'Biff'
        }
        if (i % 9 == 0) {

            rez += 'Fuzz'
        }
        if (i % 11 == 0) {

            rez += 'Bizz'
        }
        if (!rez) {
            list(i)
        }
        else {
            list(rez)
        }
    }
}
game(1, 1000)