let ocean = document.querySelector(".ocean");
let heroPlayer = document.querySelector(".hero-player");
let enemies = document.querySelector(".enemies");
let content;
let maxTop = 600;
let maxLeft = 1400;

let heroPlane = {
  left: 710,
  top: 585
};

let enemy = [
  { left: 220, top: 250 },
  { left: 470, top: 250 },
  { left: 800, top: 250 },
  { left: 1100, top: 250 },
];


function drawHeroPlane (){
    content = "<div class='hero-plane'; style='left:" + heroPlane.left + "px; top:" + heroPlane.top +"px'></div>";
    heroPlayer.innerHTML = content;
}
drawHeroPlane ();

function drawEnemies(){
    content = "";
    for (let i=0; i < enemy.length; i++){
        content += "<div class='plane" + (i+1) + "'; style = 'left: " + enemy[i].left + "px; top: " + enemy[i].top + "px'></div>";
    }
    enemies.innerHTML = content;
}
drawEnemies();

document.onkeydown = function (e){
console.log(e.keyCode);
    if (e.keyCode == 39 && heroPlane.left < maxLeft) // right
    {
        heroPlane.left += 10;
    }
    else if (e.keyCode == 37 && heroPlane.left > 20 ) // left
    {
        heroPlane.left -= 10;
    }
    else if (e.keyCode == 38 && heroPlane.top > 20)  //top
    {
        heroPlane.top -= 10;
    }
    else if (e.keyCode == 40 && heroPlane.top < maxTop)  //bottom
    {
        heroPlane.top += 10;
    }
    drawHeroPlane();
}