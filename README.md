# OnDemandKorea Scraper
Scraper for OnDemandKorea

### Features
* Scrape Search Results
* Get episode stream source

### Install
```
npm install ondemandkoreascraper --save
```

### How To Use 

Use the scraper to get search results based on a keyword query
```javascript
const scraper = require('ondemandkoreascraper');

(async() => {
    let result = await getSearch(query, options);
    console.log(result)
})();

```

Use the scraper to get the .m3u8 source of a given url
```javascript
const scraper = require('ondemandkoreascraper');

(async() => {
    let src = await getSearch(url, options);
    console.log(src)
})();

```
### License
Apache-2.0