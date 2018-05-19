const { expect } = require('chai');
const scraper = require('../index.js')

describe('getSearch() Tests', () => {
    it('search?q=god', async () => {
        let res = await scraper.getSearch('god');
        console.log(res);
        expect(res.data.programs.length).to.be.above(0);
    })
});