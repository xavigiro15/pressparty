//to start mongodb -> mongod in terminal
//to start koa server -> node --harmony index.js in the terminal

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const Score = require('./models/Score')


router.get('/scores', async function (ctx, next) {
  const scores = await Score.find().sort({ value: -1 })
  ctx.body = scores;
  ctx.status = 200;
});

router.post('/scores', async function (ctx, next) {
  const score = new Score(ctx.request.body)
  await score.save();
  ctx.body = score;
  ctx.status = 201;
  next()
});

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
