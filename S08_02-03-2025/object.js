var user = {
  name: "sagar",
  id: 101,
  city: "pune",
  gender: "male",
};

// var value = user.name;
// var myValue = user["city"];
// console.log(value, myValue);

console.log(user);
console.log("-------------------------------");

// user.phone = 99999999;
// user.city = "Hyd";
delete user.id;

console.log(user);
