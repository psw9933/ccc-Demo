
class httpServer {
    private static _httpServer: httpServer = null
    static getInstance(): httpServer {
        if (!httpServer._httpServer)
        httpServer._httpServer = new httpServer()
        return httpServer._httpServer;
    }
    private URL="http://localhost:3000/";

    private _on(xhr: XMLHttpRequest, mathFunc: string, url: string, cb?: Function) {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                let responseText = decodeURI(xhr.responseText.replace(/%/g, '%25'))
                if (cb) cb(responseText);
            }
        };
    }
    get(api: string,headers: Object, cb?: Function) {
        if (headers instanceof Function) {
            cb = headers
            headers = null
        }
        let url=this.URL+api
        var xhr = cc.loader.getXMLHttpRequest();
        this._on(xhr, "GET", url, cb);
        xhr.open("GET", url, true);
        if (headers)
            for (var key in headers) {
                xhr.setRequestHeader(key, encodeURI(headers[key]));
            }
        xhr.timeout = 10000; // for timeout
        xhr.send();
    }

    post(url: string,headers: Object, data?: Object, cb?: Function) {
        var xhr = cc.loader.getXMLHttpRequest();
        let _url=this.URL+url
        this._on(xhr, "POST", _url, cb);
        xhr.open("POST", _url);
        if (headers)
            for (var key in headers) {
                xhr.setRequestHeader(key, encodeURI(headers[key]));
            }
        xhr.timeout = 10000;
        if (data == null) xhr.send(null);
        else {
            let str = ''
            for (let k in data) {
                str += encodeURI(k) + '=' + encodeURI(data[k]) + '&'
            }
            //cc.log(str)
            xhr.send(str);
        }
    }

}
export { httpServer }
