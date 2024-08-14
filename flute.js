
//list of flute sound files mapped to keyboard keys
const sounds = {
    'a': 'sounds/sound1.wav',
    's': 'sounds/sound2.wav',
    'd': 'sounds/sound3.wav',
    'f': 'sounds/sound4.wav',
    'g': 'sounds/sound5.wav',
    'h': 'sounds/sound6.wav',
    'j': 'sounds/sound7.wav'
};


//function to play sound
function playSound(key) {
    if (sounds[key]) {
        const audio = new Audio(sounds[key]);
        audio.play();
    }
}


//event listener for keydown event
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    playSound(key);
})
