// pollyfil as a browser fallback

let name = {
  firstName: "mahesh",
  lastName: "babu",
}

let printFullName = function(state) {
  console.log(`${this.firstName} ${this.lastName} - ${state} `)
}

let printmyName = printFullName.bind(name, "Andhrapradesh");

printmyName()

Function.prototype.myBind = function(...args) {
  let obj = this;
  let params = args.slice(1)
  return function(...args2) {
    obj.apply(args[0],[...params, ...args2])
  }
}

let printMyName2 = printFullName.myBind(name);

printMyName2("andhrapradesh", "india")