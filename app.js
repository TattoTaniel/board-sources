const board = document.querySelector('#board')
const SQUARES_NUMBER = 380

const colors = ['#F68DF5', '#F66546', '#F6B546', '#F6ED46', '#7DF646',
    '#46F6C3', '#46D1F6', '#5346F6', '#AD46F6', '#F646EE']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', () => removeColor)

    board.append(square)
}

function setColor(e) {
    const element = e.target
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    const element = e.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}