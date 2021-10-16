const parentContainer =  document.querySelector('.body');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})
// music by sogy
let n = 0;
let isPlaying;
const musicList = [
    {title: "Memories", artist: "Maroon 5", track: "./audio/1-01-Memories.mp3"},
    {title: "In This Moment", artist: "Unknown", track: "./audio/in this moment.m4a"},
    {title: "You Raise Me Up", artist: "Josh Groban", track: "./audio/youraisemeup.m4a"},
    {title: "Night Changes", artist: "One Direction", track: "./audio/nightchanges.mp3"},
    {title: "You Are The Reason", artist: "Calum Scott", track: "./audio/youarethereason.mp3"},
    {title: "Replay", artist: "Iyaz", track: "./audio/replay.mp3"}
]

/* Note for musicList
{}, {}, {}
title artist track > all string ("")
track > music src
*/

const fl = document.querySelectorAll(".fl");
const leftCon = document.querySelector(".left-con");
const time = document.querySelector(".time");
const leftClickCon = document.querySelector(".left-click-con");

const realPro = document.querySelector(".real-pro");
const proShadow = document.querySelector(".pro-shadow");
const proCurrent = document.querySelector(".pro-current");

const disc1 = document.querySelector(".disc1");
const disc2 = document.querySelector(".disc2");

const titCon = document.querySelector(".tit-con");
const tit = document.querySelector(".tit");
const art = document.querySelector(".art");

const playBut = document.querySelector(".play");
const pauseBut = document.querySelector(".pause");
const nextBut = document.querySelector(".next");
const prevBut = document.querySelector(".prev");
const audioTag = document.querySelector("audio");

realPro.addEventListener("mousemove", (e) => {
    proShadow.style.width = e.offsetX + "px";
})

realPro.addEventListener("mouseleave", () => {
    proShadow.style.width = null;
})

realPro.addEventListener("click", (e) => {
    audioTag.currentTime = (e.offsetX * totalTime) / realPro.clientWidth;
})

function changeBut() {
    if (isPlaying) {
        playBut.style.visibility = "hidden";
        pauseBut.style.visibility = "visible";

        playBut.style.transform = "translate(-50%, -50%) rotate(90deg)";
        pauseBut.style.transform = "translate(-50%, -50%) rotate(0deg)";
    } else {
        playBut.style.visibility = "visible";
        pauseBut.style.visibility = "hidden";

        playBut.style.transform = "translate(-50%, -50%) rotate(0deg)";
        pauseBut.style.transform = "translate(-50%, -50%) rotate(-90deg)";
    }
}

function pauseMarquee() {
    tit.innerHTML = musicList[n].title;
    art.innerHTML = musicList[n].artist;
}

function addMarquee() {
    const titConWidth = titCon.clientWidth;
    if (tit.clientWidth > titConWidth) tit.innerHTML = "<marquee scrollamount='4'>" +  musicList[n].title +"</marquee>";
    if (art.clientWidth > titConWidth) art.innerHTML = "<marquee scrollamount='4'>" +  musicList[n].artist +"</marquee>";
}

function forAll1() {
    audioTag.play();
    isPlaying = true;
    changeBut();

    pauseMarquee();
    addMarquee();
}

function forAll2() {
    audioTag.src = musicList[n].track;
    forAll1();
}

playBut.addEventListener("click", () => {
    disc1.classList.add("box1");
    disc2.classList.add("box2");
    for (let i = 0; i < fl.length; i++) fl[i].style.display = "flex";
    leftCon.classList.add("new-left-con");

    if (finalcurrentTime === 0) forAll2();
    forAll1();
})

pauseBut.addEventListener("click", () => {
    audioTag.pause();
    isPlaying = false;
    changeBut();
    pauseMarquee();
})

function nextSong() {
    if (n === musicList.length - 1) {
        n = 0;
    } else {
        n++;
    }
    forAll2();
}

nextBut.addEventListener("click", nextSong);

prevBut.addEventListener("click", () => {
    if (n === 0) {
        n = musicList.length -1;
    } else {
        n--;
    }
    forAll2();
})

audioTag.addEventListener("ended", nextSong);

function fixTime(time){
    const min = Math.floor(time / 60);
    const sec = time % 60;

    const min0 = min < 10 ? "0" + min.toString() : min;
    const sec0 = sec < 10 ? "0" + sec.toString() : sec;

    return min0 + ":" + sec0;
}

let finalTotalTime, totalTime;
let finalcurrentTime = 0;
audioTag.addEventListener("loadeddata", () => {
    totalTime = Math.floor(audioTag.duration);
    finalTotalTime = fixTime(totalTime);
})

audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    finalcurrentTime = fixTime(currentTime);

    time.innerHTML = finalcurrentTime + " / " + finalTotalTime;
    proCurrent.style.width = (realPro.clientWidth / totalTime) * currentTime + "px";
})

leftClickCon.addEventListener("click", () => {
    disc1.classList.toggle("go-left");
    leftClickCon.children[0].classList.toggle("rotate");
})
// intro
const intro =document.querySelector('.intro');
const introText = intro.textContent;
const introArr = introText.split('');
intro.textContent = '';
console.log(introArr);

for (let i = 0; i < introArr.length; i++) {
  
  intro.innerHTML += '<span>' + introArr[i] + '</span>'
    
}

let char = 0;
let timer = setInterval(onRun,50);

function onRun(){
    const span = document.querySelectorAll('span')[char]
    span.classList.add('active')
    char++
    if (char === introArr.length) {
        complete();
        return;
    }
}
function complete(params) {
    clearInterval(timer)
    timer = null;
}