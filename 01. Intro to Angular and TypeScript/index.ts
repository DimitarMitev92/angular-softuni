class Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string | undefined;
    fulfilled: string | false;
    constructor(
        method: string,
        uri: string,
        version: string,
        message: string,
        response: string | undefined,
        fulfilled: string | false
    ) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response || undefined;
        this.fulfilled = fulfilled || false;
    }

    returningObj() {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled,
        };
    }
}

let myData = new Data(
    'GET',
    'http://google.com',
    'HTTP/1.1',
    '',
    undefined,
    false
);

myData.returningObj();
