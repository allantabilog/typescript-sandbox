exports.funcname = function () {
  return `Hello world`;
};

exports.helloObject = {
  sayHello: function () {
    return `Hello world from hello object`;
  },
  getNumber: function () {
    return 1;
  },
};

console.log("__filename", __filename);
console.log("__dirname", __dirname);
console.log("process.argv", process.argv);
console.log("process.env", process.env);
if (module === require.main) {
  console.log("This is the main module being run.");
}
