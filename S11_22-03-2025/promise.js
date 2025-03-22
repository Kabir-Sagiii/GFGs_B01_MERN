var promise = new Promise(function (resolve, reject) {
  //   resolve([{ ok: true, result: "success" }]);
  //   reject([{ ok: false, result: "error" }]);
});

promise
  .then((success) => {
    console.log("success");
    console.log(success);
  })
  .catch((error) => {
    console.log("error");
    console.log(error);
  });
