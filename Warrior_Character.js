window.addEventListener("load", function() {
    setInterval(charmv, 250)
}, false);

window.addEventListener("load", function() {
    setInterval(moveInterval, 40)
}, false);

var hpBar = new Image;
hpBar.src = "./res/hpbar.png";

var charImage = new Array(4);

var myCharDie = false;

charImage[0] = new Image;
charImage[0].src = "./res/char_0.png";
charImage[1] = new Image;
charImage[1].src = "./res/char_1.png";
charImage[2] = new Image;
charImage[2].src = "./res/char_2.png";
charImage[3] = new Image;
charImage[3].src = "./res/char_3.png";

charImage[0].onload = function() {
    char[0].width = this.width / 4;
    char[0].height = this.height / 8;
}

charImage[1].onload = function() {
    char[1].width = this.width / 4;
    char[1].height = this.height / 8;
}

charImage[2].onload = function() {
    char[2].width = this.width / 4;
    char[2].height = this.height / 8;
}

charImage[3].onload = function() {
    char[3].width = this.width / 4;
    char[3].height = this.height / 8;
}

var times = 1;

var char = new Array(4);

char[0] = {
    hp: 3000,
    fhp: 3000,
    ADamage: 200,
    ADefend: 30,
    MDefend: 20,
    ASpeed: 2,
    stack: 0,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    gigan: false,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
    beh: 0,
    state_temp: 0,
    x: 162,
    y: 112,
  critical:5,
  critDamage:1.5,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    silence: false,
    charge: 0,
    charging: false,
  blackout:false,
  smoke:false,
  rushing:false,
  contri:0
}

char[1] = {
    hp: 2000,
    fhp: 2000,
    MDamage: 200,
    ADefend: 15,
    MDefend: 15,
  ASpeed:2,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
    beh: 0,
    state_temp: 0,
    x: 260,
    y: 112,
  stack:0,
  critical:5,
  critDamage:1.5,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    charge: 0,
    silence: false,
    charging: false,
  blackout:false,
  smoke:false,
  contri:0
}

char[2] = {
    hp: 1600,
    fhp: 1600,
    ADamage: 400,
    ADefend: 10,
    MDefend: 10,
    ASpeed: 2,
    stack: 0,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
    beh: 0,
    stack:0,
    state_temp: 0,
    x: 162,
    y: 200,
  critical:5,
  critDamage:1.5,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    silence: false,
    charging: false,
  charge:0,
  dashing:false,
  blackout:false,
  smoke:false,
  contri:0
}

char[3] = {
    hp: 2500,
    fhp: 2500,
    ADamage: 80,
    ADefend: 15,
    MDefend: 15,
    ASpeed: 1,
    stack: 0,
    ALevel: 3,
    SLevel: 3,
    DLevel: 3,
    FLevel: 3,
    ACool: 0,
    SCool: 0,
    DCool: 0,
    FCool: 0,
    PCool: 0,
    width: 0,
    height: 0,
    speed: 4,
    state: 0,
  stack:0,
    beh: 0,
    state_temp: 0,
    x: 260,
    y: 200,
    doing: false,
    mvLeft: false,
    mvRight: false,
    mvUp: false,
    mvDown: false,
    mvFlag: false,
    state_limit: new Array(3, 3, 3, 3, 3, 3, 3, 3),
    attackFlag: true,
    silence: false,
    charging: false,
  shield:false,
  critical:5,
  critDamage:1.5,
  blackout:false,
  contri:0,
  smoke:false
}

function mvCheck() {
    for (var i = 0; i < char.length; i++) {
        if (char[i].mvLeft) return 'Left';
        else if (char[i].mvRight) return 'Right';
        else if (char[i].mvUp) return 'Up';
        else if (char[i].mvDown) return 'Down';
    }
}

