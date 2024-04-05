const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio(`tunes/a.wav`); // po default vrijednosti, a se sa zvuk uzima

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // proslijedjuje se audio na osnovu dugmeta stisnutog
    audio.play(); // zvuk 

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // pritisnuto dugme
    clickedKey.classList.add("active"); //dodaje se klasa 
    setTimeout(() => { // uklanja se klasa
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // 
}

const showHideKeys = () => {
     
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    // ako je dugme uneseno za zvuk, onda sviraj
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);