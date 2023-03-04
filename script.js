const etchASketch = document.querySelector(".etchASketch")

for (let i = 0; i < 256; i++) {
    const cube = document.createElement('div')
    cube.classList.add('cube')
    cube.style.cssText = 'height: 60px; width: 60px'
    etchASketch.appendChild(cube)
}