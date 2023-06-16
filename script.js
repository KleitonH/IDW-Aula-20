function alo(){
    alert('Alo!');
}

function olaNome(nome){
    alert('Olá ' + nome + '. Bem vindo ao curso') //Concatenação de strings
}

function saudacao() {
    const nome = document.getElementById('nome').value
    if(nome != ''){
        alert (`Olá ${nome}. Bem vindo ao curso`) //Interpulação de strings
    }
    else{
        alert ('Informe seu nome')
    }

}

function mouseCima(){
    alert('O mouse está em cima')
}
function mouseSaiu(){
    alert('O mouse saiu')
}
function TextoMudou(){
    alert('O texto foi alterado.')
}

function emFoco(){
    const user = document.getElementById('user')
    user.style.border = '5px solid green'
    user.style.backgroundColor = 'gray'
}
function semFoco(){
    const user = document.getElementById('user')
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white'
}