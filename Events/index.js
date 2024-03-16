function equal() {
    const num1 = document.getElementById('input-1').value;
    const num2 = document.getElementById('input-2').value;
    const total = parseInt(num1) + parseInt(num2)
    document.getElementById('display-1').innerText = total
}

function nameEqual(){
    const text1 = document.getElementById('input-3').value;
    const text2 = document.getElementById('input-4').value;
    if(text1 === text2){
        document.getElementById('display-2').innerText = "Equal"
    }else{
        document.getElementById('display-2').innerText = "Not Equal"
    }
}

function greaterthan () {
    const number1 = document.getElementById('input-5').value
    const number2 = document.getElementById('input-6').value
    if(parseInt(number1) < parseInt(number2)){
        document.getElementById('display-3').innerText = "Greaterthan"
    }else if(parseInt(number1) == parseInt(number2)){
        document.getElementById('display-3').innerText = "Equal"
    }else{
        document.getElementById('display-3').innerText = "Lessthan"
    }
}

function addition () {
    const number = document.getElementById("input-7").value;
    let sum = 0;
    for(let i=0; i<number.length; i++){
        sum += parseInt(number[i]);
    }
    document.getElementById('display-4').innerText = sum
}

function enterMarks () {
    const mark = document.getElementById("input-8").value;
    let result = ""
    if(mark >= 75){
        result = "A";
    }else if(mark >= 65){
        result = "B";
    }else if(mark >= 45){
        result = "C";
    }else if(mark >= 35){
        result = "S";
    }else{
        result = "Fail";
    }
    document.getElementById('display-5').innerText = result
 }

 function keySubmit () {
    let fullName = "";
    const userInput = document.getElementById("input-9").value

switch (userInput) {
    case 'intern': 
    fullName = "Intern Software Engineer";
    break;
  case "se":
    fullName = "Software Engineer";
    break;
  case "ase":
    fullName = "Associate Software Engineer";
    break;
  case "sse":
    fullName = "Senior Software Engineer";
    break;
  case "atl":
    fullName = "Assistant Tech Lead";
    break;
  case "tl":
    fullName = "Tech Lead";
    break;
  default:
    fullName = "error key word..!";
    break;
}

    document.getElementById('display-6').innerText = fullName
}


function login() {
    const uName = 'adMIn';
    const uPass = '12345';
    const userName = document.getElementById("test-10").value
    const password = document.getElementById("test-11").value
    let mms = ""
    if(uName.toLowerCase() == userName.toLowerCase() && uPass.toLowerCase() == password.toLowerCase()){
        mms = 'Login Success..!'
    }else{
        mms = 'Login Fail..!'
    }
    document.getElementById('display-7').innerText = mms;
}

function enterLogin (event) {
    if(event.keyCode === 13){
        login()
    }
}

const numArray = []
function arrayPush(event) {
    if(event.keyCode === 13){
        const userInput = document.getElementById("test-12").value
        numArray.push(userInput);
        document.getElementById("test-12").value = "";
    }
}

function arrayPrint() {
    document.getElementById('display-8').innerText = numArray;
}

