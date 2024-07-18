let v=3;

//for loop 
for (let index = 0; index < 100; index++) {
console.log(v+index);    
}

//for in loop
let obj ={
    name:"ram",
    role:"student",
    company:"self",
};

for (const key in obj) { {
        const element = obj[key];
        console.log(element,key);
    }
}

//for of loop
for (const iterator of "Ram") {
    console.log(iterator);
}

//while loop

let i=100;
while(i>0){
    console.log(i)
    i--
}

//dowhile
let a=9;
do {
    console.log("i")
    a--
} while (a>1)