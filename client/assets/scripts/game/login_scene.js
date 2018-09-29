var NetManager = require("./../net/NetManager");
var NetConfig = require("./../configs/NetConfig");
var Code = require("./../net/Code");

cc.Class({
    extends: cc.Component,

    properties: {

        // 名字输入框
        input_edit_name: {
            default: null,
            type: cc.EditBox
        },

        btn_login: {
            default: null,
            type: cc.Button
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // 连接服务器
        NetManager.connect(NetConfig.address, function () {
            console.log("连接服务器成功:" + JSON.stringify(NetConfig.address));
        });

        // 与服务器断开连接
        NetManager.onDisconnect(function () {
            console.log("服务器断开连接");
        })
    },

    start() {

    },

    // update (dt) {},

    on_btn_login: function () {
        var nickname = this.input_edit_name.string;

        if (nickname === "") {
            console.log("名字不能为空");
            return;
        }

        NetManager.sendMsg("connector.entryHandler.entry", { nickname: nickname }, function (data) {
            console.log("服务器返回的登录信息data:" + JSON.stringify(data));
        });
    }
});
