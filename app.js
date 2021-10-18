const ground = document.getElementById('ground');
const wall = document.getElementById('wall');
const light = document.getElementById('light');
const cable = document.getElementById('cable');
const restaurantName = document.getElementById('restaurant-name');
const gameStartBtn= document.getElementById('start-game');
const imgOriginal = document.getElementById('game-italy-original');
const imgError = document.getElementById('game-italy');
const section = document.getElementsByTagName('section')[0];

tabVar = [ground, wall, light, cable, restaurantName];
tabScore = [];
let score = 0;

gameStartBtn.addEventListener('click', function(){
    play();
});

    // proposer un bouton rejouer quand gagné

function play(){
    prepareGame();
    listeners();
}

function prepareGame(){
    section.transition = "1s";
    section.style.visibility = "visible";
    imgOriginal.style.transition ="2s";
    imgError.style.transition ="2s";
    imgOriginal.style.filter = "blur(0px)";
    imgOriginal.style.filter = "saturate(100%)";
    imgError.style.filter = "blur(0px)";
    imgError.style.filter = "saturate(100%)";
}

function listeners(){
    // Après factorisation addEventListener
    tabVar.forEach(element => {
        element.addEventListener("click", function(){
            element.style.transition ="0.5s";
            element.style.opacity="1";
            controlScore(element);
        });
    });
}

// fonction qui contrôle le tableau des scores
function controlScore(element){
    if(tabScore.includes(element)){
        return;
    }
    else{
        tabScore.push(element);
        addScore();
    }
}

// fonction qui incrémente le score
function addScore(){
    console.log(tabScore);
    score = tabScore.length;

    return score;
}

console.log("score : ",score);

// Avant factorisation addEventListener

// ground.addEventListener("click", function(){
//     ground.style.transition ="0.5s";
//     ground.style.opacity="1";
// });

// wall.addEventListener("click", function(){
//     wall.style.transition ="0.5s";
//     wall.style.opacity="1";
// });

// light.addEventListener("click", function(){
//     light.style.transition ="0.5s";
//     light.style.opacity="0.75";
// });

// cable.addEventListener("click", function(){
//     cable.style.transition ="0.5s";
//     cable.style.opacity="1";
// });

// restaurantName.addEventListener("click", function(){
//     restaurantName.style.transition ="0.5s";
//     restaurantName.style.opacity="1";
// });