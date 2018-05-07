window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(e) {
    e.returnValue = false;
    switch (e.keyCode) {
        case 27:
            goLeft();
            break;
        case 37: // 왼쪽
            if (!char[0].mvFlag && char[0].charging == false && char[0].speed != 20 && !myCharDie) {
                char[0].state = 5;
                char[0].state_temp = 1;
                if(!char[0].moving) {
                  char[0].beh = 0;
                  char[0].moving = true;
                }
            }
            if (char[0].charging == false && char[0].speed != 20) char[0].mvLeft = true;
            break;
        case 38: // 위
            if (!char[0].mvFlag && char[0].charging == false && char[0].speed != 20 && !myCharDie) {
                char[0].state = 6;
                char[0].state_temp = 2;
                if(!char[0].moving) {
                  char[0].beh = 0;
                  char[0].moving = true;
                }
            }
            if (char[0].charging == false && char[0].speed != 20) char[0].mvUp = true;
            break;
        case 39: // 오른쪽
            if (!char[0].mvFlag && char[0].charging == false && char[0].speed != 20 && !myCharDie) {
                char[0].state = 7;
                char[0].state_temp = 3;
                if(!char[0].moving) {
                  char[0].beh = 0;
                  char[0].moving = true;
                }
            }
            if (char[0].charging == false && char[0].speed != 20) char[0].mvRight = true;
            break;
        case 40: // 아래
            if (!char[0].mvFlag && char[0].charging == false && char[0].speed != 20 && !myCharDie) {
                char[0].state = 4;
                char[0].state_temp = 0;
                if(!char[0].moving) {
                  char[0].beh = 0;
                  char[0].moving = true;
                }
            }
            if (char[0].charging == false && char[0].speed != 20) char[0].mvDown = true;
            break;
        case 32: // space
            if (gigantize == null && minimize == null) {
                        if (char[0].attackFlag && !char[0].charging) {
                            switch (char[0].state) {
                                case 1:
                                case 5:
                                     if (!char[0].gigan) {
                                        PBulletArr.push({
                                            x: 65,
                                            y: 70,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 1,
                                          speed: 0
                                        });

                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 150) && (boss.y < char[0].y + 180) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 150) && (Monsters[i].y < char[0].y + 180) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      }
                                    } else {
                                        PBulletArr.push({
                                            x: 35,
                                            y: 160,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 1,
                                          speed: 0
                                        });
                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 250) && (boss.y < char[0].y + 310) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 250) && (Monsters[i].y < char[0].y + 310) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                    }
                                    }
                                    break;
                                case 0:
                                case 4:
                                    if (!char[0].gigan) {
                                        PBulletArr.push({
                                            x: 80,
                                            y: 115,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 4,
                                          speed: 0
                                        });
                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 150) && (boss.y < char[0].y + 180) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 150) && (Monsters[i].y < char[0].y + 180) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                    }
                                    }else {
                                        PBulletArr.push({
                                            x: 130,
                                            y: 220,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 4,
                                          speed: 0
                                        });
                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 250) && (boss.y < char[0].y + 310) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 250) && (Monsters[i].y < char[0].y + 310) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                    }
                                    }
                                    break;
                                case 3:
                                case 7:
                                    if (!char[0].gigan) {
                                        PBulletArr.push({
                                            x: 165,
                                            y: 100,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 3,
                                          speed: 0
                                        });
                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 150) && (boss.y < char[0].y + 180) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 150) && (Monsters[i].y < char[0].y + 180) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                    }
                                    }else {
                                        PBulletArr.push({
                                            x: 240,
                                            y: 190,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 3,
                                          speed: 0
                                        });
                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 250) && (boss.y < char[0].y + 310) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 250) && (Monsters[i].y < char[0].y + 310) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                    }
                                    }
                                    break;
                                case 2:
                                case 6:
                                    if (!char[0].gigan) {
                                        PBulletArr.push({
                                            x: 80,
                                            y: 25,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 2,
                                          speed: 0
                                        });
                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 150) && (boss.y < char[0].y + 180) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 150) && (Monsters[i].y < char[0].y + 180) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                    }
                                    }else {
                                        PBulletArr.push({
                                            x: 120,
                                            y: 15,
                                            goX: 0,
                                            goY: 0,
                                            damage: 0,
                                            way: 2,
                                          speed: 0
                                        });

                                      if ((boss.x + 100 > char[0].x - 50) && (boss.x < char[0].x + 250) && (boss.y < char[0].y + 310) && (boss.y + 120 > char[0].y)) {
                                          BossGotDamage(attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                      for(var i=0;i<Monsters.length;i++){
                                        if ((Monsters[i].x + 100 > char[0].x - 50) && (Monsters[i].x < char[0].x + 250) && (Monsters[i].y < char[0].y + 310) && (Monsters[i].y + 120 > char[0].y)) {
                                          MobGotDamage(i, attackDamage());
                                        char[0].stack += (char[0].gigan)? 4:1;
                                      }
                                    }
                                    }
                                    break;
                            }
                            char[0].attackFlag = false;
                            setTimeout(function() {
                                char[0].attackFlag = true;
                            }, 1000 / char[0].ASpeed);
                        }
                }
            break;
        case 68: // 'd' button
            if (!char[0].DCool && !char[0].silence) {
                        char[0].silence = true;
                        gigantize = setInterval(function() {
                            times += 0.028;
                            if (times >= 2) {
                                clearInterval(gigantize);
                                gigantize = null;
                                minimize = null;
                                char[0].silence = false;
                                times = 2;
                                gX = -15;
                                gY = 10;
                                char[0].gigan = true;
                                char[0].hp += 2000;
                                char[0].fhp += 2000;
                                char[0].ADefend += 20;
                                char[0].ASpeed = 4;
                                char[0].ADamage += 200;
                                char[0].DCool = 5000;
                                setTimeout(function() {
                                    char[0].silence = true;
                                    minimize = setInterval(function() {
                                        times -= 0.028;
                                        if (times <= 1) {
                                            times = 1;
                                            gX = 0;
                                            gY = 0;
                                            clearInterval(minimize);
                                            gigantize = null;
                                            minimize = null;
                                            char[0].silence = false;
                                            char[0].gigan = false;
                                            char[0].fhp -= 2000;
                                            char[0].ADefend -= 20;
                                            char[0].hp = (char[0].hp > char[0].fhp) ?
                                                char[0].fhp : char[0].hp;
                                            char[0].ASpeed = 2;
                                            char[0].ADamage -= 200;
                                        }
                                    }, 70);
                                }, 1000 * gigan());
                            }
                        }, 70);
            } else if(char[0].DCool && char[0].stack != 0){
              char[0].stack--;
              char[0].DCool -= 1000;
            }
            break;
        case 70: // 'f' button
            if (!char[0].FCool && !char[0].silence) {
                char[0].beh = 0;
                        switch (char[0].state) {
                            case 5:
                                char[0].state = 1;
                                break;
                            case 4:
                                char[0].state = 0;
                                break;
                            case 7:
                                char[0].state = 3;
                                break;
                            case 6:
                                char[0].state = 2;
                                break;
                          default:
                                char[0].state = char[0].state;
                            break;
                        }
                        char[0].charging = true;
                        char[0].silence = true;
                        char[0].mvUp = false;
                        char[0].mvDown = false;
                        char[0].mvLeft = false;
                        char[0].mvRight = false;
                        chargeArr.push(rush);
                        rushcharge = setInterval(function() {
                            char[0].charge++;
                            if (char[0].charge == 100) {
                                clearInterval(rushcharge);
                                char[0].charge = 0;
                                char[0].rushing = true;
                                char[0].FCool = 5000;
                                switch (char[0].state) {
                                    case 1:
                                        char[0].speed = 20;
                                        char[0].mvLeft = true;
                                        char[0].rushing = true;
                                        rushTimeout = setTimeout(function(){
                                          char[0].speed = 4;
                                          char[0].rushing = false;
                                          char[0].mvLeft = false;
                                        }, 800);
                                        break;
                                    case 0:
                                        char[0].speed = 20;
                                        char[0].mvDown = true;
                                        rushTimeout = setTimeout(function(){
                                          char[0].speed = 4;
                                          char[0].rushing = false;
                                          char[0].mvDown = false;
                                        }, 800);
                                        break;
                                    case 3:
                                        char[0].speed = 20;
                                        char[0].mvRight = true;
                                        rushTimeout = setTimeout(function(){
                                          char[0].speed = 4;
                                          char[0].rushing = false;
                                          char[0].mvRight = false;
                                        }, 800);
                                        break;
                                    case 2:
                                        char[0].speed = 20;
                                        char[0].mvUp = true;
                                        rushTimeout = setTimeout(function(){
                                          char[0].speed = 4;
                                          char[0].rushing = false;
                                          char[0].mvUp = false;
                                        }, 800);
                                        break;
                                }
                            }
                        }, 10);
                        break;
            }
            break;
        case 83: // 's' button
            if (!char[0].SCool && !char[0].silence && char[0].stack >= heal_require()) {
                        switch (char[0].state) {
                            case 1:
                            case 5:
                                effect.push(wHeal);
                                break;
                            case 0:
                            case 4:
                                effect.push(wHeal);
                                break;
                                break;
                            case 3:
                            case 7:
                                effect.push(wHeal);
                                break;
                            case 2:
                            case 6:
                                effect.push(wHeal);
                                break;
                        }
                        char[0].SCool = 5000;
                        char[0].stack -= heal_use();
                        if(char[0].SLevel == 7) char[0].hp += char[0].fhp * 0.1;
                        else char[0].hp += char[0].fhp * 0.07;
                        if(char[0].hp > char[0].fhp) char[0].hp = char[0].fhp;
            }
            break;

    }
}

