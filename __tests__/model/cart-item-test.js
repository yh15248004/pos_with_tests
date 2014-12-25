jest.dontMock('../../src/model/cart-item');
jest.dontMock('../../src/model/promotion');
jest.dontMock('lodash');

describe('CartItem', function() {
  var cartItem;
  var CartItem;
  beforeEach(function() {
    CartItem = require('../../src/model/cart-item');
    cartItem = new CartItem({
      barcode:'ITEM000001',name:'雪碧',unit:'瓶',price:3.00},5);
  });

  describe('#getBarcode()', function() {
    it('should return correct barcode', function() {

      var result = cartItem.getBarcode();

      expect(result).toBe('ITEM000001');
    });
  });

  describe('#getSubTotal()', function() {
    it('should return correct subTotal', function() {

      var result = cartItem.getSubTotal();

      expect(result).toEqual(12);
    });
  });
});
