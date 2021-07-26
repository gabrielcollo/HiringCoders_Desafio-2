document.getElementById("bota").onclick = function() {products_data = get_product0_data()};    
function get_product0_data(){
    let product_name = document.querySelectorAll(".nome-produto");
    let product_price = document.querySelectorAll(".preco-produto");
    let data_temp = {Nome: product_name[0].innerHTML, Preco: product_price[0].innerHTML}
    localStorage.setItem("products_data", JSON.stringify(data_temp));
}

document.getElementById("colete").onclick = function() {products_data = get_product1_data()};    
function get_product1_data(){
    let product_name = document.querySelectorAll(".nome-produto");
    let product_price = document.querySelectorAll(".preco-produto");
    let data_temp = {Nome: product_name[1].innerHTML, Preco: product_price[1].innerHTML}
    localStorage.setItem("products_data", JSON.stringify(data_temp));
}

document.getElementById("capacete").onclick = function() {products_data = get_product2_data()};    
function get_product2_data(){
    let product_name = document.querySelectorAll(".nome-produto");
    let product_price = document.querySelectorAll(".preco-produto");
    let data_temp = {Nome: product_name[2].innerHTML, Preco: product_price[2].innerHTML}
    localStorage.setItem("products_data", JSON.stringify(data_temp));
}