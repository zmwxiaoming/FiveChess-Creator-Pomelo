'use strict';
var Code = require("../../../configs/Code");

module.exports = function (app) {
	return new Handler(app);
};

var Handler = function (app) {
	this.app = app;
	this.sid = app.get('serverId');
};

/**
 * 进入游戏
 */
Handler.prototype.entry = function (msg, session, next) {

	var nickname = msg.nickname;

	// 返回客户端登录结果
	next(null, {
		code: Code.ok,
		nickname: nickname
	});
}


