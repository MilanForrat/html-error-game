const ground = document.getElementById('ground');
const wall = document.getElementById('wall');
const light = document.getElementById('light');
const cable = document.getElementById('cable');
const restaurantName = document.getElementById('restaurant-name');

let score = 0;

ground.addEventListener("click", function(){
    ground.style.transition ="0.5s";
    ground.style.opacity="1";
});

wall.addEventListener("click", function(){
    wall.style.transition ="0.5s";
    wall.style.opacity="1";
});

light.addEventListener("click", function(){
    light.style.transition ="0.5s";
    light.style.opacity="0.75";
});

cable.addEventListener("click", function(){
    cable.style.transition ="0.5s";
    cable.style.opacity="1";
});

restaurantName.addEventListener("click", function(){
    restaurantName.style.transition ="0.5s";
    restaurantName.style.opacity="1";
});



console.log(score);
