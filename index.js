
var koa = require('koa');
var send = require('koa-send');
var router = require('koa-router')();


function *publics(next){
  yield send(this, this.originalUrl);
}

function *index(next){
  yield send(this, 'public/index.html');
}

var app = koa();


router.get('/', index)
      .get('/public/*', publics);


app.use(router.routes());

app.listen(4000);
console.log('listening on port 4000');
