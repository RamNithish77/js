console.log("hiiii")

let a=5;
var sum=1;
for(let i=1;i<=a;i++){
    sum=sum*i;
}
console.log(sum);

let sriram ={
    name:"baki",
    age:20,
    gym:"1.1month"
}

for (const key in sriram) {
        const element = sriram[key];
        console.log(key,element);
    }

    for (const iterator of "baki") {
        console.log(iterator)
    }

    var r=1;
    while(r<9){
        console.log(r);
        r++;
    }

    var h=4;
    do {
        console.log(h);
        h++;
    } while (h>9);