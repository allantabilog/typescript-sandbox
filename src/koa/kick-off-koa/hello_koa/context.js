const Koa = require("koa");
const app = new Koa();

app.get("/", (ctx) => {
  console.log(JSON.stringify(ctx));
  this.body = "ok";
});

const port = process.argv[2];
console.log(`listening on port ${port}`);
app.listen(port);
