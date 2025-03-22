var obj1 = {
  name: "sagar",
  city: "pune",
  id: 10101,
  gender: "male",
};

var obj2 = {
  ...obj1,
};

var arr1 = [10, 20, 30, 40];
var arr = [true, false];
var arr2 = [...arr1, ...arr];
console.log(arr1);
console.log("------------------");
console.log(arr2);
