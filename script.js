const usuarioCorreto = {
    usuario: "aluno",
    senha: "1234"
};

function realizarLogin() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let resultado = document.getElementById("resultado");

    if (usuario === "" || senha === "") {

        resultado.textContent = "Preencha todos os campos.";
        resultado.style.color = "red";

    } else if (
        usuario === usuarioCorreto.usuario &&
        senha === usuarioCorreto.senha
    ) {

        resultado.textContent = "Acesso permitido! Bem-vindo.";
        resultado.style.color = "green";

    } else {

        resultado.textContent = "Usuário ou senha incorretos.";
        resultado.style.color = "red";
    }
}