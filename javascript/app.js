// console.log('working');


// //Easy Going 

for ( let i = 1; i <= 20; i ++) {
    console.log(i);
}

// //Get Even 

for ( let x = 0; x<=200; x ++) {
    if (x % 2 === 0) {
    console.log(x);
   }
}

// Excited Kitten 

// 1.
for ( k = 0; k<20; k++) {
    console.log("Love me, pet me! HSSSSSS!");
}

// 2. 
const kittenExpression = ["human...why you taking pictures of me?", "the catnip made me do it", "why does the red dot always get away"];

for (c = 0; c < 20; c++) {

    if (c % 2 === 0) {
          
        let randomExpression = kittenExpression[Math.floor(Math.random() * kittenExpression.length)];

            console.log(randomExpression);

        }
      }





//Fizz Buzz

for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}


//Getting to know you 

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];


shahzad.splice = (0,1, "gameboy");
daniel.splice = (1,1, jim[1]+1);
ryan.splice = (2,1, "Gotham");
reuben.pop();
reuben.push('Chicago');
jim.splice = (2,3, "Paris, Rome, Barcelona");
jim.splice = (2,1);



// Yell at Ninja Turtles 


const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']; 


    for (let t = 0; t <ninjaTurtles.length; t++) {
        
        let upper = ninjaTurtles[t].toUpperCase('');
       console.log(upper);
    }



// Return of the Closets



const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// Alien Atire

const kristynShoe = kristynsCloset.splice(0, 1);

thomsCloset[2].push(kristynShoe);

// Dress 'em Up

console.log('Kristen is wearing  ' + kristynsCloset[3] + ', ' + kristynsCloset[4] + ', and ' + kristynsCloset[5]);

console.log('Thom is wearing  ' + thomsCloset[0][1] + ', ' + thomsCloset[1][2] + ', and ' + thomsCloset[2][2]);

console.log('Thom is wearing ' + thomsCloset[0][0] + ', ' + thomsCloset[1][3] + ', and ' + thomsCloset[2][1]);

//Dirty Laundry

for (let i = 0; i < kristynsCloset.length; i++) {
 console.log("Whirrrr now washing" + kristynsCloset[i]);
}

for (let t = 0; t < thomsCloset.length; t++){
    console.log(thomsCloset[t]);
}


// Multiples of 3 and 5


let sum = 0 
      
for ( let s = 0; s < 1000; s++) {
  if ( s % 3 === 0 || s % 5 === 0) {
      sum += s
  }
}
