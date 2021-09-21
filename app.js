const ground = document.getElementById('ground');
const wall = document.getElementById('wall');
const light = document.getElementById('light');
console.log(wall);

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
