const api = axios.create({
    baseURL: "http://localhost:3000"
})

document.getElementById("LoginForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.getElementById("Email").value
    const password = document.getElementById("Senha").value
    const corpo = {email, password}

    try{
        const response = await api.post("/login", corpo)
        console.log("Login Realizado com Sucesso! Token: ", response.data)
        alert("Usuario encontrado!")
    }catch(error){
        console.log("Erro: ", error)
        alert("Usuario não encontrado!")
    }
})
