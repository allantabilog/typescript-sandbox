const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
  ctx.body = "<html><body><h1>Hello Friend</h1></body></html>";
});
app.listen(8088);
console.log(`Server running at http://localhost:8088/`);
