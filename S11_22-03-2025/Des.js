var obj = {
  price: 5000,
  model: "iphone15",
};

var arr = [10, 20, 40];

const [, , x] = arr;
const { model } = obj;

function f1() {
  if (true) {
  }
  if (true) {
    console.log(model, x);
  }
  if (true) {
  }
}

function f2() {
  if (true) {
  }
  if (true) {
    console.log(model);
  }
  if (true) {
    console.log(model);
  }
}

f1();
f2();
