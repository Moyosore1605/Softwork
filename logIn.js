let input = document.getElementById('emailInput');
let link = document.getElementById('link');
let clientDetails = [];
let freelancerDetails = [];
clientDetails = JSON.parse(localStorage.getItem('Client Details'));
console.log(clientDetails);
freelancerDetails = JSON.parse(localStorage.getItem('Freelancer Details'));
console.log(freelancerDetails);
let usertype;

function checkMail() {
    for (let i = 0; i < clientDetails.length; i++) {
        if (input.value == clientDetails[i].email) {
            link.setAttribute('href', 'password.html');
            input.value = '';
            usertype = 'client';
            localStorage.setItem('User type', usertype);
            localStorage.setItem('Index Number', i);
        }
    }
    for (let i = 0; i < freelancerDetails.length; i++) {
        if (input.value == freelancerDetails[i].email) {
            link.setAttribute('href','password.html');
            input.value = '';
            usertype = 'freelancer';
            localStorage.setItem('User type', usertype);
            localStorage.setItem('Index Number', i);
        }
    }
    if (input.value != '') {
        alert('Mail not found boss');
    }
    
}