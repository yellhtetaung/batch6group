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
const audioTag = document.querySelector("audio");
const playBut = document.querySelector(".play");
const pauseBut = document.querySelector(".pause");

playBut.addEventListener("click", () => {
    audioTag.play();
    
    playBut.style.zIndex = "-1";
    pauseBut.style.zIndex = "0";

    playBut.style.transform = "translate(-50%, -50%) rotate(90deg)";
    pauseBut.style.transform = "translate(-50%, -50%) rotate(0deg)";
})

pauseBut.addEventListener("click", () => {
    audioTag.pause();
   
    playBut.style.zIndex = "0";
    pauseBut.style.zIndex = "-1";

    playBut.style.transform = "translate(-50%, -50%) rotate(0deg)";
    pauseBut.style.transform = "translate(-50%, -50%) rotate(-90deg)";
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
