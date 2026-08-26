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
  if (comm.startsWith("echo ")) {
    console.log(comm.slice(5));
    return;
  }
  console.log(`${comm}: command not found`);
  rl.prompt();
});
