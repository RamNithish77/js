function add(a, b,c=9){
    if (a>0&&b>0){
        return a+b+c;
    }
    else{
        return 0;
    }
}

let result = add(12,34);
console.log(result);
result = add(0,2);
console.log("the result is",result);

function s(name){
    console.log("hey i am "+name+" ");
}

s("ram")