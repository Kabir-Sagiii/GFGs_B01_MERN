const myReducer = (state = { name: "Sagar" }, action) => {
  console.log("reducer is called");
  if (action.type === "NAME") {
    state = action.payload;
  }

  return state;
};

export default myReducer;
