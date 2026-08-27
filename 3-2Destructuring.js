

const student = {
    Name : "Abdullah",
    age : 23,
    address : "Dhaka,Bangladesh"
}

//  Old system

// const OldName = student.Name

// New System 
// const {age , address, Name} = student
// console.log(address);


const student1 = {
    Name : "Abdullah",
    age : 23,
    address : {
        city : "Dhaka",
        zipCode : 1212
    }
}


const {address:{zipCode}} = student1

console.log(zipCode)


const arr =  ["red","Green","Black"];
const [first,sec,thi] = arr
console.log(sec)


const student2 = {
    Name2 : "mamun",
    age2 : 23,
    address2 : {
        city2 : "Dhaka",
        zipCode2 : 1212
    },
    hobbies : ["fishing","Gardening",'swimming', "climbing"],
}
const{hobbies}=student2
const [first2,second,third,four]=hobbies;

const{Name2 , address2:{city2}, hobbies:[]}=student2;

console.log(four);
