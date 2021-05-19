const button = document.getElementById('button');
const formGroups = document.querySelectorAll('.form-group');

const name = document.getElementById('name').value;
const uname = document.getElementById('uname').value;
const email = document.getElementById('email').value;
const psd = document.getElementById('psd').value;
const retypePsd = document.getElementById('retype-psd').value;

const nameAlert = document.querySelector('.name-alert');
const unameAlert = document.querySelector('.uname-alert');
const emailAlert = document.querySelector('.email-alert');
const psdAlert = document.querySelector('.psd-alert');
const retypePsdAlert = document.querySelector('.retype-psd-alert');

button.addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();

    if (name === '' || uname === '' || email === '' || psd === '' || retypePsd === '') {
        formGroups.forEach((item) => {
            item.classList.add('show-error');
        });
        
        nameAlert.innerHTML = 'Name cannot be empty';
        unameAlert.innerHTML = 'Username cannot be empty';
        emailAlert.innerHTML = 'Email ID cannot be empty';
        psdAlert.innerHTML = 'Password cannot be empty';
        retypePsdAlert.innerHTML = 'Password Retyped cannot be empty';
    }
    else {
    }
}