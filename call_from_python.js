const spawn = require("child_process").spawn;
const process = spawn("python",["./Api_calls.py"])
process.stdout.on("data", data => {
  console.log(data.toString());
});
