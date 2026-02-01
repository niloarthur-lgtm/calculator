let total = 0;

function sum() {

    let num1 = document.getElementById('n1').value;

    total = Number(total) + Number(num1);


    document.getElementById('res').innerText = "total= " + total + " + ";
}

function less() {
    let num1 = document.getElementById('n1').value;

    total = Number(total) - Number(num1);

    document.getElementById('res').innerText = "total= " + total + " - ";
}

function mult() {
    let num1 = document.getElementById('n1').value;

    total = Number(total) * Number(num1);

    document.getElementById('res').innerText = "total= " + total + " * ";
}

function divi() {
    let num1 = document.getElementById('n1').value;

    total = Number(total) / Number(num1);

    document.getElementById('res').innerText = "total= " + total + " / ";
}
// invisible text: (alt + 0160)

function reset() {
    total = 0;
    document.getElementById('res').innerText = "total= " + total;
}
