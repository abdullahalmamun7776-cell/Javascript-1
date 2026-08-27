//  Spread Operator = three Dot
// let newArr = [...oldArr]
// let newObj = {...oldObj}

let cart =["fruits",'vagetables','rice']

// cart.push('egg');

let cart2 = [...cart, "egg"]
console.log(cart,cart2)


const personalInfo = {
    Name : "Abdullah",
    age : 34,
};

const contactInfo = {
    email:"andjgk@gmail.com",
    phone : "01683928939"
}

const Profile = {...personalInfo,...contactInfo}

console.log(Profile)