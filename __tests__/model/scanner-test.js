jest.dontMock('../../src/model/scanner');
jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart-item');
jest.dontMock('lodash');

//var Item = require('../../src/model/item');
//var CartItem = require('../../src/model/cart-item');

describe('Scanner', function() {

  describe('#getCartItem()', function() {

    var Scanner = require('../../src/model/scanner');
    var scanner = new Scanner();
    it('should return correct cartItem', function() {

      var tag = 'ITEM000001';
      // Item.all.mockReturnValue([{barcode : 'ITEM000001'},
      //                           {barcode : 'ITEM000003'}]);
      // Item = {all : Item.all};

      var result = scanner.getCartItem(tag);
      expect(result.item).toEqual({barcode : 'ITEM000001',
                                   name : '雪碧',
                                   unit : '瓶',
                                   price : 3.00});
      expect(result.count).toBe(1);

    });

    it('should return correct cartItem', function() {
      var tag = 'ITEM000003-2';

      var result = scanner.getCartItem(tag);
      expect(result.item).toEqual({barcode : 'ITEM000003',
                                   name : '荔枝',
                                   unit : '斤',
                                   price : 15.00});
      expect(result.count).toBe(2);
    });

  });

});
