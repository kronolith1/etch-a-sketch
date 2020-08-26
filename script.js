function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    let h = Math.round(rand(1, 360));
    let s = Math.round(rand(0, 100));
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
var l = Math.round(rand(0, 100));

let tileColor = get_random_color(); 

let amount = 256;

for (let i=0; i<amount; i++){
    let sketchPad = document.getElementsByClassName('sketch-pad')[0];
    let newDiv = document.createElement('div');
    newDiv.className = 'tile';
    sketchPad.appendChild(newDiv);
};

const tiles = document.getElementsByClassName('tile');
Array.from(tiles).forEach(tile => tile.addEventListener('mouseover', event => {
    if (!event.target.style.backgroundColor) {
        event.target.style.backgroundColor = get_random_color();
    } else (
        event.target.style.backgroundColor
    )
}));