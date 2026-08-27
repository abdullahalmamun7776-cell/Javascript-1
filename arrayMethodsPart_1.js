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

//         MAP Mathod---------------->

let fruits1 = ["Apple","Mango","Orange","Guaba"]
let newfruits1 = fruits1.map((fruits1,idx) => {
    // console.log(`${idx} => ${fruits}`);
    // console.log(`${idx +1} => ${fruits}`);

    return (`${idx +1} => ${fruits1}`);   
})

//  console.log(newfruits1);


 let fruits2 = ["Apple","Mango","Orange","Guaba"]

 let customFruits = fruits2.filter((fruits2) => fruits2.length>5);
 console.log(customFruits)

