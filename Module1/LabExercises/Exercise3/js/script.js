function changeMe1() {
    document.getElementById('column1').style.backgroundColor= "blue";
    let input1 = document.getElementById('input1').value.trim();
    document.getElementById('heading1').innerText = input1;
    document.getElementById('heading1').style.color = "#ffffff";
}

function changeMe2() {
    document.getElementById('column2').style.backgroundColor= "red";
    let input2 = document.getElementById('input2').value.trim();
    document.getElementById('heading2').innerText = input2;
    document.getElementById('heading2').style.color = "#ffffff";
}

function reset() {
    document.getElementById('column1').style.backgroundColor= "";
    document.getElementById('heading1').innerText = "Hello";
    document.getElementById('heading1').style.color = "";
    document.getElementById('input1').value = "";

    document.getElementById('column2').style.backgroundColor= "";
    document.getElementById('heading2').innerText = "World";
    document.getElementById('heading2').style.color = "";
    document.getElementById('input2').value = "";
}