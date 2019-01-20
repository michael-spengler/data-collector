import { ConfigurationReader } from "configuration-reader"
import * as path from "path"
import { DataCollector } from "./data-collector"

let dataCollector: DataCollector
const configurationReader: ConfigurationReader =
    new ConfigurationReader(path.join(__dirname, "./../.env"))

describe("APICollector", () => {
    beforeEach(async () => {
        dataCollector = new DataCollector()
    })

    it("add and provide", async () => {
        const currencySymbolOfBaseCurrency: string = "EUR"
        const updateAfterNumberOfMilliseconds: number = 7000
        const apiKey: string = configurationReader.get("APIKey")
        const url: string =
            `https://rest.coinapi.io/v1/exchangerate/${currencySymbolOfBaseCurrency}?apikey=${apiKey}`
        const result: any = await dataCollector.get(url, updateAfterNumberOfMilliseconds)
        // tslint:disable-next-line:no-magic-numbers
        if (result.rates.length < 2000) {
            fail("hmm - there were more currencies once")
        }
    })
})
