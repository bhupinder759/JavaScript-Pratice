// Shallow Copy of Object

const user = {
    name: "sahil",
    age: 25,
    city: {
        name: "delhi",
        country: "india"
    }
}

const shallowCopy = Object.assign({}, user);

shallowCopy.name = "bhupinder"; // shallow copy me primitive value change ho sakti hai, isliye shallowCopy.name ki value "bhupinder" ho jayegi, aur output "bhupinder" hoga

console.log(shallowCopy.name) // bhupinder
console.log(user.name) // sahil

shallowCopy.city.name = "mumbai"; // shallow copy me nested object ke properties change ho sakti hai, isliye shallowCopy.city.name ki value "mumbai" ho jayegi, aur output "mumbai" hoga