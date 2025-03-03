var product = {
  brandName: "Apple",
  model: "Iphone 16 Pro Max",
  price: 185000,
  rating: 3.4,

  getDetails: function () {
    console.log("all details displayed");
  },

  getModelName: function fn() {
    console.log("modelname displayed");
  },

  getPrice: () => {
    console.log("price displayed");
  },
};

product.getDetails();
console.log();
