const api = axios.create({
    baseURL: "http://localhost:3000"
})

const token = localStorage.getItem("token")

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
        const item = document.createElement("li")
        item.textContent = `${user.name} - ${user.email}`
        lista.appendChild(item)
    });
    }catch(error){
        console.log("Erro: ", error)
        alert("Erro ao buscar usuarios!")
    }
}

ListarUsuarios()