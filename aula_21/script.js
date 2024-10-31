

function pegarDados() {

    const nome = document.querySelector("#nome")
    const sobrenome = document.querySelector("#sobrenome")
    const idade = document.querySelector("#idade")
    const resultado = document.querySelector(".resultado")
    const erro = document.querySelector(".erro")

    const nomeValor = nome.value
    const sobrenomeValor = sobrenome.value
    const idadeValor = idade.value


    if (nomeValor === "") {

        window.alert("O campo não pode estar vazio!")
        erro.textContent = "O campo não pode ficar vazio"
        nome.style.borderColor = "red"
        return
    }


    if (idadeValor === "") {
        document.querySelector(".erro-idade").textContent = "Campo obrigátorio!"
        idade.style.borderColor = "red"
        return;

    }
    if (idadeValor < 0) {
        document.querySelector(".erro-idade").textContent = "Não pode ser menor que 0";
        idade.style.borderColor = "red"
        return
    }

    if(sobrenomeValor === ""){
        window.alert("O campo não pode estar vazio!")
        document.querySelector(".erro-sobrenome").textContent = "O campo não pode ficar vazio!";
        sobrenome.style.borderColor = "red"
        return
    }

    resultado.innerHTML = `<p>Nome: = ${nomeValor}</p>
                            <p>Sobrenome: = ${sobrenomeValor}</p>
                            <p>Idade: = ${idadeValor}</p>`;
}