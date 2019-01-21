# Data Collector
As simple as it gets

## Preparation
1. Create a config file named .env in your project folder
2. Add an entry in your config file like: **APIKey=123**.
3. Make sure to keep your APIKey secret e.g. by adding your config file name (.env) to .gitignore.

## Usage Example
    import { DataCollector } from "www-data-collector"
    import { ConfigurationReader } from "configuration-reader"
    import * as path from "path"

    const dataCollector = new DataCollector()

    const apiKey: string = configurationReader.get("APIKey")
    const url: string = `https://anyurlwithyourapikey?apikey=${apiKey}`
    
    const updateAfterNumberOfMilliseconds: number = 7000

    // if there is data from this url within the buffertime ...
    const result: any = 
        await dataCollector.get(url, updateAfterNumberOfMilliseconds)


## Feedback
If you find any issues or want to share improvement proposals in general feel free to open an issue [here](https://github.com/michael-spengler/nlp-trainer/issues).


## Contribute
I am interested in save and useful enhancements. Feel free to create [Pull Requests](https://github.com/michael-spengler/nlp-trainer/pulls) on my Repository.