const productsActionCreator = (data) => {
  return {
    type: "products",
    payload: data,
  };
};

export default productsActionCreator;
