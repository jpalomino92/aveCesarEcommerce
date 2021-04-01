/*we create the variables and the arrays*/
const product= [];
const price = [];
let cantProducts = "";
let cuotas= 0;
let subTotal =0;
let iva=0;
let total=0;
let perMonth = 0;
/*we create the functions*/
function monthlyPayments(months,total){
    return parseInt(total)/parseInt(months);
}

function sumSubTotals(prices){
    let i = 0;
    while(prices.length > i){
        subTotal = parseInt(subTotal) + parseInt(prices[i]);
        i++;
        console.log(prices[i])
    }
}
function calcIva(monto){
    iva = parseInt(monto) * 0.21;
}

function calcTotal(ST,IV){
    total = parseInt(ST) + parseInt(IV);
}

/* we ask for the first data for the arrays*/
let askProduct = parseInt(prompt("ingrese un producto:"));
let askPrice = parseInt(prompt ("ingrese el precio del producto:"));
product.push(askProduct)
price.push(parseInt(askPrice));

/*we start the first while, to add all the products*/
while (confirm("Desea continuar? ")){
    askProduct = parseInt(prompt("ingrese un producto:"));
    askPrice = parseInt(prompt ("ingrese el precio del producto:"));
    product.push(askProduct);
    price.push(parseInt(askPrice));
};
/*we make the calculations using the functions */
cantProducts = parseInt(product.length);
cuotas= parseInt(prompt("En cuantas cuotas desea pagar? (3,6,9,12,18)"));

sumSubTotals(price);
calcIva(subTotal);
calcTotal(subTotal,iva);

perMonth = monthlyPayments(cuotas,total);

/*we print all the values */
console.log("Vas a pagar en " + cuotas + " cuotas");
console.log("Vas a pagar por mes: $"+ perMonth);
console.log("Cantidad de productos: "+ cantProducts);
console.log("El subtotal es : $" + subTotal);
console.log("El valor con el IVA agregado es : $ "+ iva);
console.log("El total es de: $" + total);

