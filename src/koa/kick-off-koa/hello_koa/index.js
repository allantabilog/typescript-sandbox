const Koa = require("koa");
const app = new Koa();

app.use(function* () {
  this.body = "hello koa";
  console.log(JSON.stringify(this.context));
});

const port = process.argv[2];
console.log(`listening on port ${port}`);
app.listen(port);
