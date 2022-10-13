const mario = document.querySelector(".mario-run");
const cone = document.querySelector(".cone-verde");
const game_over = document.querySelector("#game-over");
const start_game = document.querySelector('#start-game');
let pontos = document.getElementById('score');

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval(() => {
    const conePosition = cone.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "")

    if (conePosition <= 120 && conePosition > 0 && marioPosition < 80) {
        cone.style.animation= "none";
        cone.style.left = `${conePosition}px`;
    
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
    
        mario.src = "./Images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginleft = "45px";

        tocaMarioMorre();
        game_over.style.display = 'block';
        clearInterval(loopGame);

        reset_button.addEventListener('click', () => {
        });

    }else if(conePosition < 0 && marioPosition >= 0) {
        tocaMarioCoin();
        updated();
    }

}, 100);

document.addEventListener("keydown", jump);

document.querySelector("#reset_button").addEventListener("click", () => {
    location.reload();
});
start_game.addEventListener("click", () => {
    cone.classList.toggle("cone-verde-start");
    start_game.style.display = 'none';
});

let score = 1;
function updated() {
    pontos.innerHTML = "score: " + score++;
};
function tocaMarioMorre(){
    document.querySelector("#mario-morre").play();
};
function tocaMarioCoin(){
    document.querySelector("#mario-coin").play();
};