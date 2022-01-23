// https://www.udemy.com/course/javascript-curso-completo/learn/lecture/9912760#overview
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

fields.forEach(function(item, index){
    if( item.name == "gender" ){
        if(item.checked) user[item.name] = item.value
    }else{
        user[item.name] = item.value;
    }
})
// console.log(user)
/** assim pega todos botoes
document.querySelectorAll("button").forEach(function(){
    this.addEventListener("click", function(){
        console.log("clicou!")
    })
})
*/
// pega id do formulario adiciona um escutador e faz preventDefault()
document.getElementById("form-user-create").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Submit disparado")
})