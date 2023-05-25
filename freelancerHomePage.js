let displayName = document.getElementById('displayName');
    let displayFullName = document.getElementById('displayFullName');
    let displayUserType = document.getElementById('displayUserType');
    let clientDetails = [];
    let freelancerDetails = [];
    clientDetails = JSON.parse(localStorage.getItem('Client Details'));
    freelancerDetails = JSON.parse(localStorage.getItem('Freelancer Details'));
    Jobs = JSON.parse(localStorage.getItem('Jobs'));
    let index = localStorage.getItem('Index Number');
    let usertype = localStorage.getItem('User type');
    let displayCard = document.getElementById('card')
    let name;
    let lname;
        if (usertype == 'freelancer') {
            name = freelancerDetails[index].firstName;
            lname = freelancerDetails[index].lastName;
        }
    displayName.innerHTML = `Hey <strong> ${name} </strong>. Ready <br> for your next big <br> opportunity?`;
    displayFullName.innerHTML = `${name} ${lname}`;
    displayUserType.innerHTML = `${usertype}`;
    function dropdown(params) {
        displayCard.style.display = 'flex';
    }
    function stopdropdown(params) {
        params.style.display = 'none';
    }
    function closeAccount(params) {
        freelancerDetails.splice();
    }