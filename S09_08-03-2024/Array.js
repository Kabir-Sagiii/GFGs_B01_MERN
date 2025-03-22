var usersId = [2, 4, 6, 8, 8976];

var newArray = usersId.map(function (element, index) {
  var res = element * element;
  return res; //[4,16,36,64,----]
});

console.log(newArray);

// usersId.forEach(function (element, index) {
//   console.log(y);
// });

// var indexNum = usersId.indexOf(500);
// var elementStatus = usersId.includes(100);
// console.log(elementStatus);

// console.log(usersId);

// usersId.splice(1, 2);
// usersId.splice(3, 0, true);
// usersId.splice(4, 1, "GFG");
// console.log(usersId);

// usersId.shift();

// var value = usersId.pop();
// usersId.pop();
// console.log(value);

// var size = usersId.length;
// console.log(size);

// usersId.push(true);
// usersId.unshift(false);
// console.log(usersId);
