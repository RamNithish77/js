let Obj = {
    Name:"Sriram",
    age:"19",
}
console.log(Obj)
console.log(Obj.Name)
let naruto={
    "main chareccter":"naruto",
    villan:"sasuke",
    hero:[1,2,3],
    "side charecters":{
        c1:"kakashi",
        c2:"obito",
    },
    action:function(){
        return `i am ${this.villan}`
    }
}
console.log(naruto.action())

let classroom1 ={
    students:42,
    girls:21,
    boys:21,
    others:0,
    sound:function(){
        return "ahhhhhahhhhhhhhahhhh"
    }
}

let room1=Object.create(classroom1);
room1.teachers=2;
console.log(room1);
console.log(room1.students)

const onepiece={
    Captain:"Monkey D.luffy",
    Swordsmen:"Roanoava Zoro",
    cook:"Vinsmoke Sanji",
    Navigatooor:"Nami",
    Sniper:"God D.Ussop",
    Doctor:"Chopper",
    Mother:"Robin",
    Shipwright:"Franky",
    Singer:"Brook",
    Driver:"First son of sea jienbe",
}

console.log(`${Object.keys(onepiece)}`)
console.log(`${Object.values(onepiece)}`)

for (const key in onepiece) {
   console.log(`He is ship's ${key} and the name is ${onepiece[key]}`)     
}

delete onepiece.Sniper

console.log(onepiece)

const {Driver:h,Captain:h1}=onepiece;
console.log(h)
console.log(h1)

function cap({Captain}) {return `i am ${Captain}`}
console.log(cap(onepiece))