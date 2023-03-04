const etchASketch = document.querySelector(".etchASketch")

for (let i = 0; i < 256; i++) {
    const createCube = document.createElement('div')
    createCube.classList.add('cube')
    createCube.style.cssText = 'height: 58px; width: 58px; margin: 1px;'
    createCube.classList.add('white')
    etchASketch.appendChild(createCube)
}

const cube = document.querySelectorAll(".cube")
console.log(cube)

cube.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.remove('white')
        div.classList.add('colored')
    })
})