let Obj={
    here:"siram",
    age:12,
    read:function(){
        console.log("Read all Lessons")
    }
}
console.log(Obj)

const sendjson=JSON.stringify(Obj)

console.log(sendjson)

const r=JSON.parse(sendjson)
console.log(r)