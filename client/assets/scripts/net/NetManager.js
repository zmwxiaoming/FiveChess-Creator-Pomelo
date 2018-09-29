/**
 * 网络管理类
 * pomelo是个全局对象，不用引入直接可以使用，很神奇
 */

var NetManager = {};

// 断开连接
NetManager.onDisconnect = function (cb) {
    pomelo.on('disconnect', cb);
}

// 连接服务器
NetManager.connect = function (address, cb) {
    pomelo.disconnect();
    pomelo.init(address, cb);
}

// 发送消息
NetManager.sendMsg = function (route, msg, cb) {
    pomelo.request(route, msg, cb);
}

// 注册消息
NetManager.registerMsg = function (msgName, cb) {
    pomelo.on(msgName, cb);
}


// 
module.exports = NetManager;