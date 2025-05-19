const myReducer = (state = { products: [], users: [] }, action) => {
  console.log("reducer is called");
  if (action.type === "NAME") {
    state = action.payload;
  } else if (action.type === "products") {
    state = {
      ...state,
      products: action.payload,
    };
  } else if (action.type === "users") {
    state = {
      ...state,
      users: action.payload,
    };
  }

  return state;
};

export default myReducer;
