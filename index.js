const fetch = require('node-fetch');

module.exports = {
    /**
    * Grabs the links of all movies and dramas including the given query 
    * @param {String} query
    * @param {Object} options
     */
    getSearch: async function (query, options) {
        try {
            let response = await fetch(`http://www.ondemandkorea.com/includes15/search?q=${query}`, options);
            let json = await response.json();
            return json;
        } catch (err) {
            return err;
        }
    },
    getSource: async function (url, options) {
        try {
            let res = await fetch(url);
            let html = await res.text();
            let index = html.indexOf('.m3u8');
    
            for (let i = index; i > 0; i--) {
                if (html[i] == '"' || html[i] == "'") {
                    return `${html.substring(i+1, index)}.m3u8`;
                 }
            }
            return null;
        } catch (err) {
            return err;
        }
    }
}