/**
**断言库assert and expect
*/
var assert = require('assert');
var demo = require('./demo');
var expect = require('chai').expect;
describe('demo', function() {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it('shoud rturn 5 when 2 + 3', function () {
    	expect(demo.add(2,3)).to.be.equal(5)
    })
    it('shoud be true', function () {
    	expect('2').to.be.ok
    })
    it('测试应该500毫秒后结束', function(done) {
		var x = true;
		var f = function() {
			x = false;
			expect(x).to.be.not.ok;
			done(); // 通知Mocha测试结束
		};
		setTimeout(f, 4000);
	});
	it('shoud be ajax', function (done) {
		demo.async('http://127.0.0.1:3000/api/promise', function () {
			done()
		})
	})
});

