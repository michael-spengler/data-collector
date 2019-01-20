export interface IAsset {
    name: string;
    timestamp: string;
    worthInEUR: number;
}
export interface IQuote {
    time: string;
    asset_id_quote: string;
    rate: string;
}
export interface IExchangeRateInformation {
    asset_id_base: string;
    rates: IQuote[];
}
