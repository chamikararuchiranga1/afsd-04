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