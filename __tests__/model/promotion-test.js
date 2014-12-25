jest.dontMock('../../src/model/promotion');

describe(',all()', function() {

  it('should return corret array', function() {

    var Promotion = require('../../src/model/promotion');

    var result = Promotion.all();

    expect(result).toEqual([
      new Promotion('BUY_TWO_GET_ONE_FREE', [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ])
    ]);
    
  });

});
