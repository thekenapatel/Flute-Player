
//list of flute sound files mapped to keyboard keys
const sounds = {
    'a': 'sound1.wav',
    'f': 'sound4.wav',
    's': 'sound2.wav',
    'g': 'sound5.wav',
    'd': 'sound3.wav',
    'h': 'sound6.wav',
    'j': 'sound7.wav'
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
