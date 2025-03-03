var user = {
  name: "raj",
  id: 101,
  address: {
    city: {
      name: "Mumbai",
      stateNo: 7,
    },
    state: "MH",
  },
};

console.log(user.address.city.name);

user.address.city.stateNo = 13;

console.log(user);
