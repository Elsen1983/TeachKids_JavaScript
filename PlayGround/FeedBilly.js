let billyFull = false; // or true, depending on the initial state
let billyHunger = 100


setInterval(() => {
  if (billyHunger === 150) {
    console.log("Billy is full!");
  } else {
    console.log("Billy is still hungry.");
  }
}, 15000); // 15000 milliseconds = 15 seconds

setInterval(() => {
  if (billyHunger === 200) {
    console.log("Billy is full!");
  } else if (billyHunger === 1000) {
    console.log("Billy died because you over fed him.");
  } else {
    console.log(`Billy's hunger level is ${billyHunger}`);
  }
}, 15000); // 15000 milliseconds = 15 seconds

document.addEventListener("keydown", (event) => {
    if (event.key === "o" || event.key === "O") {
      billyHunger += 10;
      console.log(`You fed Billy! His hunger level is now ${billyHunger}`);
    }
  });