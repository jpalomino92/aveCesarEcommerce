let productArray = [];
let pName = "";
let pPrice = 0;


class Products{
    constructor(pName,price){
        this.name = pName;
        this.price = price;
    }

}


const button = document.getElementById('buttonAdd');
let quantity = 0

button.addEventListener('click',function(){
    quantity = quantity + 1;
    document.getElementById("cart-items").innerHTML= quantity;
    pName = document.getElementById('inputName');
    pPrice = document.getElementById('inputPrice');
    productArray.push(new Products(pName.value,pPrice.value));
    localStorage.setItem("products",JSON.stringify(productArray));

})

const buttonClear = document.getElementById('buttonClear');

buttonClear.addEventListener('click',function(){
    document.getElementById("cart-items").innerHTML= 0;
    quantity= 0;


})

const buttonShow = document.getElementById('buttonShow');

buttonShow.addEventListener('click',function(){
    for (const producto of productArray){
        let conteiner = document.createElement("div");
        conteiner.innerHTML= `
        <h3> Producto: ${producto.name}</h3>
        <b>$ ${producto.price}</b>`;
        document.getElementById("productList").appendChild(conteiner);
    }
    productArray = [];

})
const buttonEmpty= document.getElementById('buttonEmpty');

buttonEmpty.addEventListener('click',function(){
    var list = document.getElementById("productList");
    while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
    };
    localStorage.clear();

})



