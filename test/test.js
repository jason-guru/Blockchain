var assert = require('assert');
const { Block } = require('../src/block');
describe('Block', function() {
    describe('#validate()', function() {
        it('should return false when validated', async function() {
            let block = new Block('test');
            let isValid = await block.validate();
            assert.equal(isValid, false);
        });
    });

    describe('#getBData()', function() {
        it('should return the data', async function() {
            let block = new Block({test: 'test'});
            let data = await block.getBData();
            assert.equal(data.test, 'test');
        });
    });
});