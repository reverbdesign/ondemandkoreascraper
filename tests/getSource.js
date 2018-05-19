const { expect, should } = require('chai');
const scraper = require('../index.js')

describe('getSource() Tests', () => {
    it('http://www.ondemandkorea.com/k-pop/mamamoo-starry-night.html', async () => {
        let res = await scraper.getSource('http://www.ondemandkorea.com/k-pop/mamamoo-starry-night.html');
        console.log(res);
        expect(res).to.be.a('string');
    })
});