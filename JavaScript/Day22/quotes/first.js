const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
  


// function generatQuote(){  
// const text = document.getElementById("quote");


// const index = Math.floor(Math.random()*quotes.length);
// text.textContent = quotes[index];
// }


// setInterval(generatQuote,2000);


//  Chnage the background color in every 5 second
// const body = document.getElementById("body");
// function changeBackgroundColor() {
//   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//   body.style.backgroundColor = randomColor;
// }

// setInterval(changeBackgroundColor, 2000);

const button = document.querySelector('button');
button.addEventListener('click', (event) =>{   //mousemove, mouseover, mouseout, mousedown, mouseup, click, dblclick its all mouse events

  console.log(event.target); // event.target is used to get the element that triggered the event. In this case, it will return the button element that was clicked.
  console.log(event.type); // event.type is used to get the type of event that was triggered. In this case, it will return 'click' because the click event was triggered.
  console.log(event.clientX); // event.clientX is used to get the x-coordinate of the mouse pointer when the event was triggered.
  console.log(event.clientY); // event.clientY is used to get the y-coordinate of the mouse pointer when the event was triggered.

  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];

  const body = document.getElementById("body");
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = randomColor;
});




//************************************************************************ */


// document.addEventListener('keyup', (event ) =>{ //keyup, keydown, keypress its all keyboard events. keyup is used to detect when a key is released, keydown is used to detect when a key is pressed down, and keypress is used to detect when a key is pressed and released.

//   if(event.key === 'Enter')  //event.key is used to detect which key was pressed. event.key returns the value of the key pressed. For example, if the 'Enter' key is pressed, event.key will return 'Enter'. If the 'a' key is pressed, event.key will return 'a'.
//   {
//    const text = document.getElementById("quote");
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];

//   const body = document.getElementById("body");
//   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//   body.style.backgroundColor = randomColor;
//   }
// })

