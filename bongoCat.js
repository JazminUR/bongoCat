//BONGOS
let bongoAElement = document.getElementById("bongoA");
let bongoDElement = document.getElementById("bongoD");

bongoAElement.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_bongo0.mp3");
    audio.play();

    // MOVE CAT'S PAW
    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 100); 
});

bongoDElement.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_bongo1.mp3");
    audio.play();

    // MOVE CAT'S PAW
    let pawLeftElement = document.getElementById("paw-left");
    pawLeftElement.style.backgroundPositionX = "-790px";
    setTimeout(function () {
        pawLeftElement.style.backgroundPositionX = "0px";
    }, 100);
});

//CYMBAL
let cymbalCElement = document.getElementById("cymbalP");

cymbalCElement.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_cymbal.mp3");
    audio.play();

    // MOVE CAT'S PAW
    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});

//COWBELL
let cowbellFElement = document.getElementById("cowbelF");

cowbellFElement.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_cowbell.mp3");
    audio.play();

    // MOVE CAT'S PAW
    let pawLeftElement = document.getElementById("paw-left");
    pawLeftElement.style.backgroundPositionX = "-790px";
    setTimeout(function () {
        pawLeftElement.style.backgroundPositionX = "0px";
    }, 100); 
});

//TAMBOURINE
let tambourineBElement = document.getElementById("tambourineB");

tambourineBElement.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_tambourine.mp3");
    audio.play();

    // MOVE CAT'S PAW
    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});

//MEOW
let meowSElement = document.getElementById("meowS");

meowSElement.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_meow.mp3");
    audio.play();

    // MOVE CAT´S MOUTH
    let mouthElement = document.getElementById("mouth");
    mouthElement.style.backgroundPositionX = "-790px";
    setTimeout(function () {
        pawLeftElement.style.backgroundPositionX = "0px";
    }, 100); 
});

//PIANO
let piano1Element = document.getElementById("piano1");
let piano9Element = document.getElementById("piano9");
let piano0Element = document.getElementById("piano0");

piano1Element.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_keyboard1.mp3");
    audio.play();

    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});

piano9Element.addEventListener("click", function (event) {
    let audio = new Audio("/assets/sounds/sounds_keyboard9.mp3");
    audio.play();

    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});

piano0Element.addEventListener("click", function (event) {
    let audio = new Audio("/assets/sounds/sounds_keyboard0.mp3");
    audio.play();

    // MOVE CAT'S PAW
    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});

//MARIMBA
let marimbaQElement = document.getElementById("marimbaQ");
let marimbaWElement = document.getElementById("marimbaW");
let marimbaPElement = document.getElementById("marimbaP");

marimbaQElement.addEventListener("click", function (event) {
    // PLAY SOUND
    let audio = new Audio("/assets/sounds/sounds_marimba1.mp3");
    audio.play();

    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});

marimbaWElement.addEventListener("click", function (event) {
    let audio = new Audio("/assets/sounds/sounds_marimba2.mp3");
    audio.play();

    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});

marimbaPElement.addEventListener("click", function (event) {
    let audio = new Audio("/assets/sounds/sounds_marimba9.mp3");
    audio.play();

    // MOVE CAT'S PAW
    let pawRightElement = document.getElementById("paw-right");
    pawRightElement.style.backgroundPositionX = "-800px";
    setTimeout(function () {
        pawRightElement.style.backgroundPositionX = "0px";
    }, 10); 
});
