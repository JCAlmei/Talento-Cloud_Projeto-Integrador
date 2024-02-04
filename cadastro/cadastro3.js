// ----- DIV DATA DE NASCIMENTO ----- //

var novaDiv = document.createElement('div');
// Adicionar conteúdo à nova div
novaDiv.innerHTML = `
<label for="date">Data de Nascimento:</label>
<input class="input_1" type="date" name="date" id="date">
<p id="date-helper" class="helper-text">Mensagem de ajuda</p>
<small>Error Message</small>
`
novaDiv.className = "form-control";
// console.log(novaDiv);

// const divs = document.querySelectorAll('.form-control');
// Iterar sobre cada elemento e imprimir sua classe no console
// divs.forEach(div => {
//   console.log(div.className);
// });

// Seleciona a div após a qual você quer inserir a nova div
var divTelefone = document.getElementById('tel').parentNode;

// Inserir a nova div após a div do telefone
divTelefone.parentNode.insertBefore(novaDiv, divTelefone.nextSibling);


// ------ DIV LINK ------ //
let link = document.createElement('div');
link.innerHTML = `
<div>
<a href="login2.html"><small>Já possui cadastro?</small></a>
</div>
`

let passwordTwo = document.getElementById('password-two').parentNode;

passwordTwo.parentNode.insertBefore(link, passwordTwo.nextSibling);


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
const senha = document.getElementById('password')
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

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)

    }

    if(telValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(tel, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(tel)
    }

    if(dateValue !== '') {
        // mostrar erro
        // add classe
        setErrorFor(date, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(date)
    }

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

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não estão iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
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


// function isValidDate(dateString) {
        
//     let dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
//     return dateRegex.test(dateString);

// }


// ------ VALIDAÇÃO DE INPUT ------ //

// ------ Campo Nome ------ //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let classe = document.getElementById("required-popup");

usernameLabel.innerText = "Nome*"

mostrarPopup(usernameInput, usernameLabel)

usernameInput.addEventListener("blur", function(e){

    let valorNome = e.target.value

    if (valorNome.length < 3) {

        usernameHelper.innerText = "O nome precisa ter 3 ou mais caracteres"
        // console.log(usernameHelper)
        
        estilizarInputIncorreto(usernameInput, usernameHelper)

        inputsCorretos.userNameInput = false
        console.log(inputsCorretos.userNameInput)

    } else {

        estilizarInputCorreto(usernameInput, usernameHelper)

        inputsCorretos.userNameInput = true
        console.log(inputsCorretos.userNameInput)
    }
})


// ------ Campo Telefone ------ //
let telInput = document.getElementById("tel");
let telLabel = document.querySelector('label[for="tel"]');
let telHelper = document.getElementById("tel-helper");

telLabel.innerText = "Telefone*"

mostrarPopup(telInput, telLabel)

telInput.addEventListener("blur", function(e){
    
    let valorTel = e.target.value

    if (valorTel.length < 11 ) {

        telHelper.innerText = "O número deve conter 11 dígitos sem caracteres especiais"
        
        estilizarInputIncorreto(telInput, telHelper)

        inputsCorretos.telInput = false
        console.log(inputsCorretos.telInput)

    } else {

        estilizarInputCorreto(telInput, telHelper)

        inputsCorretos.telInput = true
        console.log(inputsCorretos.telInput)

    }
})


let dateInput = document.getElementById("date");
let dateLabel = document.querySelector('label[for="date"]');
let dateHelper = document.getElementById("date-helper");

mostrarPopup(dateInput, dateLabel)

dateLabel.innerText = "*Data de Nascimento"

dateInput.addEventListener("blur", function(e){

    let valorDate = e.target.value;

    if (valorDate) {

        let dataNascimento = new Date(valorDate);
        
        let dataAtual = new Date();

        let diferencaEmMilissegundos = dataAtual - dataNascimento;

        let idadeEmAnos = diferencaEmMilissegundos / (365 * 24 * 60 * 60 * 1000);

        if (idadeEmAnos >= 18) {

            // console.log("Maior de idade");

            estilizarInputCorreto(dateInput, dateHelper)

            inputsCorretos.dateInput = true
            console.log(inputsCorretos.dateInput)

        } else {

            // console.log("Menor de idade");

            dateHelper.innerText = "O usuário deve ser maior de 18 anos"

            estilizarInputIncorreto(dateInput, dateHelper)

            inputsCorretos.dateInput = false
            console.log(inputsCorretos.dateInput)

        }
    } else {

        dateHelper.innerText = "Informe a data de nascimento"

        estilizarInputIncorreto(dateInput, dateHelper)

    }

        

    
})


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


// ------ Campo Confirma Senha ------ //
let confirmPasswordInput = document.getElementById("password-two");
let confirmPasswordLabel = document.querySelector('label[for="password-two"]');
let confirmPasswordHelper = document.getElementById("passwordTwo-helper");

confirmPasswordLabel.innerText = 'Confirme sua senha*'

mostrarPopup(confirmPasswordInput, confirmPasswordLabel)

confirmPasswordInput.addEventListener("blur", function(e){

    let valorconfirmPassword = e.target.value;
    // console.log(valorconfirmPassword)

    if (valorconfirmPassword == passwordInput.value) {

        estilizarInputCorreto(confirmPasswordInput, confirmPasswordHelper);

        inputsCorretos.confirmPasswordInput = true
        console.log(inputsCorretos.confirmPasswordInput)

    } else {

        confirmPasswordHelper.innerText = "As senhas devem ser iguais";

        estilizarInputIncorreto(confirmPasswordInput, confirmPasswordHelper);
        
        inputsCorretos.confirmPasswordInput = false
        console.log(inputsCorretos.confirmPasswordInput)

    }
});



// ------ ENVIAR FORMULÁRIO PARA O NAVEGADOR ------ //

let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
    userNameInput: false,
    telInput: false,
    dateInput: false,
    emailInput: false,
    passwordInput: false,
    confirmPasswordInput: false
}

console.log(btnSubmit)
console.log(inputsCorretos.userNameInput)
console.log(inputsCorretos.telInput)
console.log(inputsCorretos.dateInput)
console.log(inputsCorretos.emailInput)
console.log(inputsCorretos.passwordInput)
console.log(inputsCorretos.confirmPasswordInput)

btnSubmit.addEventListener("click", (e) => {

    if (inputsCorretos.userNameInput == false ||
        inputsCorretos.telInput == false ||
        inputsCorretos.dateInput == false || 
        inputsCorretos.emailInput == false || 
        inputsCorretos.passwordInput == false || 
        inputsCorretos.confirmPasswordInput == false){
        e.preventDefault()
        alert("Os campos obrigatórios devem ser preenchidos corretamente")
    } else {
        
        alert("Formulário enviado com sucesso")
    }
})


