import PromptSync from "prompt-sync"

const promt = PromptSync()

let n = promt("Enter th number")

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i))
}
