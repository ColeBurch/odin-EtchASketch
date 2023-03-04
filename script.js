const etchASketch = document.querySelector(".etchASketch")

for (let i = 0; i < 256; i++) {
    const cube = document.createElement('div')
    cube.classList.add('cube')
    cube.style.cssText = 'height: 58px; width: 58px; background-color: white; margin: 1px;'
    etchASketch.appendChild(cube)
}