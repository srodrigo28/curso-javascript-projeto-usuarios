// https://www.udemy.com/course/javascript-curso-completo/learn/lecture/9912760#overview
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

// pega id do formulario adiciona um escutador e faz preventDefault()
document.getElementById("form-user-create").addEventListener("submit", function(e){
    e.preventDefault();

    fields.forEach(function(item, index){
        if( item.name == "gender" ){
            if(item.checked) user[item.name] = item.value
        }else{
            user[item.name] = item.value;
        }
    });
    console.log(user)
});