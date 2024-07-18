console.log("What do want to order")
let order=Math.floor(Math.random()*5+1)
console.log(order)
switch(order){
    case 1:
        console.log("Your order is idli")
        break;
    case 2:
        console.log("Your order is vada")
        break;
    case 3:
        console.log("Your order is dosa")
        break;
    case 4:
        console.log("Your order is puri")
        break;
    case 5:
        console.log("Your order is uttapa")
        break;
    default:console.log("hi")
}