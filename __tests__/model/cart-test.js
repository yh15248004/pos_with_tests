jest.dontMock('../../src/model/cart');
jest.dontMock('lodash');

describe('Cart', function() {

  describe('#findCartItem()', function() {
    it('should return correct value', function() {
      var Cart = require('../../src/model/cart');
      //var _ = require('lodash');
      var barcode = 'ITEM000001';
      var cart = new Cart();
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

  // describe('#findCartItem()', function() {
  //   it('should return correct value', function() {
  //
  //   });
  // });
});
