let x=[10,20,30,40,50,60]

let y=(e)=>{
    if(e%20==0){
        return true
    }
    return false
}

console.log(x.filter(y))