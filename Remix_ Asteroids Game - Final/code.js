var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["da7405d0-8d29-422f-bf38-8a21304a87aa","9c58213a-a00d-4c87-9bb9-787cffa0e765","9c884dbb-0e19-4afe-89e2-c1439d80f058","1f8324d7-5352-44bd-86d3-d80dfd1c01a8","8853bd03-404a-4be6-b0c2-59998ee4deb3","69cf280c-6bed-4154-9791-81d80e8e3e10","41abf791-98c8-4ea2-933d-4f0876f6de70","309eb462-7a82-43f8-82bc-89b17eb56d22","e10b832a-c027-4932-a7fe-112261742e2e"],"propsByKey":{"da7405d0-8d29-422f-bf38-8a21304a87aa":{"name":"ship","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NfaKeVW_BIqAsstRKRjd4JlnDvhvW_v2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/da7405d0-8d29-422f-bf38-8a21304a87aa.png"},"9c58213a-a00d-4c87-9bb9-787cffa0e765":{"name":"shipImmune","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"cJgvcP__tcFqczPvIRV10q9AZuVJWkDW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/9c58213a-a00d-4c87-9bb9-787cffa0e765.png"},"9c884dbb-0e19-4afe-89e2-c1439d80f058":{"name":"destroyShip","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":20,"looping":true,"frameDelay":12,"version":"HIxFurXeER3rXBs29A8XXSukabWLE1n6","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":500},"rootRelativePath":"assets/9c884dbb-0e19-4afe-89e2-c1439d80f058.png"},"1f8324d7-5352-44bd-86d3-d80dfd1c01a8":{"name":"shipThrustBackward","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"11RT56wlOzAFJk8WnzPVHBLWRjKP0RPt","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1f8324d7-5352-44bd-86d3-d80dfd1c01a8.png"},"8853bd03-404a-4be6-b0c2-59998ee4deb3":{"name":"shipThrustForward","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"m2jZhKgHatZyTabFBOHAnOEJ4yh7cQlE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8853bd03-404a-4be6-b0c2-59998ee4deb3.png"},"69cf280c-6bed-4154-9791-81d80e8e3e10":{"name":"missle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KXfSlW1OmRv_ifYOOPmB5qggGVpz3vwI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/69cf280c-6bed-4154-9791-81d80e8e3e10.png"},"41abf791-98c8-4ea2-933d-4f0876f6de70":{"name":"bigAsteroid","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"mUpspd3MQatDiiaf7kmJUFGmnwG5IddW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/41abf791-98c8-4ea2-933d-4f0876f6de70.png"},"309eb462-7a82-43f8-82bc-89b17eb56d22":{"name":"enemyShip","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bEBofR4e05YLw5zUS7ap_2cMyPnIzzPk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/309eb462-7a82-43f8-82bc-89b17eb56d22.png"},"e10b832a-c027-4932-a7fe-112261742e2e":{"name":"bullet","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"pQf5wCHoB_kd61vNlS8bdSAzqfQ1veRu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e10b832a-c027-4932-a7fe-112261742e2e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var enemy = createSprite(-50,200);
enemy.setAnimation("enemyShip");
enemy.scale = 0.3;
enemy.velocityY = -4;
enemy.velocityX = 2;
enemy.setCollider("circle");
enemy.debug = false;
enemy.visible = false;

var bullet = createSprite(200, 200);
bullet.setAnimation("bullet");
bullet.scale = 0.1;
bullet.setCollider("circle");
bullet.debug = false;
bullet.visible = false;

var ship = createSprite(200, 200);
ship.setAnimation("ship");
ship.scale = 0.3;
ship.setCollider("circle");
ship.debug = false;

var missle = createSprite(200,200);
missle.setAnimation("missle");
missle.scale = 0.3;
missle.visible = false;

var asteroids = createGroup();

var smallAsteroids = createGroup();

var smallAsteroidCount = 0;

var shipKilled = 0;

var counter = 0;

var animationStep = 1;

var placement = 0;

var randomYa = 0;

var randomYb = 0;

var score = 0;

var lives = 3;

var level = 1;

var clearLevel = 1;

var spawnCount = 0;

var asteroidCount = 0;

var speed = 0;

var missleDirection = 0;

var shoot = 0;

var bulletAngle = 0;

var beat = 0;

var immune = 0;

function spawnAsteroids() {
  
  if (spawnCount < level) { 
  
  for (var i=0; i < level; i++){
    
    placement = randomNumber(1,10);
    
    if (placement < 6){
      randomYa = (randomNumber (50, 100));
      asteroids.add(createSprite(randomNumber(50, 350), randomYa));
    } else {
      randomYb = randomNumber(250, 350);
      asteroids.add(createSprite(randomNumber(50, 350), randomYb));
    }
    
    asteroids.setAnimationEach("bigAsteroid");
    asteroids.setScaleEach(0.6);
    asteroids.displace(asteroids);
    asteroids.get(i).rotationSpeed = randomNumber(-2, 2);
    if (asteroids.get(i).rotationSpeed == 0){
      asteroids.get(i).rotationSpeed = 1;
    }
    asteroids.get(i).velocityX = randomNumber(-1,1);
    if (asteroids.get(i).velocityX == 0){
      asteroids.get(i).velocityX = 1;
    }
    asteroids.get(i).velocityY = randomNumber(-1,1);
    if (asteroids.get(i).velocityY == 0){
      asteroids.get(i).velocityY = 1;
    }
    asteroids.setColliderEach("circle");
    spawnCount++;
  }
  }
}

function spawnSmallAsteroids(x, y){
  for (var i = smallAsteroidCount; i < (smallAsteroidCount + 2); i++){
    smallAsteroids.add(createSprite(x + 10, y + 10));
    smallAsteroids.setAnimationEach("bigAsteroid");
    smallAsteroids.setScaleEach(0.3);
    smallAsteroids.displace(smallAsteroids);
    smallAsteroids.displace(asteroids);
    smallAsteroids.get(i).rotationSpeed = randomNumber(-2, 2);
    if (smallAsteroids.get(i).rotationSpeed == 0){
      smallAsteroids.get(i).rotationSpeed = 1;
    }
    smallAsteroids.get(i).velocityX = randomNumber(-1,1);
    if (smallAsteroids.get(i).velocityX == 0){
      smallAsteroids.get(i).velocityX = 1;
    }
    smallAsteroids.get(i).velocityY = randomNumber(-1,1);
    if (smallAsteroids.get(i).velocityY == 0){
      smallAsteroids.get(i).velocityY = 1;
    }
    smallAsteroids.setColliderEach("circle");
  }
 
  smallAsteroidCount = smallAsteroidCount + 2;
}

function draw() {
  backgroundDraw();
  playMusic();
  spawnAsteroids();
  controlShip();
  setShipLocation();
  fireMissle();
  asteroids.bounce(asteroids);
  asteroidsDestroy();
  smallAsteroidsDestroy();
  asteroidsLoop();
  smallAsteroidsLoop();
  startEnemy();
  moveEnemy();
  shootBullet();
  destroyEnemy();
  destroyShip();
  reportScore();
  reportLives();
  checkLives();
  checkLevel();
  drawSprites();
}

function controlShip() {
  
  if (shipKilled == 0){
    if (keyDown("left")) {
      ship.rotation = ship.rotation - 2;
    }
    if (keyDown("right")) {
      ship.rotation = ship.rotation + 2;
    }
    if (keyDown("up")) {
      speed = speed + 0.05;
      ship.setAnimation("shipThrustForward");
      playSound("assets/thrust.mp3");
      ship.setSpeedAndDirection(speed, ship.rotation);
    } else if ((keyDown("down"))) {
      speed = speed - 0.05;
      ship.setAnimation("shipThrustBackward");
      playSound("assets/thrust.mp3");
      ship.setSpeedAndDirection(speed, ship.rotation);
    } else {
      ship.setAnimation("ship");
    }
}
}

function setShipLocation() {
  if (ship.x < 0) {
    ship.x = 400;
  }
  if (ship.x > 400) {
    ship.x = 0;
  }
  if (ship.y < 0) {
    ship.y = 400;
  }
  if (ship.y > 400) {
    ship.y = 0;
  }
}

function fireMissle() {

  if (keyDown("space")){

    missle.visible = true;
    
    missleDirection = missle.rotation;
    
    missle.setSpeedAndDirection(speed + 10, missleDirection);
    
    

  } else {
    missle.visible = false;
    missle.x = ship.x;
    missle.y = ship.y;
    missle.rotation = ship.rotation;
    
  }
  if (keyWentDown("space")){
    playSound("assets/fire.mp3", false);
  }

}

function asteroidsLoop() {
  for (var k=0; k < level; k++) {
    if (asteroids.get(k).x < -25){
      asteroids.get(k).x = 400;
    }
    if (asteroids.get(k).x > 425 && asteroids.get(k).x < 500){
      asteroids.get(k).x = 0;
    }
    if (asteroids.get(k).y < -25){
      asteroids.get(k).y = 400;
    }
    if (asteroids.get(k).y > 425){
      asteroids.get(k).y = 0;
    }
  }
}

function smallAsteroidsLoop() {
    for (var j=0; j < smallAsteroidCount; j++) {
      
      if (smallAsteroids.get(j).x < -25){
        smallAsteroids.get(j).x = 400;
      }
      if (smallAsteroids.get(j).x > 425 && smallAsteroids.get(j).x < 500){
        smallAsteroids.get(j).x = 0;
      }
      if (smallAsteroids.get(j).y < -25){
        smallAsteroids.get(j).y = 400;
      }
      if (smallAsteroids.get(j).y > 425){
        smallAsteroids.get(j).y = 0;
      }
  }
}


function asteroidsDestroy(){
  for (var j=0; j<level; j++){
    if (missle.visible == true && missle.isTouching(asteroids.get(j))){
      missle.x = 3000;
      spawnSmallAsteroids(asteroids.get(j).x, asteroids.get(j).y);
      playSound("assets/bangLarge.mp3");
      asteroids.get(j).x = 1000;
      asteroids.get(j).y = 200;
      asteroids.get(j).velocityX = 10;
      asteroids.get(j).velocityY = 0;
      score = score + 10;
      asteroidCount = asteroidCount + 1;
      clearLevel = clearLevel + 2;
    
    }
  }
    
}

function smallAsteroidsDestroy(){
  for (var j=0; j < smallAsteroidCount; j++){
    if (missle.visible == true && missle.isTouching(smallAsteroids.get(j))){
      playSound("assets/bangSmall.mp3");
      smallAsteroids.get(j).x = 1000;
      smallAsteroids.get(j).y = 200;
      smallAsteroids.get(j).velocityX = 10;
      smallAsteroids.get(j).velocityY = 0;
      score = score + 20;
      asteroidCount = asteroidCount + 1;
    }
  }
}

function backgroundDraw(){
  background("black");
  for (var i = 0; i < 2; i++){
    noStroke();
    fill("white");
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  }
  
}

function destroyShip() {
  
  if (shipKilled == 1 && immune == 0) {
    ship.setAnimation("destroyShip");
    ship.pause;
    counter++;
    if (counter == 5){
      ship.nextFrame();
      animationStep++;
      counter = 0;
    }
    
    if (animationStep == 10) {
      immune = 1;
    }
  }
  
  if (shipKilled == 1 && immune == 1){
    if (animationStep >= 10){
      ship.setAnimation("shipImmune");
      animationStep++;
    }
    
    if (animationStep >= 70){
      ship.displace(asteroids);
      ship.displace(smallAsteroids);
      shipKilled = 0;
      animationStep = 1;
      immune = 0;
      if (lives > 0){
      lives = lives - 1;
    }
    }
  }
    
    

  
  for (var i = 0; i < level; i++){
    if (ship.isTouching(asteroids.get(i))){
      shipKilled = 1;
      ship.setAnimation("destroyShip");
      slowShip();

      

    }
  
    
  }
  
  for (var j=0; j < smallAsteroidCount; j++){
   if (ship.isTouching(smallAsteroids.get(j))){
     shipKilled = 1;
      ship.setAnimation("destroyShip");
      slowShip();
   } 
  }
  
  if (enemy.visible == true && ship.isTouching(enemy)){
    shipKilled = 1;
    ship.setAnimation("destroyShip");
    slowShip();
  }
  
  if (bullet.visible == true && ship.isTouching(bullet)){
    shipKilled = 1;
    ship.setAnimation("destroyShip");
    slowShip();
  }
}


function slowShip () {
      playSound("assets/bangLarge.mp3");
      if (ship.velocityX > 0){
        ship.velocityX = ship.velocityX - 0.05;
      }
      if (ship.velocityX < 0){
        ship.velocityX = ship.velocityX + 0.05;
      }
      if (ship.velocityY > 0){
        ship.velocityY = ship.velocityY - 0.05;
      }
      if (ship.velocityY < 0){
        ship.velocityY = ship.velocityY + 0.05;
      }
  
}

function reportScore(){
  
  fill("white");
  textSize(18);
  text("Score: ", 10, 25);
  text(score, 75, 26);
  
}

function reportLives(){
  
  fill("white");
  textSize(18);
  text("Lives: ", 210, 25);
  text(lives, 275, 26);
  
}

function checkLives(){
  if (lives <= 0){
    
    ship.visible = false;
    lives = 0;
    fill("white");
    textSize(36);
    text("GAME OVER", 100, 200);
  }
}

function checkLevel(){
  
  if (asteroidCount == clearLevel){

    asteroids.destroyEach();
    smallAsteroids.destroyEach();
    level++;
    asteroidCount = 0;
    spawnCount = 0;
    smallAsteroidCount = 0;
    clearLevel = level;
    ship.x = 200;
    ship.y = 200;
    
    spawnAsteroids();
    enemy.x = -50;
    enemy.y = 200;
  }
}

function moveEnemy(){

  if (level >= 2 && enemy.x > 410){
    enemy.velocityX = -2;
  }
  if (level >= 2 && enemy.x < -10){
    enemy.velocityX = 2;
  }
  if (enemy.y <= 50){
    enemy.velocityY = 4;
  }
  if (enemy.y >=350){
    enemy.velocityY = -4;
  }
}

function startEnemy() {
  if (level == 2){
   enemy.visible = true;
  }
}

function shootBullet() {
  shoot++;
  
  if (shoot < 30){
    bullet.visible = false;
    bullet.x = enemy.x;
    bullet.y = enemy.y;
  }
  
  if (bullet.visible == false){
    if (shoot >= 30 && level >= 2){
      bullet.visible = true;
    }
  }
  
  if (bullet.visible == true && shoot < 35){
    bullet.pointTo(ship.x, ship.y);
    bulletAngle = bullet.rotation;
    bullet.setSpeedAndDirection((3), bulletAngle);
  }
  
  if (bullet.visible == true){
    if (shoot >= 90){
      shoot = 0;
      bullet.visible = false;
    }
  }
}

function destroyEnemy() {
  if (enemy.visible == true && missle.isTouching(enemy)){
    playSound("assets/bangSmall.mp3");
    enemy.x = 1000;
    score = score + 100;
  }
}

function playMusic(){
  beat++;
  if (beat == 15){
    playSound("assets/beat1.mp3");
  }
  if (beat == 45){
    playSound("assets/beat2.mp3");
  }
  if (beat == 60){
    beat = 0;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
