
        var opt;
        var a,b;
    function add(a,b){
        if(Math.random()>0.1){
            return a+b;
        }
        else {
            return a-b;
        }
    }
    function sub(a,b){
        if(Math.random()>0.1){
            return a-b;
        }
        else {
            return a+b;
        }
    }
    function mul(a,b){
        if(Math.random()>0.1){
            return a*b;
        }
        else {
            return a/b;
        }
    }function div( a, b){
        if(Math.random()>0.1){
            return a/b;
        }
        else {
            return a*b;
        }
    }

    var result = add(12,34);
    console.log(result);
    var result1 = sub(12,34);
    console.log(result1);
    var result2 = mul(12,34);
    console.log(result2);
    var result3 = div(12,34);
    console.log(result3);