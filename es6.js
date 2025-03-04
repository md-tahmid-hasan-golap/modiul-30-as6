const countryName = "Bangladesg";
console.log(countryName);
// man change hobe na ata constant diye diclar kora ase

// countryName = "bd";
// console.log(countryName)

// let age = 20;
// console.log(age);

// age = 21;
// console.log(age)


// function sum (num1, num2){
//     const result = num1 + num2;
//     console.log(result)
// }
// sum(10);

// function gun (num1=1, num2=1){
//     const result = num1 * num2;
//     console.log(result)
// }

// gun(10)


// java script multiple line

// rong way 

// const kobita = "amadar desh ta  sopno puri 
// lal pori nil pori"

// rong way 

// const kobita2 ='
// amadar desh ta  sopno puri'

// write way 

// const kobita = `ata gache tota pakhi 
// dalim gache mow
// ato daki tobu kotha
// kou na keno bou`
// console.log(kobita);


// const country = "bangladesh";

// // const add = "Amer sonar" + " " + country + " ami tomai valobashi"
// // console.log(add)

// const add = `amer sonar ${country} ami tomoy valo bashi`;
// console.log(add)

// simple function

// function add (nun1, num2){
//    return nun1 + num2;
// }

// const output = add(10, 10);
// console.log(output)


// arrow function

// const add = (a, b) => {
//     return a +  b;
// }


// const output = add(10,20);
// console.log(output)

// shortcut arrow function

// const add = (a, b) =>  a + b;

// const output = add(10,20);
// console.log(output)

// arrow function body

// const sum = (a, b) => a + b;
// // arrow function body2

// const sum2 = (a, b) => {
//     return a + b;
// }
// console.log(sum2(10, 40))


// document.getElementById("title").addEventListener("click", function(){
//     console.log("good")
// })

// document.getElementById("title").addEventListener("click", ()=>{
//     console.log("hello World")
// })


// const title = document.getElementById("title");
// title.setAttribute("title", "API")


// const friends = ["golap", "raj", "tahmid"];

// const newArray = ["name", ...friends];
// console.log(newArray)

const numbers = [10, 22, 44, 665, 22, 88, 333];

console.log(Math.max(...numbers))