function sum(){
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;

    let total = Number(num1) + Number(num2);

    document.getElementById('res').innerText = "the result is:" + total;
}

function less(){
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;

    let total = Number(num1) - Number(num2);

    document.getElementById('res').innerText = "the result is:" + total;
}
