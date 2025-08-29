const { copyFileSync } = require("fs");

const fs = require("fs").promises;

const readFile = async (path) => {
  try {
    const contents = await fs.readFile(path, "utf-8");
    console.log(contents);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async (path, contents) => {
  try {
    fs.writeFile(path, contents, "utf-8");
    console.log(`contents written to file ${path}`);
  } catch (error) {
    console.log(`error writing to file ${path}: Error: ${error}}`);
  }
};

const getStats = async (path) => {
  try {
    const stats = await fs.stat(path);
    console.log(stats);
    // check if file is a file
    console.log(`isFile: ${stats.isFile()}`);
    // check if file is a directory
    console.log(`isDirectory: ${stats.isDirectory()}`);
  } catch (error) {
    console.log(`error calling stat: ${error}`);
  }
};

getStats("../src/promise.js");
readFile("../src/promise.js");
writeFile("./hello.txt", "Hello World!");
