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
  } else if (comm.startsWith("echo ")) {
    console.log(comm.slice(5));
  } else if (comm.startsWith("type ")) {
    const types = new Set(["exit", "echo", "type"]);
    const command = comm.slice(5);
    if (command in types) {
      console.log(`${comm} is a shell builtin`);
    } else {
      console.log(`${comm}: not found`);
    }
  } else {
    console.log(`${comm}: command not found`);
  }
  rl.prompt();
});
