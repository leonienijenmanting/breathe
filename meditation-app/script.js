const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 8000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const totalTimeS = totalTime / 1000;
const breatheTimeS = breatheTime / 1000;
const holdTimeS = holdTime / 1000;

document.getElementById('pointer-container').style.animation = `rotate ${totalTimeS}s linear forwards infinite`;

breathAnimation();

function breathAnimation () {
    text.innerText = 'adem in';
    container.style.animation = `grow ${breatheTimeS}s linear forwards`;

    setTimeout(() => {
        text.innerText = 'hou vast';

        setTimeout(() => {
            text.innerText = 'adem uit';
            container.style.animation = `shrink ${breatheTimeS}s linear forwards`;
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);

