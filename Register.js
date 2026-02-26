const api = axios.create({
    baseURL: "http://localhost:3000"
})

document.getElementById("RegistrarForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("Nome").value
    const email = document.getElementById("Email").value
    const password = document.getElementById("Senha").value
    const corpo = {name, email, password}
    try{
        const response = await api.post("/users", corpo)
        console.log("Usuario Cadastrado: ", response.data)
        alert("Usuario cadastrado com sucesso!")
    } catch(error){
        console.log("Erro:", error)
        alert("Erro ao cadastrar usuario!")
    }
})

