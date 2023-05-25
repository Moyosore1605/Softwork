let client = document.getElementById('client');
let freelancer = document.getElementById('freelancer');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let button1 = document.getElementById('button');
let link1 = document.getElementById('link');

function changeButton1(params) {
    freelancer.style.outline = "0px";
    freelancer.style.border = "1px solid lightgrey";
    params.style.outline = "2px solid rgb(20,168,0)";
    params.style.border = "2px solid rgb(20,168,0)";
    params.style.outlineOffset = "5px";
    input2.checked = false;
    input1.checked = true;
    link1.innerHTML = "Join as a Client";
    link1.style.color = "white";
    button1.style.backgroundColor = "rgb(20,168,0)";
    link1.href = "clientSignUp.html";
}
function changeButton2(params) {
    client.style.outline = "0px";
    client.style.border = "1px solid lightgrey";
    params.style.outline = "2px solid rgb(20,168,0)";
    params.style.border = "2px solid rgb(20,168,0)";
    params.style.outlineOffset = "5px";
    input1.checked = false;
    input2.checked = true;
    link1.innerHTML = "Apply as a Freelancer";
    link1.style.color = "white";
    button1.style.backgroundColor = "rgb(20,168,0)";
    link1.href = 'freelancerSignUp.html';
}