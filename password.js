let input = document.getElementById('password');
let link = document.getElementById('link');
let clientDetails = [];
let freelancerDetails = [];
clientDetails = JSON.parse(localStorage.getItem('Client Details'));
console.log(clientDetails);
freelancerDetails = JSON.parse(localStorage.getItem('Freelancer Details'));
console.log(freelancerDetails);
let index = localStorage.getItem('Index Number');
let usertype = localStorage.getItem('User type');
let disEmail = document.getElementById('displayEmail');
let eye = document.getElementById('eye');
let eye_slash = document.getElementById('eye-slash');

if (usertype == 'client') {
    disEmail.innerHTML = clientDetails[index].email;
}
else if (usertype == 'freelancer') {
    disEmail.innerHTML = freelancerDetails[index].email;
}
function see(params) {
    input.type = 'text';
    eye_slash.style.display = 'none';
    eye.style.display = 'flex';
}
function hide(params) {
    input.type = 'password';
    eye_slash.style.display = 'flex';
    eye.style.display = 'none';
}
function checkPassword() {
    if (usertype == 'client') {
        if (input.value == clientDetails[index].password) {
            link.setAttribute('href', 'clientHomePage.html');
            input.value = '';
        }
    }
    else if (usertype == 'freelancer') {
        if (input.value == freelancerDetails[index].password) {
            link.setAttribute('href', 'freelancerHomePage.html');
            input.value = '';
        }
    }
    if (input.value != '') {
        alert('Password Incorrect Sucker');
    }
}