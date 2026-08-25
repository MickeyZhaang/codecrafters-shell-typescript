import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();
rl.on("line", (comm) => {
  if (comm === "exit") {
    rl.close();
    return;
  }
  if (comm == "echo") {
    for (let n of comm) {
      console.log(n);
    }
  }
  console.log(`${comm}: command not found`);
  rl.prompt();
});
