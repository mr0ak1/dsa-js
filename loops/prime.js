n = 71

if (isNaN(n)) {
  console.log("Enter valid number")
} else {
  let prime = true
  if (n > 0) {
    console.log(isPrime(n))
  }
}

function isPrime(n) {
  if (n < 1) {
    return false
  }

  if (n === 1) {
    return true
  }
  if (n === 2) {
    return true
  }
  if (n % 2 === 0) {
    return false
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

isPrime(n)
