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

  describe('#toCartItemText()', function() {
    it('should return correct text', function() {

      var result = cartItem.toCartItemText();

      expect(result).toEqual('名称：' + '雪碧' +
      '，数量：' + 5 + '瓶' +
      '，单价：' + '3.00' +
      '(元)，小计：' + '12.00' + '(元)\n');
    });
  });
});
