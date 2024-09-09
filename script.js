const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const text = document.getElementById("text");
//stats text content
const userXp = document.getElementById("xp");
const userHealth = document.getElementById("health");
const userGold = document.getElementById("gold");

//user stats variables
let xp = 0;
let health = 100;
let gold = 50;
let inventory = ["stick"];
let currentWeaponIndex = 0;

//Monster Stats
const monsterContainter = document.querySelector(".monsters");
const monName = document.getElementById("monName");
let monHealth = document.getElementById("monHealth");

//Fighting
let monsterIndex;
let currentMonsterHealth;

// console.log(button1);
console.log(inventory);

const weapons = [
    {name: "stick", power: 5},
    {name: "dagger", power: 30},
    {name: "claw hammer", power: 50},
    {name: "sword", power: 100}
]

const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15,
      gold: 30
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60,
      gold: 50
    },
    {
      name: "dragon",
      level: 20,
      health: 300
    }
]


//Store functions
const storeFunctions = [
    {
        buyHealth: function(){
            if(gold < 10){
                text.innerText = "You have not enough gold";
            } else {
                gold -= 10;
                health += 10;
                userHealth.innerText = health;
                userGold.innerText = gold;
            }
        }
    },
    {
        buyWeapon: function(){
            if(gold < 30){
                text.innerText = "You have not enough gold";
            } else {
                if(currentWeaponIndex < weapons.length - 1){
                    currentWeaponIndex++;
                    gold -= 30;
                    userGold.innerText = gold;
                    console.log(currentWeaponIndex);
                    
                    inventory.push(weapons[currentWeaponIndex].name);
                    console.log(inventory);
                    
                } else {
                    text.innerText = "You have the MOST powerful weapon already!";
                }
            }

        }
    }
]


// locations
const locations = [
    {
        name: "store",
        "button text": ["Buy 10 Health (10 gold)", "Buy weapon (30 gold)", "Go to town"],
        "button functions": [storeFunctions[0].buyHealth, storeFunctions[1].buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town"],
        "button functions": [fightSlime, fightFanged, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "town",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, goTown],
        text: "You are in town square"
    },
    //mosnters
    {
        name: "slime",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "fanged beast",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [replay, replay, replay],
        text: "You lose"
    },
    {
        name: "defeat",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
]





// console.log(locations[0]["btnText"][0])
console.log(locations[1])

function updateLocation(location){
    console.log(location)
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    text.innerText = location.text;
    
}

function replay(){
    health = 100;
    gold = 50;
    xp = 0;

    userHealth.innerText = health;
    userGold.innerText = gold;
    userXp.innerText = xp;

    button1.innerText = "Go store";
    button2.innerText = "Go cave";
    button3.innerText = "Fight dragon";

    button1.onclick = goStore;
    button2.onclick = goCave;
    // button1.onclick = fightDragon;
    text.innerText = "Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.";

    monsterContainter.style.display = "none";
}

function goStore(){
    updateLocation(locations[0]);
}

function goCave(){
    updateLocation(locations[1]);
}
function goTown(){
    updateLocation(locations[2]);
    monsterContainter.style.display = "none";
}

//fight monsters functions ---------------------
function fightSlime(){
    updateLocation(locations[3]);
    monsterIndex = 0; // Edit later as this is repetitive
    currentMonsterHealth = monsters[monsterIndex].health;

    monName.innerText = monsters[0].name;
    monHealth.innerText = monsters[0].health;
    monsterContainter.style.display = "flex";
    console.log("fightiin slime " + monsterIndex);
}
function fightFanged(){
    // console.log("fanged beast");
    updateLocation(locations[4]);
    monsterIndex = 1; // Edit later as this is repetitive
    currentMonsterHealth = monsters[monsterIndex].health;

    monName.innerText = monsters[1].name;
    monHealth.innerText = monsters[1].health;
    monsterContainter.style.display = "flex";
    console.log("fightiin fanged beast " + monsterIndex);
}


//fighting functions ---------------------
function attack(){
    console.log("attack");
    if(currentMonsterHealth > 0 && health > 0){
        //attack monster
        currentMonsterHealth -= weapons[currentWeaponIndex].power;
        monHealth.innerText = currentMonsterHealth;

        health -= monsters[monsterIndex].level * 5;
        userHealth.innerText = health;
        console.log(currentMonsterHealth);
    }

    if(currentMonsterHealth <= 0){
        gold += monsters[monsterIndex].gold;
        userGold.innerText = gold;
        text.innerText = "You defeated the monster";
        updateLocation(locations[6]);
    }
    if(health <= 0){
        updateLocation(locations[5]);
        text.innerText = "You lose";
    }
    
}

function dodge(){
    console.log("dodge");
}




button1.onclick = goStore;
button2.onclick = goCave;
// button1.onclick = fightDragon;


