import PromptSync from "prompt-sync"

const promt = PromptSync()

let n = Number(promt("Enter th number"))
for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(String.fromCharCode(65 + j) + " ")
  }
  console.log()
}
