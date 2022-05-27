const pwd = document.querySelector('#pwd');
const c_pwd = document.querySelector('#confirm-pwd');

function validateForm() {
    if (pwd.value !== c_pwd.value) {
        pwd.classList.add('error');
        c_pwd.classList.add('error');
        return false;
    }
    return true;
}

