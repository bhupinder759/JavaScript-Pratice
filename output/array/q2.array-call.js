var length = 10;

function count() {
  console.log(this.length);
}

const data = [count,"A", 101];

data[0]("hello"); // 3, kyuki data[0] me count function hai aur uska this reference data array ko point karega, aur data array ki length 3 hai, isliye output 3 hoga