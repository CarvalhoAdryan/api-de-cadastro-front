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
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><button class="btn btn-danger btn-sm" onclick="DeleteUser(${user.id})">Apagar</td>
            <td><button class="btn btn-warning btn-sm">Update</td>
        `
        lista.appendChild(linha)
    });
    }catch(error){
        console.log("Erro: ", error)
        alert("Erro ao buscar usuarios!")
    }
}

async function DeleteUser(id){
    const confirmar = confirm("Tem certeza que deseja apagar?")
    if(!confirmar) return
    const apagar = await api.delete(`/users/${id}`)
}

ListarUsuarios()