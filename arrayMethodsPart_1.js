/**
 *     FOREACH
// */
// let fruits = ["Apple","Mango","Orange","Guaba"]

// let newfruits = fruits.forEach((fruits,idx) => {
    // console.log(`${idx} => ${fruits}`);
    // console.log(`${idx +1} => ${fruits}`);

//     // return (`${idx +1} => ${fruits}`);   foreach cannot return 
// })

// console.log(newfruits);


let fruits1 = ["Apple","Mango","Orange","Guaba"]
let newfruits1 = fruits1.map((fruits1,idx) => {
    // console.log(`${idx} => ${fruits}`);
    // console.log(`${idx +1} => ${fruits}`);

    return (`${idx +1} => ${fruits1}`);   
})

 console.log(newfruits1);