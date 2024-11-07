function Cadastrar() {
    const nome = document.querySelector("#nome");
    const apelido = document.getElementById("apelido");
    const nascimento = document.querySelector("#nascimento");
    const genero = document.getElementById("genero");
    const email = document.querySelector("#email");
    const senha = document.getElementById("senha");

    const nomeValor = nome.value;
    const apelidoValor = apelido.value;
    const nascimentoValor = nascimento.value;
    const generoValor = genero.value;
    const emailValor = email.value;
    const senhaValor = senha.value;


    if (nomeValor === "") {

        nome.classList.add("erro")
        return
    } else {
        nome.classList.remove("erro")
        nome.classList.remove("sucesso")
    }

    if (apelidoValor === "") {
        apelido.classList.add("erro")
        return
    }
}