let cart=JSON.parse(localStorage.getItem("cart"))||[];

let cont=document.getElementById("cont")
if (cart.length===0){
    cont.innerHTML=`<p>card is empty</p>`;
    
}
function display(productData){
    productData.forEach((el,i) => {
        // addCardIntoContainer(el)

    const card = document.createElement("div")
    const name = document.createElement("h3")
    const username = document.createElement("h3")
    const email = document.createElement("h3")
    const butten = document.createElement("button")
    butten.setAttribute("class" , "btn4")
    card.setAttribute("class", "card")
   
    
    name.textContent = ` Name:- ${el.name}`;
    username.textContent = `UserName:- ${el.username}`;
    email.textContent = `Email:-  ${el.email}`;
    butten.textContent=`Remove`
    

    card.append(name, username, email,butten);
    cont.append(card);
    card.querySelector('.btn4').addEventListener('click', ()=>{

        
        productData.splice(i,1)
        localStorage.setItem("cart",JSON.stringify(cart))
        cont.innerHTML=null;
        display(cart)
        location.reload()
        
    })
})
}
    display(cart)
        
   
