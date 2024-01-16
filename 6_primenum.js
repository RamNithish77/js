function prime(x){
    if(x>=2){
        var count =0;
        for (let index = 0; index < x/2; index++) {
            if(x%2==0){
                count++;
            }
        }
        if(count==0){
            return 1;
        }
        else{
            return 0;
        }
    }
    else{
        console.log("enter a valid number!");
    }
}

console.log(prime(9));
console.log(prime(6));
console.log(prime(4));
console.log(prime(5));