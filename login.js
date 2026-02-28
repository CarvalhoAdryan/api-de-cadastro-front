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
        localStorage.setItem("token", response.data.token)
        alert("Usuario encontrado!")
        window.location.href = "bd.html"
    }catch(error){
        console.log("Erro: ", error)
        alert("Usuario não encontrado!")
    }
})