function onKeyUp(e) {
    switch (e.keyCode) {
        case 27:
            stop();
            break;
        case 37: // 왼쪽
            if (!char[0].charging && char[0].speed != 20) {
                char[0].beh = 0;
                char[0].mvLeft = false;
                char[0].moving = false;
                switch (mvCheck()) {
                    case 'Up':
                        char[0].state = 6;
                        break;
                    case 'Down':
                        char[0].state = 4;
                        break;
                    case 'Left':
                        char[0].state = 5;
                        break;
                    case 'Right':
                        char[0].state = 7;
                        break;
                }
            }
            break;
        case 38: // 위
            if (!char[0].charging && char[0].speed != 20) {
                char[0].beh = 0;
                char[0].mvUp = false;
                char[0].moving = false;
                switch (mvCheck()) {
                    case 'Up':
                        char[0].state = 6;
                        break;
                    case 'Down':
                        char[0].state = 4;
                        break;
                    case 'Left':
                        char[0].state = 5;
                        break;
                    case 'Right':
                        char[0].state = 7;
                        break;
                }
            }
            break;
        case 39: // 오른쪽
            if (!char[0].charging && char[0].speed != 20) {
                char[0].beh = 0;
                char[0].mvRight = false;
                char[0].moving = false;
                switch (mvCheck()) {
                    case 'Up':
                        char[0].state = 6;
                        break;
                    case 'Down':
                        char[0].state = 4;
                        break;
                    case 'Left':
                        char[0].state = 5;
                        break;
                    case 'Right':
                        char[0].state = 7;
                        break;
                }
            }
            break;
        case 40: // 아래
            if (!char[0].charging && char[0].speed != 20) {
                char[0].beh = 0;
                char[0].mvDown = false;
                char[0].moving = false;
                switch (mvCheck()) {
                    case 'Up':
                        char[0].state = 6;
                        break;
                    case 'Down':
                        char[0].state = 4;
                        break;
                    case 'Left':
                        char[0].state = 5;
                        break;
                    case 'Right':
                        char[0].state = 7;
                        break;
                }
            }
            break;
        case 70: //'f' button
                    if (char[0].charging == true) {
                        remove_rush();
                    }
    }
    if (!char[0].mvUp && !char[0].mvLeft &&
        !char[0].mvRight && !char[0].mvDown) char[0].state = char[0].state_temp;
}
