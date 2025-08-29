const fs = require("fs");
const { Buffer } = require("buffer");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const data = new Uint8Array(Buffer.from("Hello from Node.js"));
fs.writeFile("message.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("/etc/passwd", (err, data) => console.log(data.toString()));
