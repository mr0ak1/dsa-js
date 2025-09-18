import PromptSync from "prompt-sync"

const promt = PromptSync()

let n = promt("Enter th number")

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j}`)
  }
  console.log()
}
