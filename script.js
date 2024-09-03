const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const text = document.getElementById('text');
//stats text content
const userXp = document.getElementById('xp');
const userHealth = document.getElementById('health');
const userGold = document.getElementById('gold');

//user stats variables
let xp = 0;
let health = 100;
let gold = 50;

console.log(button1);

//Creating the locations
const locations = [
    {
        name: 'store',
        'buttons text': ['Buy 10 Health (10 gold)', 'Buy weapon (30 gold)', 'Go to town square'],
        'button functions': [buyHealth, buyWeapon, goTown]
    }
];
//update function (updates the text 'context' environment, base on location)
function update(locations){
    if(locations[0]){
        button1.textContent = locations[0]['buttons text'][0];
        button2.textContent = locations[0]['buttons text'][1];
        button3.textContent = locations[0]['buttons text'][2];
        text.textContent = 'You enter the store';
    }
}

//Functions for store
function buyHealth(){
    if(gold >= 10){
        health += 10;
        gold -= 10;
        userHealth.textContent = health;
        userGold.textContent = gold;
    } else {
        text.textContent = 'You have not enough gold to buy more health';
    }
}

function buyWeapon(){

}


function goTown(){

}

//Store event listener
button1.addEventListener('click', function(){
    update(locations);
    button1.onclick = buyHealth;
})