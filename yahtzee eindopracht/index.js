let collection = document.getElementsByName("CountNumber");
let diceResults= [];
let DiceNumber= 5;
let playerresult= [];
let totalPoints= 0;
function controller(value){
switch (value) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        //console.log(ogen(value));
        break;
    default:
}
}



function userEvents(element,index){ 

element.addEventListener("click", function(){
    controller(parseInt(element.dataset.value));
this.innerHTML= ogen(this.id)*this.id;


})
 };


collection.forEach(
    function(currentValue,currentIndex){
        userEvents(currentValue,currentIndex);
    }

)
function rollen(){

for(let counter = 0; counter < DiceNumber; counter++) {
    diceResults[counter] = rollTheDice(1, 6);
}
console.log(diceResults);

for(let teller= 1; teller < 7;teller++){
  console.log(teller,ogen(teller))
}
};

function rollTheDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

 
function ogen(number){
let numberSame= 0;
const counter= [];

for(let i = 0; i < 5;i++){

    if(diceResults[i] == number){
numberSame++;

    }
 numberSame = numberSame * number;
TotalPoints(numberSame);

return numberSame;
}

}

function TotalPoints(numberSame){
totalPoints = totalPoints + numberSame;
let totaal = document.getElementById("totalPoints");
totaal.innerHTML= totalPoints;
}



 