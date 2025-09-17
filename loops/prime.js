n = 71

if (isNaN(n)) {
  console.log("Please enter higher number")
} else {
  if (n > 0) {
    let prime = true
    for (let i = 2; i < Math.floor(n / 2); i++) {
      if (n % i === 0) {
        prime = false
      }
    }
    console.log(prime)
  }
}
