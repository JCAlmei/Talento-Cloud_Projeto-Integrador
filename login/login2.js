// ------ DIV LINK ------ //
let link = document.createElement('div');
link.innerHTML = `
<div>
<a href="cadastro3.html"><small>Ainda não possui cadastro?</small></a>
</div>
`

let senha = document.getElementById('password').parentNode;

senha.parentNode.insertBefore(link, senha.nextSibling);


// ----- MOSTRAR POPUP ---- //

function mostrarPopup(input, label) {

    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })
    
    input.addEventListener("blur", function() {
        label.classList.remove("required-popup")
    })
    
}


// ----- VALIDAÇÃO DE FORMULÁRIO ----- //

const form = document.getElementById('form')
const username = document.getElementById('username')
const tel = document.getElementById('tel')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

// console.log (tel)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})


// ----- CHECAGEM DE INPUT ----- //

function checkInputs() {

    const usernameValue = username.value.trim()
    const telValue = tel.value.trim()
    const dateValue = date.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = senha.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    // console.log (telValue)

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(senha, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(senha, 'Senha deve ter mais que 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(senha)
    }

}


// ----- ESTILIZAÇÃO DE INPUT ----- //

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = '*preencha esse campo'

    formControl.className = 'form-control error'


}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

function estilizarInputCorreto(input, helper) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    helper.classList.add("visible");
    helper.classList.remove("helper-text")
    input.classList.add("error");
    input.classList.remove("correct");
}


// ------ VALIDAÇÃO DE INPUT ------ //

// ------ Campo Email ------ //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"');
let emailHelper = document.getElementById("email-helper");

emailLabel.innerText = 'Email*'

mostrarPopup(emailInput, emailLabel)

emailInput.addEventListener("blur", function(e){

    let valor = e.target.value

    if (valor.includes("@" && ".com")) {

        estilizarInputCorreto(emailInput, emailHelper)

        inputsCorretos.emailInput = true
        console.log(inputsCorretos.emailInput)

    } else {

        emailHelper.innerText = "O email deve conter '@' e '.com'"
        
        estilizarInputIncorreto(emailInput, emailHelper)

        inputsCorretos.emailInput = false
        console.log(inputsCorretos.emailInput)
    }

})


// ------ Campo Senha ------ //
let passwordInput = document.getElementById("password");
let passwordLabel = document.querySelector('label[for="password"]');
let passwordHelper = document.getElementById("password-helper");

passwordLabel.innerText = 'Senha*'

mostrarPopup(passwordInput, passwordLabel)

passwordInput.addEventListener("blur", function(e){
    let valorSenha = e.target.value;

    let regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;

    if (!regexSenha.test(valorSenha)) {
    
    // if (valorSenha == "") {

        passwordHelper.innerText = "A senha deve ter mais de 8 caracteres, pelo menos 1 letra maiúscula, 1 número e 1 caractere especial";
        // console.log(senhaHelper)

        estilizarInputIncorreto(passwordInput, passwordHelper);

        inputsCorretos.passwordInput = false
        console.log(inputsCorretos.passwordInput)

    } else {

        estilizarInputCorreto(passwordInput, passwordHelper);

        inputsCorretos.passwordInput = true
        console.log(inputsCorretos.passwordInput)
    }
});



// ------ ENVIAR FORMULÁRIO PARA O NAVEGADOR ------ //

let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
    emailInput: false,
    passwordInput: false,
}

console.log(btnSubmit)
console.log(inputsCorretos.emailInput)
console.log(inputsCorretos.passwordInput)

btnSubmit.addEventListener("click", (e) => {

    if (inputsCorretos.emailInput == false || 
        inputsCorretos.passwordInput == false){
        e.preventDefault()
        alert("Os campos obrigatórios devem ser preenchidos corretamente")
    } else {
        
        alert("Formulário enviado com sucesso")
    }
})


