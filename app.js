const button = document.getElementById('button');
const formGroups = document.querySelectorAll('.form-group');

const name = document.getElementById('name');
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const psd = document.getElementById('psd');
const retypePsd = document.getElementById('retype-psd');

const nameAlert = document.querySelector('.name-alert');
const unameAlert = document.querySelector('.uname-alert');
const emailAlert = document.querySelector('.email-alert');
const psdAlert = document.querySelector('.psd-alert');
const retypePsdAlert = document.querySelector('.retype-psd-alert');

button.addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();

    
        
    if (name.value === '') {
        showError(name, 'Name cannot be empty');
    }
    else {
        let nameRegExp = /[A-Za-z]{3,100}/;
        if (!nameRegExp.test(name.value)) {
            showError(name,'Name should have at least 3 letters');
        }
        else {
            showSuccess(name);
        }
    }
    
    if (uname.value === '') {
        showError(uname, 'Username cannot be empty');
    }
    else {
        let nameRegExp = /[([A-Za-z_])+([_.])*([A-Za-z_])+]{3,100}/;

    }
    
    if (email.value === '') {
        showError(email, 'Email cannot be empty');
    }
    
    if (psd.value === '') {
        showError(psd, 'Password cannot be empty');
    }
    
    if (retypePsd.value === '') {
        showError(retypePsd, 'Retype Password cannot be empty');
    }
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('show-error');
    const errorDiv = formGroup.lastElementChild;

    errorDiv.innerHTML = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add('show-success');
    const errorDiv = formGroup.lastElementChild;

    errorDiv.innerHTML = '';
}