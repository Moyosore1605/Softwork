let displayName = document.getElementById('displayName');
    let displayFullName = document.getElementById('displayFullName');
    let displayUserType = document.getElementById('displayUserType');
    let clientDetails = [];
    let freelancerDetails = [];
    clientDetails = JSON.parse(localStorage.getItem('Client Details'));
    freelancerDetails = JSON.parse(localStorage.getItem('Freelancer Details'));
    let index = localStorage.getItem('Index Number');
    let usertype = localStorage.getItem('User type');
    let displayCard = document.getElementById('card')
    let work = document.getElementById('job');
    let savework;
    let name;
    let lname;
    if (localStorage.getItem('Jobs')) {
        
    }
    if (usertype == 'client') {
            name = clientDetails[index].firstName;
            lname = clientDetails[index].lastName
        }
    displayName.innerHTML = `Hey <strong> ${name} </strong>. Post <br> jobs you need done with <br> competence.`;
    displayFullName.innerHTML = `${name} ${lname}`;
    displayUserType.innerHTML = `${usertype}`;
    function dropdown(params) {
        displayCard.style.display = 'flex';
    }
    function stopdropdown(params) {
        params.style.display = 'none';
    }
    function closeAccount(params) {
        clientDetails.splice()
    }
    function start(params) {
        document.getElementById('postJob').style.display = 'block';
    }
    function postJob(params) {
        if (work.value != '') {
            savework = work.value;
            localStorage.setItem('Jobs', JSON.stringify(savework));
            alert('Job Posted successfully');
        }
        else if(work.value = ''){
            alert('Please fill the field boss');
        }
    }