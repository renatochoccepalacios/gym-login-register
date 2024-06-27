const password = document.querySelector('#password-login');
const verPassword = document.querySelector("#ojo-visible");

verPassword.addEventListener("click", () => {
    // if (password.getAttribute('type') == 'password') {
    //     password.setAttribute('type', 'text')
    // }else {
    //     password.setAttribute('type', 'password')
    // }

    const typePassword = password.getAttribute("type") === 'password' ? 'text' : 'password';
    password.setAttribute("type", typePassword);

});
// console.log(password);