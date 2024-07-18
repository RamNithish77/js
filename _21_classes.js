class pizza{
    constructor(pizzaSize,pizzaFlavour){
        this.size=pizzaSize;
        this.flavour=pizzaFlavour;
        this.crust="Original";
        this.toppings=[];
    }

// get pizzaCrust(){
//     return this.crust;
// }
// set pizzaCrust(pizzaCrust){
//     this.crust=pizzaCrust
// }
// gettoppings(){
//     return this.toppings;
// }
// settoppings(topping){
//     this.toppings.push(topping)
// }
   bake() {
        console.log(`The ${this.size} pizza of ${this.flavour} with ${this.crust} Crust`)
    }
}

// let myPizza= new pizza("Large","Corn")
// myPizza.pizzaCrust="thin "
// myPizza.bake();
// console.log(myPizza.pizzaCrust)
// let arr=[12,3,3]
// myPizza.settoppings(arr)
// console.log(myPizza.gettoppings())


class prirates{
    constructor(PrirateName,NoofCrewMember){
        this.Name=PrirateName;
        this.NoofCrewNum=NoofCrewMember;
    }
    Crew(){
        console.log(`The name of the Captian is ${this.Name} And Crew has ${this.NoofCrewNum} Numbers`)
    }
}
class Good extends prirates{
    constructor(PrirateName){
        super(PrirateName);
        this.behaviour="Good";
    }
    CrewInten(){
        console.log(`${this.Name} are ${this.behaviour} pirates`)
    }
}
let StrawHats=new prirates("Monkey D.Luffy",10)
StrawHats.Crew();
let StrawHatsbe=new Good("StrawHats")
StrawHatsbe.CrewInten();


//factory functions
// function naruto(naruto){
//     const name=naruto
//     return{
//         anime:()=>console.log(`i am ${name}`)
//     }
// }
// let sasuke= naruto("kakashi")
// sasuke.anime();

class Dragonball{
    #race="saiyan"
    #name;
    height=89;
    constructor(name){
        this.#name=name
    }
    blow(){
        console.log(`i am ${this.#name} and race ${this.#race}`)
    }

    getheight(){
        return this.height
    }
    setheight(height){
        this.height=height
    }
}
let goku=new Dragonball("goku")
goku.blow()
goku.setheight("78")
console.log(goku.getheight())