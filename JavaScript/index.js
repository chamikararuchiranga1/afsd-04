console.log('ACPT')

// document.write('<h1>Java Script</h1>')
// document.write('Chamikara Ruchiranga')
// document.write('<h3>ACPT</h3>')
// document.write("<button>Click me</button>")

// alert('Chamikara')

// Number 
const number = 10.5

// String 
const string = 'acpt';

// Boolean 
const bool = true;

// Object 
const object = {name: "chamikara", age: 28}

// Array 
const array = [{name: "chamikara", age: 28}, 12, true, "Chamikara"];

// var , let , const 

// var 
var test = 10;
console.log(test)

{var test = 20}
console.log(test)
test = 100;
console.log(test);

// let 
let sample = 200;
console.log(sample);

// let sample = 300
sample = 500;
console.log(sample);

{let sample1 = 350}
// console.log(sample1)

// const 
{const acpt = 1000;}
const acpt = 3000;
console.log(acpt);
// const acpt = 2000;
// acpt = 2000;

// Arithmetoc Operators 
// Addition (+)
const a = 10;
const b = 20;
const addition = a + b;
console.log(addition);

// Subtraction (-)
const c = 30;
const d = 10;
const sub = c - d
console.log(sub);

// Multiplication (*)
const e = 10;
const f = 5;
const multi = e * f
console.log(multi);

// Division (/)
const division = e / f
console.log(division);

// Modulus (%)
const modulus = a%b 
console.log(modulus);

// Increment (++)
let h = 10;
h++
h++
console.log(h);

// Decrement (--)
let k = 10;
k--
k--
console.log(k);

// Comparison Operators
const l = 13;
const m = 13;
// Equal (==)
console.log(l === m);

// Not Equal (!=)
console.log(l !== m);

// Greater Than (>)
console.log(l > m);

// Less thann (<)
console.log(l < m);

// Greater than or Equal(>=)
console.log(l >= m);

// Less than or Equal (<=)
console.log(l <= m);


// Logical Operators
const n = true;
const o = true
// AND (&&)
console.log(n && o);

// OR (||)
console.log(n || o);

// NOT (!)
console.log(!n);


// Function 
function myName () {
    console.log("Chamikara");
}

const printStudentName = (name) => {
    console.log("My Name is "+name);
}
{
    console.log("ACPT");
}

myName();
printStudentName("Chamikara");
printStudentName("Yasindu")
printStudentName("Binara")
printStudentName('Kalana')


// Return Function 
// function numberEqual (num1, num2) {
//     const num = num1+num2;
//     return num;
// }
const numberEqual = (num1, num2)=> {
    const num = num1+num2;
    return num;
}

const chami = numberEqual(10, 55);
console.log(chami);

// Flow Controllers
// If 
const stu = 1800;
const stu1 = 800;

if(stu > stu1){
    if(stu > 100){
        console.log("100+++");
    }else{

    }
}else if(stu == stu1){
    console.log("Equal Number");
}else {
    console.log('False');
}

// switch
const val = '';
switch(val){
    case "ACPT":
        console.log('Print ACPT');
        break;
        case "AFSD":
            console.log('Print AFSD');
            break;
            default: 
            console.log('Non')
        break;
}

const studentMarks = (mark) => {
    let result = ''
    if(mark >= 75){
        result = "A"
    }else if(mark >= 65){
        result = "B"
    }else if(mark >= 55){
        result = "C"
    }else if(mark >= 35){
        result = "S"
    }else{
        result = "W"
    }
    return result;
}

const re = studentMarks(12);
console.log(re);

// For Loops 
const arr = [25, 45, 87, 23, 9, 57, 12, 32, 76, 99];
for(let i=0; i< arr.length; i++){
    console.log("Student "+(i+1)+" Grade Of :"+studentMarks(arr[i]));
}

// While 
let w = 0;
while(w<10){
    console.log("print true");
    w++
}

// do while 
let chil = 0;
do {
    console.log('true')
    chil++
}while(chil < 10)

// Break 
for(let i=0; i< arr.length; i++){
    console.log("Student "+(i+1)+" Grade Of :"+studentMarks(arr[i]));
    if(i === 4){
        break;
    }
}

// Object 
const car = {
    brand: 'BMW',
    color: 'blue',
    price: '12000000',
    drive: function(){console.log('drive')},
    break: ()=> {console.log('break'); return 'Drive'}
}

const brand = car.brand;
console.log(brand);

car.drive();
car.break();

// Array 
const samArray = ['Chamikara', 89, true, car];

console.log(samArray[3].break());
console.log("======================================================");

function callBack () {
    // console.log("run function");
    // return "Call Back ===== 2"
}

// const textCall = callBack();
console.log(callBack());


const person = ['Chamikara', 'Binara', 'dananjaya', 'Lasindu'];

// const p = person.pop();
// console.log(person);
// console.log(p);

// person.push('Yasindu');
// console.log(person);

// const p = person.shift();
// console.log(person);
// console.log(p);

// person.unshift('Yasindu');
// console.log(person);

// Event 
// onClick 
function clickMe () {
    console.log("Click Button");
    // document.write('<br><h1>Chamikara</h1>')
}

// onChange 
function onChangeText () {
    const text = document.getElementById('change-text').value;
    document.getElementById('onChange-view').innerText = text
}

// Mouse Over 
function mouseOver () {
    document.getElementById('mouse-view').style.backgroundColor = 'red'
    document.getElementById('mouse-view').style.width = '300px'
}

// Mouse Out 
function mouseOut () {
    document.getElementById('mouse-view').style.backgroundColor = 'blue'
    document.getElementById('mouse-view').style.width = '200px'
}