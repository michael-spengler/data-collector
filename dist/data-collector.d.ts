export declare class DataCollector {
    private lastRequestTimestamp;
    private result;
    get(url: string, updateAfter: number): Promise<any>;
}
