function f1(x) {
  console.log("f1 is called");
  x();
}

function f2() {
  console.log("f2 is called");
}

f1(f2);

f1(function () {
  console.log("I am Callback for F1");
});

f1(function f3() {
  console.log("I am F3Callback function");
});

f1(() => {
  console.log("I am ArrowCallback");
});
