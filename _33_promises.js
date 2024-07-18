let myPromise=new Promise((resolve,reject)=>{
    let err=99;
    if(err>899){
        resolve("he can dive")
    }else{
        reject("no he cant drive")
    }
})
// .catch(err=>{
//     console.error(err)
// })

// console.log(myPromise);
// myPromise.then(e=>{
//     return e+1
// }).then(e=>{
//     console.log(e)
// })
// .catch(e=>{
//     console.error(e)
// })

let newPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("i am resolved")
    }, 3000);
});

newPromise.then(value=>{
    console.log(value)
})

// myPromise.then(value=>{
//     console.log(value)
// })
