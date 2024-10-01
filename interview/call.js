

const name = {
  firstName: "mahesh",
  lastName: "babu",
}

let printFullName = function(homeTown) {
  console.log(`${this.firstName} ${this.lastName} - ${homeTown}`)
}

const person2 = {
  firstName: "sacin",
  lastName: "Tendulkar",
}

// function borrowing
printFullName.call(person2, 'Mumbai')

printFullName.call(name, "Kollikolla")

printFullName.apply(name, ["Kollikolla"])



// bind();  return function instance
let printName = printFullName.bind(person2, "mumbai");

printName("Mumbai")