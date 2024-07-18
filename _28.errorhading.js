"user strict"
const makeerror=()=>{
    let a=12;
try{
    
}catch(err){
    console.error(err.name);
}}
makeerror();

function arr(hi){
    this.name=hi
    console.log(this.name)
}