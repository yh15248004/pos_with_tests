jest.dontMock('../../src/model/cart');
jest.dontMock('lodash');

describe('Cart', function() {
  var cart;
  var cartItem;
  beforeEach(function() {
    var Cart = require('../../src/model/cart');
    var CartItem = require('../../src/model/cart-item');
    cart = new Cart();
    cartItem = new CartItem();
  });

  describe('#findCartItem()', function() {
    it('should return correct cartItem', function() {

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
    it('should return correct count', function() {

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

      expect(cart.cartItems[0].count).toEqual(7);
    });

    it('should return correct cartItems', function() {
      var getBarcode = jest.genMockFn();
      getBarcode.mockReturnValue('ITEM000001');

      cartItem = {item:'item',
                  count:5,
                  getBarcode:getBarcode};

      cart.addCartItem(cartItem);

      expect(cart.cartItems[0].item).toEqual('item');
      expect(cart.cartItems[0].count).toEqual(5);
    });

  });

  describe('#getCartItemsText()', function() {
    it('should return correct value', function() {
      var toCartItemText = jest.genMockFn();
      toCartItemText.mockReturnValue(
        'cartItemsText');

      cart.cartItems = [{toCartItemText:toCartItemText}];

      var result = cart.getCartItemsText();

      expect(result).toEqual(
        'cartItemsText');
    });
  });

  describe('#getPromotionText()', function() {
    it('should return correct value', function() {
      var toPromotionText = jest.genMockFn();
      toPromotionText.mockReturnValue('promotionText');

      cart.cartItems = [{toPromotionText:toPromotionText}];

      var result = cart.getPromotionText();

      expect(result).toEqual('promotionText');
    });
  });

  // describe('#getSummaryText()', function() {
  //   it('should return correct value', function() {
  //
  //     cart.cartItems = [{
  //       item:{barcode:'ITEM000001',
  //       name:'雪碧',
  //       unit:'瓶',
  //       price:3.00},
  //       count:2,
  //       getBarcode:getBarcode
  //     }];
  //
  //   });
  // });

  describe('#getTotalAmount()', function() {
    it('should return correct amount', function() {
      cartItem.getSubTotal.mockReturnValue(10);
      cart.cartItems = [{getSubTotal : cartItem.getSubTotal}];

      var result = cart.getTotalAmount();
      expect(result).toBe(10);
    });
  });

  describe('#getSaveAmount()', function() {
    it('should return correct amount', function() {
      cartItem.getNoSaveTotalAmount.mockReturnValue(10);
      cartItem.getSubTotal.mockReturnValue(3);
      
      cart.cartItems = [
      {getNoSaveTotalAmount : cartItem.getNoSaveTotalAmount,
       getSubTotal : cartItem.getSubTotal}];

      var result = cart.getSaveAmount();
      expect(result).toBe(7);
    });
  });
});
