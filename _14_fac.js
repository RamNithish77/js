let a=5

function fac(a){
    let arr=Array.from(Array(a+1).keys())
    let c=arr.slice(1,).reduce((c,b)=>{
        return c+b;
    })
    return c
}

let b=fac(a)
console.log(b)
