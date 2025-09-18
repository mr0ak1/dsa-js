import promptSync from "prompt-sync"

const prompt = promptSync()
let n = Number(prompt("Enter a number"))

for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i - 1; j--) {
    process.stdout.write(" ")
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*")
  }
  console.log()
}
