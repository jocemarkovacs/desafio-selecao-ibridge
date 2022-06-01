const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const empresa = document.getElementById('empresa')

//quando apertar o submit não recarregar a pagina
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs(){
    const nomeValor = nome.value
    const emailValor = email.value
    const telefoneValor = telefone.value
    const empresaValor = empresa.value    
    
    //Validando nome
    if(nomeValor === ''){
        setErrorFor(nome, "O campo nome é obrigatório!")
    } else {
        setSuccessFor(nome);
    }

    //validando email
    if(emailValor === ''){
        setErrorFor(email, "Por favor preencha seu e-mail");
    } else if(!checkEmail(emailValor)) {
        setErrorFor(email, "E-mail inválido!");
    } else {
        setSuccessFor(email);
    }
    
    //validando telefone
    if((telefoneValor === '') || (telefoneValor.length < 10)){
        setErrorFor(telefone, "Por favor preencha seu telefone");
    } else {
        setSuccessFor(telefone)
    }

    //Validando empresa
    if((empresaValor === '') || (empresaValor.length < 4)){
        setErrorFor(empresa, "Por favor informe sua empresa")
    } else {
        setSuccessFor(empresa);
    }
}

function setErrorFor(input, mensagem){
    const divForm = input.parentElement;
    const small = divForm.querySelector('small');
    
    //adicionar a mensagem de erro
    small.innerText = mensagem;
    
    //adicionar a classe de erro
    divForm.className = "div-form error"; 
}

function setSuccessFor(input, menssagem){
    const divForm = input.parentElement;

    divForm.className = "div-form success"; 
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
