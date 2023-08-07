const submitBtn = document.querySelector('.form-submit');
const passContainer = document.querySelector('.pass-container');
const passField = document.querySelector('#form-pass');
const passConf = document.querySelector('#form-conf-pass');
const signupForm = document.querySelector('#sign-up');

const passMsg = document.createElement('div');

// This is a soup. I should've separated this code logically. But instead
// it doesn't just confirms if pass is correct.
// It changes style of other elements. Validates form and controls
// submit function of a form.
// Break down code into smaller manageable pieces.

function checkConfPass() { 
    if (passField.value !== passConf.value) {
        passMsg.style.color = 'red';
        passMsg.textContent = '* Passwords do not match';
        passContainer.appendChild(passMsg);

        passField.classList.add('pass-error');
        passConf.classList.add('pass-error');
        
    } else if (passField.value && passConf.value) {
        passMsg.style.color = 'lightgreen';
        passMsg.textContent = 'Passwords Match ✓';
        passContainer.appendChild(passMsg);

        passField.classList.remove('pass-error');
        passConf.classList.remove('pass-error');
        
        if(signupForm.reportValidity()) signupForm.requestSubmit();
    } else {
        signupForm.reportValidity();
    }
}

submitBtn.addEventListener('click', checkConfPass);