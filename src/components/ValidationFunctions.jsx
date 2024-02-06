export function validateName(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`);
    var reg = /^[a-z A-Z]+$/;

    if (!value.trim()) {
        element.textContent = `${error} is Required`;
    } else if (!reg.test(value)) {
        element.textContent = `Please Enter a Valid ${error}`;
    } else {
        element.textContent = "";
    }
}

export function validateAddress(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`)
    if (!value.trim()) {
        element.textContent = `${error} is Required` 
    }
    else {
        element.textContent = "";
    }
}

export function validatePostCode(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`)
    if (!value.trim()) {
        element.textContent = `${error} is Required` 
    }
    else if (isNaN(value)) {
        element.textContent = `Please Enter a Valid ${error}`
    }
    else {
        element.textContent = "";
    }
}

export function validateEmail(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.trim()) {
        element.textContent = `${error} is Required` 
    }
    else if (!reg.test(value)) {
        element.textContent = `Please Enter a Valid ${error}`
    }
    else {
        element.textContent = "";
    }
}

export function validateTelephone(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`)
    if (!value.trim()) {
        element.textContent = `${error} is Required` 
    }
    else if (isNaN(value) || value.length < 10) {
        element.textContent = `Please Enter a Valid ${error}`
    }
    else {
        element.textContent = "";
    }
}


export function validatePass(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`)
    if (value.length < 8) {
        element.textContent = `${error} should contain atleast 8 characters`
    }
    else {
        element.textContent = ""
    }
}

export function validateCpass(value, id, error) {
    const element = document.querySelector(`#${id} + .error_1`)
    const passwordValue = document.getElementById("pass").value;

    if (value.length < 8) {
        element.textContent = `${error} should contain atleast 8 characters`
    } else if (value !== passwordValue) {
        element.textContent = `${error} do not match`
    } else {
        element.textContent = "";
    }
}

export function handleValidations() {
    validateName(document.getElementById('firstName').value, 'firstName', 'First Name');
    validateName(document.getElementById('billingfirstName').value, 'billingfirstName', 'First Name');
    validateName(document.getElementById('lastName').value, 'lastName', 'Last Name');
    validateName(document.getElementById('billingfirstName').value, 'billinglastName', 'Last Name');
    validateAddress(document.getElementById('address').value, 'address', 'Address');
    validateName(document.getElementById('city').value, 'city', 'City/Town');
    validatePostCode(document.getElementById('postcode').value, 'postcode', 'Zip Code');
    validateEmail(document.getElementById('email').value, 'email', 'Email Address');
    validateTelephone(document.getElementById('telephone').value, 'telephone', 'Telephone');
    validateTelephone(document.getElementById('billingtelephone').value, 'billingtelephone', 'Telephone');
    validateAddress(document.getElementById('selectCity').value, 'selectCity', 'City');
    validatePass(document.getElementById('pass').value, 'pass', 'Password');
    validateCpass(document.getElementById('cpass').value, 'cpass','Confirm Password');
}
