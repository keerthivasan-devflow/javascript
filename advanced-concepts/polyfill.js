let person1 = {
    firstname: "Harish",
    lastname: "Kalyan"
}

let person2 = {
    firstname: "Ravi",
    lastname: "Kumar"
}

let printName = function(city){
    console.log(this.firstname, this.lastname, city)
}

let bind1 = printName.bind(person1, "Trichy")
bind1()


Function.prototype.myBindMethod = function(...args){
    console.log("This Keyword  : ", this)
    console.log("Arguments : ", args)
    let obj = this
    let params = args.slice(1)
    console.log("Params : ", params)
    return function(){
        obj.call(args[0], params[0])
    }
}

let bind2 = printName.myBindMethod(person2, "Salem")
bind2()

// Polyfill array.map() method
// Array.map((element, index, array) => {}, this);
Array.prototype.customMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

let numbers = [1, 2, 3, 4, 5];
let result = numbers.customMap((element) => element * 2);
console.log(result)