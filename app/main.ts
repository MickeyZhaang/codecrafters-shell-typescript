import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();
rl.on("line", (comm) => {
  console.log(`${comm}: command not found`);
  rl.prompt();
});
