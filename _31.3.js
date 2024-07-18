export default class DragonBall{
 constructor(name,powerlevel){
    this._name=name;
    this._powerlevel=powerlevel;
 }
 showoff(){
    console.log(`my name is ${this._name} and my power level is over ${this._powerlevel}`)
 }
}