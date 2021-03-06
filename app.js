// Form submit button element
const button = document.getElementById('button');

// Form group div element
const formGroups = document.querySelectorAll('.form-group');


// All the input fields in the form
const name = document.getElementById('name');
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const psd = document.getElementById('psd');
const retypePsd = document.getElementById('retype-psd');


// Event listener for button click
button.addEventListener('click', submitForm);

// Event invoked on form submit button click
function submitForm(e) {
    e.preventDefault();

    // Reg Expressions for Name, Username, Email, Password and Retype Password
    let nameRegExp = /^[A-Za-z]{3,100}$/;
    let unameRegExp = /^([A-Za-z_]{2,}\.?\w+){1,}$/;
    let emailRegExp =
        /^([\w\.]+)@([A-Za-z0-9]+).([a-z]+)(.[a-z]+)?$/;
    let psdRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,20}$/;
    
    // Check for name empty input
    if (name.value === '') {
        showError(name, 'Name cannot be empty');
    }
    else {
        
        // Check for length and pattern match
        if (name.value.length < 3) {
            showError(name,'Name should have at least 3 letters');
        }
        else if (!nameRegExp.test(name.value)) {
            showError(name,'Name can only have letters');
        }
        else {
            showSuccess(name);
        }
    }
    
    // Check for empty username input
    if (uname.value === '') {
        showError(uname, 'Username cannot be empty');
    }
    else {
        // Check for username length and pattern match

        if (uname.value.length < 3 || uname.value.length > 50) {
            showError(uname,'Username must have 3-50 characters');
        }
        else if(uname.value[0]==='.' || /\d/.test(uname.value[0])) {
            showError(uname,'Username can only begin with letters numbers or underscore');
        }
        else if(uname.value[uname.value.length-1]==='.') {
            showError(uname,'Username cannot end with a period');
        }
        else if (!unameRegExp.test(uname.value)) {
            showError(uname,'Username can only contain letters, digits, underscore or period');
        }
        else {
            showSuccess(uname);
        }
    }
    
    // Check for empty email input
    if (email.value === '') {
        showError(email, 'Email cannot be empty');
    }
    else {
        // Check for pattern match

        if (!emailRegExp.test(email.value)) {
            showError(email,'Invalid Email ID');
        }
        else {
            showSuccess(email);
        }
    }
    
    // Check for empty password input
    if (psd.value === '') {
        showError(psd, 'Password cannot be empty');
    }
    else {
        // Check for length and pattern match

        if (psd.value.length < 8 || psd.value.length > 20) {
            showError(psd,'Password must have 8-20 characters');
        }
        else if (!psdRegex.test(psd.value)) {
            showError(psd,'Password must have at least have one upper case and lower case character and one digit');
        }
        else {
            showSuccess(psd);
        }
    }
    
    // Check for empty retype password input
    if (retypePsd.value === '') {
        showError(retypePsd, 'Retype Password cannot be empty');
    }
    else {
        // Check for password and retype password match
        if (psd.value!= retypePsd.value) {
            showError(retypePsd, 'Retype Password should match Password');
        }
        else {
            showSuccess(retypePsd);
        }
    }

}


// Function to show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('show-success');
    formGroup.classList.add('show-error');
    const errorDiv = formGroup.lastElementChild;

    errorDiv.innerHTML = message;
}

// Function to remove error message and show success border
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add('show-success');
    const errorDiv = formGroup.lastElementChild;

    errorDiv.innerHTML = '';
}