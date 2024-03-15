const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it works with all comma positions', function(){
    expect(addCommas(123)).toEqual('123');
    expect(addCommas(1234)).toEqual('1,234');
    expect(addCommas(12345)).toEqual('12,345');
    expect(addCommas(123456)).toEqual('123,456');
  });

  test('it works with negatives', function(){
    expect(addCommas(-123)).toEqual('-123');
    expect(addCommas(-1234)).toEqual('-1,234');
    expect(addCommas(-12345)).toEqual('-12,345');
    expect(addCommas(-123456)).toEqual('-123,456');
  })
});
