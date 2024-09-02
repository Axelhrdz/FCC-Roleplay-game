const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const textContent = document.getElementById('textContent');
console.log(button1);


// button1.addEventlistener('click', function(){
//     button1.innerText = "Buy 10 health (10 gold)";

//     textContent.innerText = "You enter the store.";
// })
button1.addEventListener('click', function(){
    button1.innerText = "Buy 10 Health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    textContent.innerText = "You enter the store";
})