var Data = /** @class */ (function () {
    function Data(method, uri, version, message, response, fulfilled) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response || undefined;
        this.fulfilled = fulfilled || false;
    }
    Data.prototype.returningObj = function () {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled,
        };
    };
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '', undefined, false);
myData.returningObj();
