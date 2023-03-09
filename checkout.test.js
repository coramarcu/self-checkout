const { orange, pineapple, kiwi, apple, banana, catalogue } = require("./data");
const { scan, addItem, totalPrice, removeItem, basket } = require("./checkout");

describe("self-checkout", () => {
  it("scans the barcode", () => {
    expect(scan(orange.barcode)).toBe(orange);
  });
});
