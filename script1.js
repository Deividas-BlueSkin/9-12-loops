console.log('Game:')
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
        if (!rez) {
            console.log(i)
        }
        else {
            console.log(rez)
        }
    }
}
game(1,1000)