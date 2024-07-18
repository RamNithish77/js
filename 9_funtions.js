

function mail(emaila){
    return emaila.slice(0,emaila.indexOf("@"))
}

console.log(mail("j.varunreddy23@gmail.com"));


let fac=num=>{
    let sum = num.reduce((a,b)=>{
        return a*b;
    })
    return sum
}
num=[1,2,3,4,5]
console.log(fac(num));

let dif2=num=>{
    let arr=[];
    num.filter(a=>{
        if(a%2==0){
            arr.push(a)
        }
    })
    return arr
}

console.log(dif2(num))