let l = 50;
let h = Math.round(rand(1, 360));
let s = Math.round(rand(0, 100));

let amount = 256;

let tileColor = get_random_color(h, s, l); 

// Create the starting grid
for (let i=0; i<amount; i++){
    let sketchPad = document.getElementsByClassName('sketch-pad')[0];
    let newDiv = document.createElement('div');
    newDiv.className = 'tile';
    sketchPad.appendChild(newDiv);
}

// Change the color when mouse leaves sketch-pad
const sketchPad = document.getElementsByClassName('sketch-pad')[0];
sketchPad.onmouseleave = () => {
    h = Math.round(rand(1, 360));
    s = Math.round(rand(0, 100));
}

// Change the color of the tiles on mouseover
const tiles = document.getElementsByClassName('tile');
Array.from(tiles).forEach(tile => tile.addEventListener('mouseover', event => {
    if (!event.target.style.backgroundColor) {
        event.target.style.backgroundColor = get_random_color(h, s, l);
    } else {
        event.target.style.backgroundColor;
    }
}));

function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color(h, s, l) {
    console.log('hsl(' + h + ',' + s + '%,' + l + '%)')
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}