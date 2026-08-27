/**
 * Rest
 * 
 * Function
 * 
 * 
*/

function add (...numbers){
    // console.log(numbers)
    let total = 0;
    for(const num of numbers){
        total += num
    }
    return total;
}


console.log(add(1,2,3,4,5,6,7))


/**
 * OBJECT
*/
const obj = {
    Name : "Abdullah",
    age : 43,
    address : "Dhaka",
    occopation : "web developer"
};

const {Name,...remember} = obj

console.log(remember)

//##########

const arr = [1,2,34,56,78,89,100,2000];

// const arr2 = [ , , , , , ,...remember1]   it's not correct
const [ , , , , , ,...remember1] = arr

console.log(remember1)