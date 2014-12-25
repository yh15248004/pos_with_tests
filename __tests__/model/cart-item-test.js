jest.dontMock('../../src/model/cart-item');
jest.dontMock('../../src/model/promotion');
jest.dontMock('lodash');

describe('CartItem', function() {
  var CartItem;
  var cartItem;
  beforeEach(function() {
    CartItem = require('../../src/model/cart-item');
    cartItem = new CartItem({
         barcode : 'ITEM000001',name:'雪碧',unit:'瓶',price:3.00},5);
    });

  describe('#getBarcode()', function() {
    it('should return correct barcode', function() {

      var result = cartItem.getBarcode();

      expect(result).toBe('ITEM000001');
    });
  });

  describe('#getSubTotal()', function() {
    it('should return subTotal with promotion', function() {

      var result = cartItem.getSubTotal();

      expect(result).toEqual(12);
    });

    it('should return subTotal without promotion', function() {

      cartItem = new CartItem({
        barcode : 'ITEM000003',name:'雪碧',unit:'瓶',price:3.00},5);

      var result =  cartItem.getSubTotal();

      expect(result).toEqual(15);
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

  describe('#toPromotionText()', function() {

    it('should return correct text', function() {

      var result = cartItem.toPromotionText();

      expect(result).toEqual('名称：' + '雪碧' +
      '，数量：' + 1 + '瓶' + '\n');
    });

    it('should return correct text', function() {
      cartItem = new CartItem({
        barcode : 'ITEM000003',name:'雪碧',unit:'瓶',price:3.00},5);

      var result = cartItem.toPromotionText();

      expect(result).toEqual('');
    });

  });

  describe('#getNoSaveTotalAmount()', function() {
    it('should return correct barcode', function() {

      var result = cartItem.getNoSaveTotalAmount();

      expect(result).toBe(15);
    });
  });

});
