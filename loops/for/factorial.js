let n = 5

if (isNaN(n)) {
  console.log("Enter a  valid number")
}

if (n > 0) {
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact = fact * i
  }
  console.log(fact)
} else {
  console.log("Number must be above 0")
}
