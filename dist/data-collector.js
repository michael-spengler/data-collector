"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise");
class DataCollector {
    async get(url, updateAfter) {
        const numberOfMilliSeconds = updateAfter;
        if (this.lastRequestTimestamp === undefined ||
            new Date() > new Date(this.lastRequestTimestamp.getTime() + numberOfMilliSeconds)) {
            // tslint:disable-next-line:no-console
            console.log("return new data");
            this.result = JSON.parse(await request.get(url));
            this.lastRequestTimestamp = new Date();
        }
        else {
            // tslint:disable-next-line:no-console
            console.log("return buffered data");
        }
        return this.result;
    }
}
exports.DataCollector = DataCollector;
