const signupForm = document.querySelector('#sign-up');
const submitBtn = document.querySelector('.form-submit');

const passContainer = document.querySelector('.pass-container');
const passField = document.querySelector('#form-pass');
const passConf = document.querySelector('#form-conf-pass');

const passMsg = document.createElement('div');

// This is a soup. I should've separated this code logically. But instead
// it doesn't just confirms if pass is correct.
// It changes style of other elements, validates form and controls
// submit function of a form.
// Break down code into smaller manageable pieces.

//UPD: Much better I guess?

function checkPass() {
    if (passField.value !== passConf.value) {
        passMsg.style.color = 'red';
        passMsg.textContent = '* Passwords do not match';
        passContainer.appendChild(passMsg);

        passField.classList.remove('pass-correct');
        passConf.classList.remove('pass-correct');

        passField.classList.add('pass-error');
        passConf.classList.add('pass-error');

        return false;
    } else if (passField.value === passConf.value && passField.value && passConf.value) {
        passMsg.style.color = 'lightgreen';
        passMsg.textContent = 'Passwords match ✓';
        passContainer.appendChild(passMsg);

        passField.classList.remove('pass-error');
        passConf.classList.remove('pass-error');

        passField.classList.add('pass-correct');
        passConf.classList.add('pass-correct');

        return true;
    }
}

function submitForm() {
    if (signupForm.reportValidity() && checkPass()) 
        signupForm.requestSubmit();
}

passField.addEventListener('input', checkPass);
passConf.addEventListener('input', checkPass);
submitBtn.addEventListener('click', submitForm);