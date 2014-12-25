jest.dontMock('../../src/model/cart');
jest.dontMock('lodash');

describe('Cart', function() {
  var cart;
  beforeEach(function() {
    var Cart = require('../../src/model/cart');
    cart = new Cart();
  });

  describe('#findCartItem()', function() {
    it('should return correct value', function() {

      //var _ = require('lodash');
      var barcode = 'ITEM000001';
      //var cart = new Cart();
      var getBarcode = jest.genMockFn();
      getBarcode.mockReturnValue('ITEM000001');

      cart.cartItems = [{
            item:{barcode:'ITEM000001',
                  name:'雪碧',
                  unit:'瓶',
                  price:3.00},
            count:5,
            getBarcode:getBarcode
          }];

      var result = cart.findCartItem(barcode);

      expect(result.item).toEqual({
        barcode:'ITEM000001',
              name:'雪碧',
              unit:'瓶',
              price:3.00
      });
      expect(result.count).toEqual(5);
    });
  });

  describe('#addCartItem()', function() {
    it('should return correct value', function() {

      var getBarcode = jest.genMockFn();
      getBarcode.mockReturnValue('ITEM000001');

      cart.cartItems = [{
        item:{barcode:'ITEM000001',
              name:'雪碧',
              unit:'瓶',
              price:3.00},
        count:2,
        getBarcode:getBarcode
      }];

      cartItem = {item:{barcode:'ITEM000001',
                         name:'雪碧',
                         unit:'瓶',
                         price:3.00},
                  count:5,
                  getBarcode:getBarcode};

      cart.addCartItem(cartItem);

      expect(cart.cartItems[0].item).toEqual({
        barcode:'ITEM000001',
        name:'雪碧',
        unit:'瓶',
        price:3.00
      });
      expect(cart.cartItems[0].count).toEqual(7);
    });
  });

});
