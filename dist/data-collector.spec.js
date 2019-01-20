"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_reader_1 = require("configuration-reader");
const path = require("path");
const data_collector_1 = require("./data-collector");
let dataCollector;
const configurationReader = new configuration_reader_1.ConfigurationReader(path.join(__dirname, "./../.env"));
describe("APICollector", () => {
    beforeEach(async () => {
        dataCollector = new data_collector_1.DataCollector();
    });
    it("add and provide", async () => {
        const currencySymbolOfBaseCurrency = "EUR";
        const updateAfterNumberOfMilliseconds = 7000;
        const apiKey = configurationReader.get("APIKey");
        const url = `https://rest.coinapi.io/v1/exchangerate/${currencySymbolOfBaseCurrency}?apikey=${apiKey}`;
        const result = await dataCollector.get(url, updateAfterNumberOfMilliseconds);
        // tslint:disable-next-line:no-magic-numbers
        if (result.rates.length < 2000) {
            fail("hmm - there were more currencies once");
        }
    });
});
