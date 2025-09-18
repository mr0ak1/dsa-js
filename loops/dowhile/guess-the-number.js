let random = Math.floor(Math.random() * 100 + 1)

let guess = 56

while (guess !== random) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Enter between 1 and 100")
    continue
  }

  if (guess > random) {
    console.log("Its too high")
  } else if (guess < random) {
    console.log("Its too low")
  } else {
    console.log("congrats u have guessed the correct number")
  }
}