function moveInterval() {
    for (var i = 0; i < char.length; i++) {
        if (char[i].mvLeft == true) char[i].x -= char[i].speed;
        if (char[i].mvRight == true) char[i].x += char[i].speed;
        if (char[i].mvUp == true) char[i].y -= char[i].speed;
        if (char[i].mvDown == true) char[i].y += char[i].speed;
        if (char[i].x < 162) {
            char[i].x = 162;
            char[i].mvLeft = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
                clearInterval(rushcharge);
            }
        }
        if (char[i].x > 1684) {
            char[i].x = 1684;
            char[i].mvRight = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
                clearInterval(rushcharge);
            }
        }
        if (char[i].y < 112) {
            char[i].y = 112;
            char[i].mvUp = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
                clearInterval(rushcharge);
            }
        }
        if (char[i].y > 806) {
            char[i].y = 806;
            char[i].mvDown = false;
            if (char[i].speed == 20) {
                char[i].charging = false;
                char[i].silence = false;
                char[i].speed = 4;
                char[i].mvUp = false;
                char[i].mvDown = false;
                char[i].mvLeft = false;
                char[i].mvRight = false;
                clearInterval(rushcharge);
            }
        }
      if(char[i].hp <= 0){
        charImage.splice(i, 1);
        char.splice(i, 1);
        if(i==0 && !myCharDie){
          myCharDie = true;
          gX = 0;
          gY = 0;
        }
        for(var j=0;j<Monsters.length;j++){
          if(Monsters[j].target == i){
            Monsters[j].target = Math.floor(Math.random()*char.length);
          }
        }
      }
    }
}

function charGotDamage(target, damage){
  char[target].hp -= (boss.speed == 0)? damage * (1-0.07) * (100 - char[target].ADefend) / 100 : damage  * (100 - char[target].ADefend) / 100;
}

function charmv() {
    for (var i = 0; i < char.length; i++) {
        if (char[i].state_limit[char[i].state] == char[i].beh) char[i].beh = 0;
        else char[i].beh++;
    }

      if(!myCharDie && char[0].rushing && (boss.x + 90 > char[0].x) && (boss.x + 20 < char[0].x + 100 * times) &&
            (boss.y + 20 < char[0].y + 130 * times) && (boss.y + 108 > char[0].y)){
        clearTimeout(rushTimeout);
        char[0].speed = 4;
        char[0].rushing = false;
        char[0].mvLeft = false;
        char[0].mvRight = false;
        char[0].mvUp = false;
        char[0].mvDown = false;
        boss.stun = true;
        boss.speed = 0;
        BossGotDamage(3 * attackDamage());
        setTimeout(function(){
          boss.stun = false;
          boss.speed = 3;
        }, 4000);
      }
      if(!myCharDie){
        for(var i=0;i<Monsters.length;i++){
          if(!myCharDie && char[0].rushing && (Monsters[i].x + 90 > char[0].x) && (Monsters[i].x + 20 < char[0].x + 100) &&
            (Monsters[i].y + 20 < char[0].y + 130) && (Monsters[i].y + 108 > char[0].y)){
        clearTimeout(rushTimeout);
        char[0].speed = 4;
        char[0].rushing = false;
        char[0].mvLeft = false;
        char[0].mvRight = false;
        char[0].mvUp = false;
        char[0].mvDown = false;
      }
        }
      }
}

socket.on('charMoving',function(data){
  var mvChar = 0;
  switch(data.job){
    case "magician" :
      mvChar = 1;
      break;
    case "archer" :
      mvChar = 2;
      break;
    case "supporter" :
      mvChar = 3;
      break;
    default :
      mvChar = 0;
      break;
  }
  switch(data.way){
    case "up" :
      char[mvChar].mvUp = data.bool;
      break;
    case "down" :
      char[mvChar].mvDown = data.bool;
      break;
    case "left" :
      char[mvChar].mvLeft = data.bool;
      break;
    case "right" :
      char[mvChar].mvRight = data.bool;
      break;
  }
});

socket.on('charBeh',function(data){
  var behChar = 0;
  switch(data.job){
    case "magician" :
      behChar = 1;
      break;
    case "archer" :
      behChar = 2;
      break;
    case "supporter" :
      behChar = 3;
      break;
    default :
      behChar = 0;
      break;
  }
  if(behChar != 0) char[behChar].beh = 0;
}

socket.on('bossSpeed', function(data){
  boss.speed = data.speed;
});

socket.on('effectPush', function(data){
  effect.push(data);
});
