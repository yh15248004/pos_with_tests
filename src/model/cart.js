var _ = require('lodash');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.findCartItem = function(barcode) {
  return _.find(this.cartItems, function(cartItem) {
    return cartItem.getBarcode() === barcode;
  });
};

Cart.prototype.addCartItem = function(cartItem) {
  var barcode = cartItem.getBarcode();
  var count = cartItem.count;

  var existCartItem = this.findCartItem(barcode);
  if(existCartItem) {
    existCartItem.count += count;
  } else {
    this.cartItems.push(cartItem);
  }

  //return this.cartItems;
};

Cart.prototype.getCartItemsText = function() {

  var cartItemsText = '';

  _.forEach(this.cartItems,function(cartItem) {
    cartItemsText += cartItem.toCartItemText();
  });

  return cartItemsText;
};

Cart.prototype.getPromotionText = function() {
  var promotionText = '';

  _.forEach(this.cartItems,function(cartItem) {
    promotionText += cartItem.toPromotionText();
  });

  return promotionText;
};

Cart.prototype.getSummaryText = function() {
  var summaryText = '';
  var totalAmount = this.getTotalAmount();
  var saveAmount = this.getSaveAmount();
  summaryText += '总计：' + totalAmount.toFixed(2) + '(元)\n' +
                 '节省：' + saveAmount.toFixed(2) + '(元)\n';
  return summaryText;
};

Cart.prototype.getTotalAmount = function() {
  
  return _.reduce(this.cartItems, function(subtotal, cartItem) {
    return subtotal + cartItem.getSubTotal();
  },0);

};

Cart.prototype.getSaveAmount = function() {
  var noSaveTotalAmount = 0;
  var totalAmount = this.getTotalAmount();

  _.forEach(this.cartItems,function(cartItem) {
    noSaveTotalAmount += cartItem.getNoSaveTotalAmount();
  });

  return noSaveTotalAmount - totalAmount;
};

module.exports = Cart;
