var Keytimerotator = require('../index');

describe('Keytimerotator', function () {
  
  var schedule = "0 * * * * *";

  var keys = [
    {
      key: 'rtfdgkjfdgkj',
      limit: 1
    },
    {
      key: 'hdkjfdsfgnkjdgf',
      limit: 3
    }
  ];

  var keytimerotator = new Keytimerotator(keys, schedule);

  beforeEach(function () {      
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  it('validate', function (done) {
  
    var key1 = keytimerotator.getKey();

    var getKeys = function () {      
      var key2 = keytimerotator.getKey();
      expect(key1).toEqual(key2);
      done();
    };

    setTimeout(getKeys, 61000);
  });
});