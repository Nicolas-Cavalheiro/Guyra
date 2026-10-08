const formulario = document.getElementById('formCadastro');

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try{
    const res = await fetch ('http://localhost:3002/guyra/cadastro', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ nome, telefone, email, senha })
    });
    if (res.ok){
        alert("Usuário cadastrado com sucesso!");
        window.location.href = 'login.html';
    } else {
        alert("Erro ao cadastrar o usuário!");
    } 

    } catch (e){
        alert("Falha ao criar o usuário!");
    }
})