//Video
document.getElementById("video1").onclick = playPauseVideo;

let video1 = document.getElementById("video1");

function playPauseVideo() {
    
    if (video1.paused) {
        video1.play();
    } else {
        video1.pause();
    }
}

document.getElementById("sliderVol").oninput = canviVolum;

//Quan carreguem a la pàgina assignem a l'slider el valor que tingui el volum
document.getElementById("sliderVol").value =
    document.getElementById("video1").volume;

//Fem que quan es toqui l'slider s'executi la funció canviaVolum
document.getElementById("sliderVol").oninput = canviVolum;

function canviVolum() {

    //Assignem el valor de l'slider al volum de l'audio
    document.getElementById("video1").volume =
        document.getElementById("sliderVol").value;
}


document.getElementById("sliderDur").oninput = canviaTemps;

function canviaTemps() {
    //Assignem el valor de l'slider al temps de reproducció
document.getElementById("video1").currentTime =
    document.getElementById("sliderDur").value;
}

//Botons
document.getElementById("boto1").onclick = playPause1;
document.getElementById("boto2").onclick = playPause2;
document.getElementById("boto3").onclick = playPause3;
document.getElementById("boto4").onclick = playPause4;
document.getElementById("boto5").onclick = playPause5;
document.getElementById("boto6").onclick = playPause6;
document.getElementById("boto7").onclick = playPause7;
document.getElementById("boto8").onclick = playPause8;

let musica1 = document.getElementById("musica1");
let musica2 = document.getElementById("musica2");
let musica3 = document.getElementById("musica3");
let musica4 = document.getElementById("musica4");
let musica5 = document.getElementById("musica5");
let musica6 = document.getElementById("musica6");
let musica7 = document.getElementById("musica7");
let musica8 = document.getElementById("musica8");

function playPause1() {
    //document.getElementById("musica").muted = false;

    if (musica1.paused) {
        musica1.play();
    } else {
        musica1.pause();
    }
}

function playPause2() {
    //document.getElementById("musica").muted = false;

    if (musica2.paused) {
        musica2.play();
    } else {
        musica2.pause();
    }
}

function playPause3() {
    //document.getElementById("musica").muted = false;

    if (musica3.paused) {
        musica3.play();
    } else {
        musica3.pause();
    }
}

function playPause4() {
    //document.getElementById("musica").muted = false;

    if (musica4.paused) {
        musica4.play();
    } else {
        musica4.pause();
    }
}

function playPause5() {
    //document.getElementById("musica").muted = false;

    if (musica5.paused) {
        musica5.play();
    } else {
        musica5.pause();
    }
}

function playPause6() {
    //document.getElementById("musica").muted = false;

    if (musica6.paused) {
        musica6.play();
    } else {
        musica6.pause();
    }
}

function playPause7() {
    //document.getElementById("musica").muted = false;

    if (musica7.paused) {
        musica7.play();
    } else {
        musica7.pause();
    }
}

function playPause8() {
    //document.getElementById("musica").muted = false;

    if (musica8.paused) {
        musica8.play();
    } else {
        musica8.pause();
    }
}

//Loops
document.getElementById("loopIn1").onclick = loop1;
document.getElementById("loopIn2").onclick = loop2;
document.getElementById("loopIn3").onclick = loop3;
document.getElementById("loopIn4").onclick = loop4;
document.getElementById("loopIn5").onclick = loop5;
document.getElementById("loopIn6").onclick = loop6;
document.getElementById("loopIn7").onclick = loop7;
document.getElementById("loopIn8").onclick = loop8;

//document.getElementById("loopOut1").onclick = noloop1;
//document.getElementById("loopOut2").onclick = noloop2;
//document.getElementById("loopOut3").onclick = noloop3;
//document.getElementById("loopOut4").onclick = noloop4;
//document.getElementById("loopOut5").onclick = noloop5;
//document.getElementById("loopOut6").onclick = noloop6;
//document.getElementById("loopOut7").onclick = noloop7;
//document.getElementById("loopOut8").onclick = noloop8;

function loop1() {
    document.getElementById("musica1").loop = true;
}

function loop2() {
    document.getElementById("musica2").loop = true;
}

function loop3() {
    document.getElementById("musica3").loop = true;
}

function loop4() {
    document.getElementById("musica4").loop = true;
}

function loop5() {
    document.getElementById("musica5").loop = true;
}

function loop6() {
    document.getElementById("musica6").loop = true;
}

function loop7() {
    document.getElementById("musica7").loop = true;
}

function loop8() {
    document.getElementById("musica8").loop = true;
}


//Quan carreguem a la pàgina assignem a l'slider el valor que tingui el volum
document.getElementById("vol1").value =
    document.getElementById("musica1").volume;

//Fem que quan es toqui l'slider s'executi la funció canviaVolum
document.getElementById("vol1").oninput = canviVolum1;

function canviVolum1() {

    //Assignem el valor de l'slider al volum de l'audio
    document.getElementById("musica1").volume =
        document.getElementById("vol1").value;
}

document.getElementById("vol2").value = document.getElementById("musica2").volume;

document.getElementById("vol2").oninput = canviVolum2;

function canviVolum2() {
    document.getElementById("musica2").volume =
        document.getElementById("vol2").value;
}

document.getElementById("vol3").value = document.getElementById("musica3").volume;

document.getElementById("vol3").oninput = canviVolum3;

function canviVolum3() {
    document.getElementById("musica3").volume =
        document.getElementById("vol3").value;
}
document.getElementById("vol4").value = document.getElementById("musica4").volume;

document.getElementById("vol4").oninput = canviVolum4;

function canviVolum4() {
    document.getElementById("musica4").volume =
        document.getElementById("vol4").value;
}
document.getElementById("vol5").value = document.getElementById("musica5").volume;

document.getElementById("vol5").oninput = canviVolum5;

function canviVolum5() {
    document.getElementById("musica5").volume =
        document.getElementById("vol5").value;
}
document.getElementById("vol6").value = document.getElementById("musica6").volume;

document.getElementById("vol6").oninput = canviVolum6;

function canviVolum6() {
    document.getElementById("musica6").volume =
        document.getElementById("vol6").value;
}
document.getElementById("vol7").value = document.getElementById("musica7").volume;

document.getElementById("vol7").oninput = canviVolum7;

function canviVolum7() {
    document.getElementById("musica7").volume =
        document.getElementById("vol7").value;
}
document.getElementById("vol8").value = document.getElementById("musica8").volume;

document.getElementById("vol8").oninput = canviVolum8;

function canviVolum8() {
    document.getElementById("musica8").volume =
        document.getElementById("vol8").value;
}
