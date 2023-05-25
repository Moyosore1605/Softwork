let inputCheck = document.getElementById('checked');
inputCheck.checked = true;
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let puppet = document.getElementById('passwordInput');
let see = document.getElementById('eye');
let blind = document.getElementById('eyeSlash');
let logIn = document.getElementById('login');
let user
let input1;
let input2;
let input3;
let input4;
let signUp = [];

if (localStorage.getItem('Freelancer Details')) {
    signUp = JSON.parse(localStorage.getItem('Freelancer Details'));
}
function changeToText(params) {
    blind.style.display = 'none';
    see.style.display = 'flex';
    puppet.type = 'text';
}
function changeToPassword(params) {
    blind.style.display = 'flex';
    see.style.display = 'none';
    puppet.type = 'password';
}
function saveFreelancerSignUp(params) {
    user = 'Freelancer';
    input1 = firstName.value;
    input2 = lastName.value;
    input3 = email.value;
    input4 = puppet.value;
    if (input1 != "" && input2 != "" && input3!= "" && input4 != '') {
        signUp.push({ user: user, firstName: input1, lastName: input2, email: input3, password: input4 });
        console.log(signUp);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        puppet.value = '';
        logIn.setAttribute('href', 'login.html');
    }
    else {
        alert("Please fill all fields and click the damn checkbox sir or ma'am")
    }
    localStorage.setItem('Freelancer Details', JSON.stringify(signUp));
}