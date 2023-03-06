const etchASketch = document.querySelector(".etchASketch")
const reset = document.querySelector(".reset")
const changeBoard = document.querySelector(".changeBoard")

reset.addEventListener('click', () => {
    let cube = document.querySelectorAll(".cube")
    cube.forEach((div) => {
        div.classList.remove('colored')
        div.classList.add('white')
    })
})

changeBoard.addEventListener('click', () => {
    changeGrid()
})

window.onload = changeGrid

function changeGrid() {
    let num = prompt("How many elements in each row?")
    if (num > 0 && num < 100) {
        let size = (960 / num) - 2
        let elementNumber = num ** 2
        console.log(size)
        console.log(elementNumber)
        let cube = document.querySelectorAll(".cube")
        cube.forEach((div) => {
            div.remove()
        })
        for (let i = 0; i < elementNumber; i++) {
            let createCube = document.createElement('div')
            createCube.classList.add('cube')
            createCube.style.cssText = 'margin: 1px;'
            createCube.style.height = size + "px"
            createCube.style.width = size + "px"
            createCube.classList.add('white')
            etchASketch.appendChild(createCube)
            console.log(createCube)
        }
    } else {
        alert("Invalid Input")
        changeGrid()
    }
    let cube = document.querySelectorAll(".cube")
    console.log(cube)

    cube.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.remove('white')
            div.classList.add('colored')
    })
})
}