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

const bl = document.querySelectorAll(".bl");
const angleLeft = document.querySelector(".fa-angle-left");

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

function forAll() {
    audioTag.src = musicList[n].track;
    audioTag.play();

    isPlaying = true;
    changeBut();

    pauseMarquee();
    addMarquee();
}

playBut.addEventListener("click", () => {
    disc1.classList.add("box1");
    disc2.classList.add("box2");
    for (let i = 0; i < bl.length; i++) bl[i].style.display = "block";
     
    forAll();
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
    forAll();
}

nextBut.addEventListener("click", nextSong);

prevBut.addEventListener("click", () => {
    if (n === 0) {
        n = musicList.length -1;
    } else {
        n--;
    }
    forAll();
})

audioTag.addEventListener("ended", nextSong);

angleLeft.addEventListener("click", () => {
    disc1.classList.toggle("go-left");
    angleLeft.classList.toggle("rotate");
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
