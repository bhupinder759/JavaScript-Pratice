// Freeze object (Immutable object) means value change na ho pye.

const obj = Object.freeze({
    name: "sahil",
    age: 25,
    city: "delhi"
})

obj.name = "bhupinder"; // freeze object me value change nahi hoti hai, isliye obj.name ki value "sahil" hi rahegi, aur output "sahil" hoga

console.log(obj.name)