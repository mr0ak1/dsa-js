let num = 9871
let sum = 0

while (num > 0) {
  if (num > 0) {
    let rem = num % 10

    sum = sum + rem
    console.log(sum)

    num = Math.floor(num / 10)
  }
}
