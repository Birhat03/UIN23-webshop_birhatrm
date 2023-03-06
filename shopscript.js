let cart = []

const section = document.querySelector("#cartview")
let totalprice = 0 


function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    totalprice = totalprice + price
    document.getElementById("total").innerHTML = totalprice 
    console.log(cart)
    //Etter å ha lagt til et produkt; oppdater handlelistevisning:
    renderCart()
    //Så må vi oppdatere label
    document.querySelector("#cart .label").innerHTML = cart.length
    if(section.classList.contains("hidden")){
        toggleCart()
    }

}

function renderCart(){
    //Tom variabel for å bygge HTML til produkter
    let listHTML = ""
    //Gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map((prod, index) => listHTML += ` <li id="prod-${index}">
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice},-</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete" onclick="deleteProduct()">X</button>
</li>`

)
    
    //Bruke en selector for å finne riktig <ul>, og skrive in listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}

function deleteProduct (index){
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
        cart.splice(index, 1)
        renderCart()
    }, 700)
    
    
    document.getElementById("total").innerHTML = totalprice
    console.log(deleteProduct)
}

