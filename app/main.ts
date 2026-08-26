import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();
rl.on("line", (comm) => {
  console.log(comm);
  if (comm === "exit") {
    rl.close();
    return;
  } else if (comm.startsWith("echo ")) {
    console.log(comm.slice(5));
  } else {
    console.log(`${comm}: command not found`);
    rl.prompt();
  }
});
