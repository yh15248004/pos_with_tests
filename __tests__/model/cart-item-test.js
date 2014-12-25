jest.dontMock('../../src/model/cart-item');
jest.dontMock('lodash');

describe('CartItem', function() {
  var cartItem;
  beforeEach(function() {
    var CartItem = require('../../src/model/cart-item');
    var cartItem = new CartItem(
      {barcode:'ITEM000001',name:'雪碧',unit:'瓶',price:3.00},5);
  });
  describe('#getBarcode()', function() {
    it('should return correct barcode', function() {

      var result = cartItem.getBarcode();

      expect(result).toBe('ITEM000001');
    });
  });
  // describe('#getSubTotal()', function() {
  //   it('should return correct subTotal', function() {
  //
  //   });
  // });
});
