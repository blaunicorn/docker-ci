var http = require('http');
var config = require('./config.js');
var createHandler = require('gitee-webhook-handler');
var handler = createHandler({ path: config.path, secret: config.secret });
// 上面的 secret 保持和 gitee 后台设置的一致
// const log4js = require('log4js');
// log4js.configure({
//   appenders: {
//     console: { type: 'console' },
//     file: { type: 'file', filename: "./logs/auto_deploy.log", maxLogSize: 10485760, backups: 5 }
//   },
//   categories: {
//     default: { appenders: ['console', 'file'], level: 'info' }
//   },
//   pm2: true,
//   pm2InstanceVar: 'INSTANCE_ID'
// });
// const logger = log4js.getLogger("index");

// //Windows下执行方法
// function win_run_cmd (name) {
//   var exec = require('child_process').exec;
//   exec(name + '.bat', function (error, stdout, stderr) {
//     if (error) {
//       logger.error(name + ": " + error);
//     }
//     if (stdout) {
//       logger.info(name + ": " + stdout);
//     }
//     if (stderr) {
//       logger.error(name + ": " + stderr);
//     }
//   });
// }

// //Linux下执行方法
// function linux_run_cmd (cmd, args) {
//   var spawn = require('child_process').spawn;
//   var child = spawn(cmd, args);
//   var resp = "";
//   child.stdout.on('data', function (buffer) { resp += buffer.toString(); });
//   child.stdout.on('end', function () {
//     logger.info(args + ": " + resp);
//   });
// }

handler.on('error', function (err) {
  logger.error('Error:', err.message)
});

handler.on('*', event => {
  console.log('Received *', event.payload.action)
})

// handler.on('Push Hook', function (event) {
//   logger.info('Received a push event for %s to %s',
//     event.payload.repository.name,
//     event.payload.ref
//   );
//   if (event.payload.ref == "refs/heads/master") {
//     if (os == "linux") {
//       linux_run_cmd('sh', ['./cmd/' + event.payload.repository.name + '.sh']);//需要执行的脚本位置
//     }
//     else {
//       win_run_cmd(event.payload.repository.name);
//     }
//   }
// });

// handler.on('issues', function (event) {
//   logger.info('Received an issue event for % action=%s: #%d %s',
//     event.payload.repository.name,
//     event.payload.action,
//     event.payload.issue.number,
//     event.payload.issue.title
//   );
// });

//启动服务器
http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location')
  })
}).listen(config.port, () => {
  console.log('geteeWebhook listen at ', config.port)
});

// logger.info("Gitee Hook Server running...");
// logger.info("Gitee Hook Server port: " + config.port);