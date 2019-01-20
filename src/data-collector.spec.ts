import { DataCollector } from "./data-collector"

let dataCollector: DataCollector

describe("APICollector", () => {
    beforeEach(async () => {
        dataCollector = new DataCollector()
    })

    it("add and provide", () => {
        expect(1)
            .toEqual(1)
    })
})
