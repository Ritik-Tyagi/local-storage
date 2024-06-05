const user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];
// document.addEventListener("DOMContentLoaded",()=>{
//     const productGrid=document.getElementById("product-grid");
//     productGrid.innerHTML=""


//     producs.forEach((product){
//     const productcard=document.createElement("div")
//     productcard.classList.add("product-card");
    
//         productcard.innerHTML=`
//          <h3 class="name">user.name </h3>
//          <h3 class="username">user.username </h3>
//          <h3 class="email">user.email </h3>
//          <butten class="add-card-btn" onclick="addToCart(${product.id})">Add to Cart</butten>`
//          productGrid.appendChild(productcard)
//         });
// });


const containerDiv = document.getElementById("container")
const btn1=document.getElementById("btn1")
const butten=document.getElementsByClassName("btn4")
function display(productData) {
    productData.forEach((el) => {
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
    butten.textContent=`Add to Card`
    

    card.append(name, username, email,butten);
    containerDiv.append(card);
    card.querySelector('.btn4').addEventListener('click', ()=>{
        let cart=JSON.parse(localStorage.getItem("cart"))||[]
            cart.push(el)
            localStorage.setItem("cart",JSON.stringify(cart))
            alert("product added to cart")
    })
    });
}
display(user)

/*function addCardIntoContainer(el) {
    const card = document.createElement("div")
    const name = document.createElement("h3")
    const username = document.createElement("h3")
    const email = document.createElement("h3")
    const butten = document.createElement("button")
    butten.setAttribute("id" , "btn4")
    card.setAttribute("class", "card")
   
    
    name.textContent = ` Name:- ${el.name}`;
    username.textContent = `UserName:- ${el.username}`;
    email.textContent = `Email:-  ${el.email}`;
    butten.textContent=`Add to Card`
    

    card.append(name, username, email,butten);
    containerDiv.append(card);
    // card.querySelector("butten").addEventListener("click",()=>{
        //     let cart=JSON.parse(localStorage.getItem("cart"))||[]
        //     cart.push(el)
        //     localStorage.setItem("cart",JSON.stringify(cart))
        //     alert("product added to cart")
        // })
    } */
    // display(user);

/*btn4.addEventListener("click",() => {
    alert("product added to cart")
    
    // let cart=JSON.parse(localStorage.getItem("cart"))||[];
    // const product=product.find((p)=>p.id===productId)
    // const productIncart=cart.find((item) =>item.id===productId)
    // if(productIncart){
    //     productIncart.quantity++
    // }else{
    //     card.push({...product,quantity : 1})

    // }
    // localStorage.setItem("cart",JSON.stringify(cart))
})*/