// Freeze Vs Seal

// Seal object (Mutable object) means value change ho pye but new property add nahi ho pye.

const user = {
    name: "sahil",
    age: 25,
    city: "delhi"
}

Object.seal(user);

user.name = "bhupinder"; // seal object me value change ho sakti hai, isliye user.name ki value "bhupinder" ho jayegi, aur output "bhupinder" hoga

console.log(user.name)

user.country = "india"; // seal object me new property add nahi ho sakti hai, isliye user.country property add nahi hogi, aur output undefined hoga

console.log(user.country)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Freeze object (Immutable object) means value change nahi hoti hai but new property add nahi ho pye.

const obj = Object.freeze({
    name: "sahil",
    age: 25,
    city: "delhi"
})

obj.name = "bhupinder"; // freeze object me value change nahi hoti hai, isliye obj.name ki value "sahil" hi rahegi, aur output "sahil" hoga

console.log(obj.name)

obj.country = "india"; // freeze object me new property add nahi hoti hai, isliye obj.country property add nahi hogi, aur output undefined hoga

console.log(obj.country)