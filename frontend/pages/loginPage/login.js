const formularioLogin = document.getElementById('formLogin');

formularioLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    try{
        const res = await fetch ('http://localhost:3002/guyra/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        if (res.ok){
            alert("Usuário autenticado com sucesso!");
            window.location.href = 'dataPage.html';
        } else {
            alert("Erro ao autenticar o usuário!");
        }
    } catch (e){
        alert("Falha ao criar o usuário!");
    }
})