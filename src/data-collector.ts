
import * as request from "request-promise"

export class DataCollector {

    private lastRequestTimestamp: any
    private result: any

    public async get(url: string, updateAfter: number): Promise<any> {
        const numberOfMilliSeconds: number = updateAfter
        if (this.lastRequestTimestamp === undefined ||
            new Date() > new Date(Number(this.lastRequestTimestamp.getTime()) + numberOfMilliSeconds)) {
            // tslint:disable-next-line:no-console
            console.log("return new data")
            this.result = JSON.parse(await request.get(url))
            this.lastRequestTimestamp = new Date()
        } else {
            // tslint:disable-next-line:no-console
            console.log("return buffered data")
        }

        return this.result
    }
}
