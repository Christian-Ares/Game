//Enemigos

class enemyLow{
    constructor(health, strength, defense){
        this.health = health
        this.strength = strength
        this.defense = defense
    }
    receiveDamage(damage){
        this.health -= damage
        this.defense -= damage / 2
        if(this.health > 0){
            // sacarlo del escenario del canvas
        }
    }
}

class enemyMid{
    constructor(x, y, health, strength, defense){
        this.health = health
        this.strength = strength
        this.defense = defense
        this.x = Math.floor(Math.random()*450);
        this.y = Math.floor(Math.random()*300);
    }
    receiveDamage(damage){
        this.health -= damage
        this.defense -= damage / 3
        if(this.health > 0){
            // sacarlo del escenario del canvas
        }
    }
}


class Enemies {
    constructor(){
        this.enemyLowArmy = []
        this.enemyMidArmy = []
    }

addLowEnemy(enemyLow){
    this.enemyLowArmy.push(enemyLow)
}
addMidEnemy(enemyMid){
    this.enemyMidArmy.push(enemyMid)
}

}

// class enemyHigh{
//     constructor(health, strength, defense){
//         this.health = health
//         this.strength = strength
//         this.defense = defense
//     }
//     receiveDamage(damage){
//         this.health -= damage
//         this.defense -= damage / 4
//         if(this.health > 0){
//             // sacarlo del escenario del canvas
//         }
//     }
// }


//Definicion del Player


    // class Hero {
    //     constructor(health, strength) {
    //         this.health = health
    //         this.strength = strength
    //         this.x = 200;
    //         this.y = 300;
    //     }
    //     attack() {
    //         this.strength
    //         return this.strength
    //     }
    //     receiveDamage(damage) {
    //         this.health -= damage
    //     }
    //     draw() {
    //         ctx.drawImage(this.heroTop, this.x, this.y, 100, 100)
    //     }


    // }
    // const hero = new Hero()



//Opcional
// class eliteLow{
//     constructor(health, strength, defense){
//         this.health = health
//         this.strength = strength
//         this.defense = defense
//     }
//     receiveDamage(damage){
//         this.health -= damage
//         this.defense -= damage / 4
//         if(this.health > 0){
//             // sacarlo del escenario del canvas
//         }
//     }
// }

// class enemyHigh{
//     constructor(health, strength, defense){
//         this.health = health
//         this.strength = strength
//         this.defense = defense
//     }
//     receiveDamage(damage){
//         this.health -= damage
//         this.defense -= damage / 4
//         if(this.health > 0){
//             // sacarlo del escenario del canvas
//         }
//     }
// }

// class finalBoss{
//     constructor(health, strength, defense){
//         this.health = health
//         this.strength = strength
//         this.defense = defense
//     }
//     receiveDamage(damage){
//         this.health -= damage
//         this.defense -= damage / 4
//         if(this.health > 0){
//             // sacarlo del escenario del canvas
//         }
//     }
// }


//Movimiento del enemigo
// const randomMove = () => {
//     if(counter % 5 === 0){
//     if (Math.floor(Math.random() * 10) < 5) {
//         enemy.x += enemy.vx
//     }
//     if (Math.floor(Math.random() * 10) > 5) {
//         enemy.x -= 2
//     }
//     if (Math.floor(Math.random() * 10) === 5) {
//         enemy.x--
//     }
//     if (Math.floor(Math.random() * 10) < 5) {
//         enemy.y -= 2
//     }
//     if (Math.floor(Math.random() * 10) > 5) {
//         enemy.y += 5
//     }
//     if (Math.floor(Math.random() * 10) === 5) {
//         enemy.y++
//     }
//     if (enemy.x > 650) {
//         enemy.x = 650
//     }
//     if (enemy.x < 0) {
//         enemy.x = 0
//     }
//     if (enemy.y > 450) {
//         enemy.y = 450
//     }
//     if (enemy.y < 0) {
//         enemy.y = 0
//     }
//     }
// }




const playerSprite = new Image();
playerSprite.src = "/Sprites/ataque.png";
const background = new Image();
background.src = "/Sprites/Fondo.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
    player.moving = true;
});
window.addEventListener("keyup", function(e) {
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer() {
    if (keys[38] && player.y > 100) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;         
    }
    if (keys[37] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;         
    }
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;         
    }
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;         
    }
}
function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++;
    else player.frameX = 0;
}
/*
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    handlePlayerFrame();
    requestAnimationFrame(animate);
}
animate();*/

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        handlePlayerFrame();
    }
}
startAnimating(15); 



let dateRightNow = Date.now()

const enemies = []

obstacles.length = 0


const createEnemies = ()=>{

    if(Date.now() - dateRightNow >= 1000){
      dateRightNow = Date.now()
      const newEnemy = new Enemy()
      enemies.push(newEnemy)
    }
  }

  const drawEnemy = () =>{
    enemies.forEach((enemy) => {
        ctx.drawImage(enemySprite, enemy.x, enemy.y, enemy.width, enemy.height)
    })
  }



  
//   const updateEnemy = ()=>{
//     obstacles.forEach((obstacle) => {
//       obstacle.y += 3
//     })
//   }









let direction = [1, 0, -1];
let randomDirectionx = 0
let randomDirectiony = 0
let speed = 1;

setInterval(() => {
    if (enemy.x > 650) {
        enemy.x = 650
    }
    if (enemy.x < 0) {
        enemy.x = 0
    }
    if (enemy.y > 400) {
        enemy.y = 400
    }
    if (enemy.y < 0) {
        enemy.y = 0
    }
    enemy.x = enemy.x + speed * randomDirectionx
    enemy.y = enemy.y + speed * randomDirectiony
}, 3000)
setInterval(() => {
    randomDirectionx = direction[Math.floor(Math.random() * 3)]
    randomDirectiony = direction[Math.floor(Math.random() * 3)]
}, 300)


