

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






    // const kristynsCloset = [
    //     "left shoe",
    //     "cowboy boots",
    //     "right sock",
    //     "GA hoodie",
    //     "green pants",
    //     "yellow knit hat",
    //     "marshmallow peeps"
    //   ];
      
    //   // Thom's closet is more complicated. Check out this nested data structure!!
    //   const thomsCloset = [
    //     [
    //       // These are Thom's shirts
    //       "grey button-up",
    //       "dark grey button-up",
    //       "light blue button-up",
    //       "blue button-up",
    //     ],[
    //       // These are Thom's pants
    //       "grey jeans",
    //       "jeans",
    //       "PJs"
    //     ],[
    //       // Thom's accessories
    //       "wool mittens",
    //       "wool scarf",
    //       "raybans"
    //     ]
    //   ];
      




      let sum = 0 
      
      for ( let s = 0; s < 1000; s++) {
        if ( s % 3 === 0 || s % 5 === 0) {
            sum += s
        }

      }