console.log("loops")

// let a=12;

// for(let i=0;i<100;i++){
//     console.log(a+i);
// }

let obj = {
    name: "sriram",
    age :18
 }

 for (const key in obj) {
    let el=obj[key];
    console.log(key,el)
 }

 for (const i of "Harry") {
    console.log(i)
 }