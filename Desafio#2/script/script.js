//Formulário
document.getElementById("btn-register").onclick = function() {user_data = get_user_data()};
function get_user_data(){
  let user_name = document.querySelector("#name");
  let user_email = document.querySelector("#email");
  let user_phone = document.querySelector("#telefone");
  let user_address = document.querySelector("#endereco");
  let data_temp = {Nome: user_name.value, Email: user_email.value, Telefone: user_phone.value, Endereco: user_address.value}
  localStorage.setItem("user_data", JSON.stringify(data_temp));
}
// --------------------------------------------------------------------------------
