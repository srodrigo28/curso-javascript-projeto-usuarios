// https://www.udemy.com/course/javascript-curso-completo/learn/lecture/9912760#overview
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {}

function addLine(dataUser){

    var tr = document.createElement("tr")

    tr.innerHTML = `
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth    }</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
    `

    document.getElementById("table-users").appendChild(tr)

}

// pega id do formulario adiciona um escutador e faz preventDefault()
document.getElementById("form-user-create").addEventListener("submit", function(e){
    
    e.preventDefault();

    fields.forEach(function(item, index){

        if( item.name == "gender" ){

            if(item.checked){
                user[item.name] = item.value
            }

        } else {
            user[item.name] = item.value;
        }
    });
    addLine(user);
});