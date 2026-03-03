const api = axios.create({
    baseURL: "http://localhost:3000"
})

const token = localStorage.getItem("token")

if(!token){
    window.location.href = "login.html"
}
 
async function ListarUsuarios(){
    try{
        const Listar = await api.get("/users",{
    headers: {
        Authorization : `Bearer ${token}`
    }
})

    const users = Listar.data
    console.log(users)

    const lista = document.getElementById("ListaUsuarios")
    users.forEach(user => {
        const linha = document.createElement("tr")
        linha.innerHTML = `
            <th>${user.id}</th>
            <th>${user.name}</th>
            <th>${user.email}</th>
        `
        lista.appendChild(linha)
    });
    }catch(error){
        console.log("Erro: ", error)
        alert("Erro ao buscar usuarios!")
    }
}


ListarUsuarios()