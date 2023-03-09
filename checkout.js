const { orange, pineapple, kiwi, apple, banana, catalogue } = require("./data");

const basket = [];

const scan = function (customerBarcode) {
  return catalogue.find((product) => {
    return product.barcode === customerBarcode;
  });
};

const addItem = function () {};

const totalPrice = function () {};

const removeItem = function () {};

module.exports = { scan, addItem, totalPrice, removeItem, basket };
