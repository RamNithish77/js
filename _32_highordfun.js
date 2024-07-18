let a=100;

let arr=Array.from(Array(a+1).keys())
arr.shift()

let arr2=[];

arr.forEach(e=>{
   arr2.push(e*2)
})
console.log(arr2)

let arr3=arr2.filter(e=>{
    return e%4==0
})

console.log(arr3)

let arr4=arr3.map(e=>{
    return 3*e
})

console.log(arr4)

let product=arr4.reduce((a,b)=>{
    return a+b;
})

console.log(product)