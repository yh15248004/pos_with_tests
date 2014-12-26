jest.dontMock('../../src/model/inventory');
jest.dontMock('moment');

describe('Inventory', function() {

  describe('#toString()', function() {

    it('should return correct string', function() {
      var Cart = require('../../src/model/cart');
      var Inventory = require('../../src/model/inventory');
      var moment = require('moment');
      var cart = new Cart();

      cart.getCartItemsText.mockReturnValue('cartItmText');
      cart.getPromotionText.mockReturnValue('promotionText');
      cart.getSummaryText.mockReturnValue('summaryText');

      cart = {
        getCartItemsText : cart.getCartItemsText,
        getPromotionText : cart.getPromotionText,
        getSummaryText : cart.getSummaryText
      };

      var inventorytext = new Inventory(cart);

      var result = inventorytext.toString();

      expect(result).toBe(
        '***<没钱赚商店>购物清单***\n' +
        '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
        '----------------------\n' +
        'cartItmText' +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        'promotionText' +
        '----------------------\n' +
        'summaryText' +
        '**********************');
    });

  });

});
