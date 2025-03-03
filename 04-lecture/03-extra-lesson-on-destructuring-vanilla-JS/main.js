// Destructuring array
console.log("################ Destructuring array ###########");
let colors = ['red', 'blue', 'yellow']
console.log(colors)

// May assign the array to variables - WITHOUT Destructuring
let red1 = colors[0]
let blue1 = colors[1]
let yellow1 = colors[2]
console.log(red1, blue1, yellow1);

// rewrite the abode code - WITH Destructuring
const [red, blue, yellow] = colors;
console.log(red, blue, yellow)

// Har sett detta i React
// const [puns, setPuns] = useState()
//
// useState() returnerar en array
// puns = useState()[0]
// setPuns = useState()[1]






console.log("################ Destructuring Object ###########");
let props = {
  firstname: "John",
  lastname: "Doe",
  age: 33
}

// May assign the object parameters to variables - WITHOUT Destructuring

let firstname1 = props.firstname
let lastname1 = props.lastname
let age1 = props.age
console.log(firstname1, lastname1, age1);

// rewrite the abode code - WITH Destructuring

const {firstname, lastname, age} = props
console.log(firstname, lastname, age)


// Har sett detta i React
// puns = (props) => {
//    props.firstname
// } 
// puns = ({firstname, lastname, age}) => {
//    firstname
// } 
