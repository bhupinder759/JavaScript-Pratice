// output resion ku gloab chala function overwrite nhi kiya ?

var abc = 'hello';

function overwrite() {
    var abc = 'world';
    return;
    function abc() {}
}

console.log(abc); // hello

//resion ku global chala function overwrite nhi kiya ?
// kunki hoisting ke time function declaration sabse pehle ho jata hai aur uske baad variable declaration hota hai, 
// isliye function abc global scope me ho jata hai aur variable abc local scope me ho jata hai, isliye console.log(abc) me global 
// variable abc ka value print hota hai jo ki 'hello' hai.