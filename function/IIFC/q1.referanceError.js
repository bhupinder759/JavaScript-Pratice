function show() {
  {
    var a = 10;
    var b = 20;
  }
  console.log(a); // 10
  console.log(b); // 20
}

show();

// asa kya krna hoga a,b jis se reference error aye bina let ke use

function show() {
  {
    (function () {
      var a = 10;
      var b = 20;
    })();
  }
  console.log(a); // ReferenceError: a is not defined
  console.log(b); // ReferenceError: b is not defined
}

show();
