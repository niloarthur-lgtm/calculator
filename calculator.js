function sum() {
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;

    let all = Number(num1) + Number(num2);

    document.getElementById('res').innerText = "= " + all;
}

function less() {
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;

    let all = Number(num1) - Number(num2);

    document.getElementById('res').innerText = "= " + all;
}

function mult() {
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;

    let all = Number(num1) * Number(num2);

    document.getElementById('res').innerText = "= " + all;
}
function divi(){
 let num1 = document.getElementById('n1').value;
 let num2 = document.getElementById('n2').value;

 let all = Number(num1) / Number(num2);

 document.getElementById('res').innerText = "= " + all;
}
