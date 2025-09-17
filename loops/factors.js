let n = 60

if (isNaN(n)) {
  console.log("Enter a valid number ")
}

if (n > 0) {
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      console.log(i)
    }
  }
  console.log(n)
} else {
  console.log("enter number higher than 0")
}
