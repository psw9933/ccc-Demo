(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/module/HttpServer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '39d1fkOx0hNJ6HZ48YTSQGP', 'HttpServer', __filename);
// Script/module/HttpServer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpServer = /** @class */ (function () {
    function httpServer() {
        this.URL = "http://localhost:3000/";
    }
    httpServer.getInstance = function () {
        if (!httpServer._httpServer)
            httpServer._httpServer = new httpServer();
        return httpServer._httpServer;
    };
    httpServer.prototype._on = function (xhr, mathFunc, url, cb) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var responseText = decodeURI(xhr.responseText.replace(/%/g, '%25'));
                if (cb)
                    cb(responseText);
            }
        };
    };
    httpServer.prototype.get = function (api, headers, cb) {
        if (headers instanceof Function) {
            cb = headers;
            headers = null;
        }
        var url = this.URL + api;
        var xhr = cc.loader.getXMLHttpRequest();
        this._on(xhr, "GET", url, cb);
        xhr.open("GET", url, true);
        if (headers)
            for (var key in headers) {
                xhr.setRequestHeader(key, encodeURI(headers[key]));
            }
        xhr.timeout = 10000; // for timeout
        xhr.send();
    };
    httpServer.prototype.post = function (url, headers, data, cb) {
        var xhr = cc.loader.getXMLHttpRequest();
        var _url = this.URL + url;
        this._on(xhr, "POST", _url, cb);
        xhr.open("POST", _url);
        if (headers)
            for (var key in headers) {
                xhr.setRequestHeader(key, encodeURI(headers[key]));
            }
        xhr.timeout = 10000;
        if (data == null)
            xhr.send(null);
        else {
            var str = '';
            for (var k in data) {
                str += encodeURI(k) + '=' + encodeURI(data[k]) + '&';
            }
            //cc.log(str)
            xhr.send(str);
        }
    };
    httpServer._httpServer = null;
    return httpServer;
}());
exports.httpServer = httpServer;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=HttpServer.js.map
        