import promptSync from "prompt-sync"

const prompt = promptSync()
let n = Number(prompt("Enter a number"))

for (let j = 1; j <= n; j++) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write("* ")
  }
  console.log()
}
