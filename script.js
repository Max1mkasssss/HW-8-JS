const userData = ["Mago", "Polly", "Ukraine"];

let string = ""; 

for (let i = 0; i < userData.length; i++) {
  string += userData[i] + " "; 
}

console.log(string);

const fruits = ['яблоко', 'банан', 'груша'];

const fruitsString = fruits.join(', '); 

console.log(fruitsString); 



const cards = [
    "Карточка - 1",
    "Карточка - 2",
    "Карточка - 3",
    "Карточка - 4",
    "Карточка - 5"
  ];
  
  
const indexToDelete = cards.indexOf("Карточка - 3");
  

cards.splice(indexToDelete, 1);
  
console.log(cards); 


// Index to add 

// Card update