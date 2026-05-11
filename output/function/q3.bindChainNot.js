// output ya ayega
function b() {
  console.log(this.name);
}

b = b.bind({ name: "sahil", }).bind({ name: "bhupinder", }); // bind me sirf pehla bind hi kaam karega, dusra bind ignore ho jayega kunki bind chain nhi hota hai, isliye this.name ka reference pehle bind me diye gaye object ki taraf jayega aur output "sahil" hoga
b()