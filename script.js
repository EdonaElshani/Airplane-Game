let ocean = document.querySelector(".ocean");
let heroPlayer = document.querySelector(".hero-player");
let enemies = document.querySelector(".enemies");
let missilesClass = document.querySelector(".missiles");
let content;
let maxTopHero = 600;
let maxLeft = 1400;
let maxTopEnemy=570;

let heroPlane = {
  left: 710,
  top: 585
};
let enemy = [
  { left: 220, top: 25 },
  { left: 470, top: 25 },
  { left: 800, top: 25 },
  { left: 1100, top: 25 },
];
let missiles= [];


function drawHeroPlane (){
    content = `<div class = "hero-plane"; style="left: ${heroPlane.left}px; top: ${heroPlane.top}px"></div>`;
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
function drawMissiles(){
    content = "";
    for (let i=0; i<missiles.length;i++){
        content += `<div class = "missile"; style="left: ${missiles[i].left}px; top: ${missiles[i].top}px"></div>`;
    }
    missilesClass.innerHTML = content;
}
function moveMissiles(){
    for (let i=0; i<missiles.length;i++)
    {
        missiles[i].top-=30;
    }
}

function moveEnemies(){
    for (let i=0; i<enemy.length; i++){
        if (enemy[i].top<maxTopEnemy){
            enemy[i].top += 10;
        }
    }
}

document.onkeydown = function (e){
console.log(e.keyCode);
    if (e.keyCode == 39 && heroPlane.left < maxLeft) // right
    {
        heroPlane.left += 30;
    }
    else if (e.keyCode == 37 && heroPlane.left > 20 ) // left
    {
        heroPlane.left -= 30;
    }
    else if (e.keyCode == 38 && heroPlane.top > 450)  //top
    {
        heroPlane.top -= 10;
    }
    else if (e.keyCode == 40 && heroPlane.top < maxTopHero)  //bottom
    {
        heroPlane.top += 10;
    }
    if (e.keyCode == 32)
    {
        missiles.push({top: (heroPlane.top -40), left: (heroPlane.left + 50)});
        drawMissiles();
    }
    drawHeroPlane();
}

function gameLoop()
{
    console.log("Game Loop is runing");
    moveEnemies();
    drawEnemies();

    moveMissiles();
    drawMissiles();
    setTimeout(gameLoop, 1000);
}
gameLoop();