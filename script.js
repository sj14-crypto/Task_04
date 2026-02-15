let cart=[];
let wishlist=[];

const products=[

{name:"Red Dress",price:120,category:"dress",rating:5,img:"Red Dress.png"},
{name:"Black Heels",price:90,category:"shoes",rating:4,img:"Black Heels.png"},
{name:"Luxury Handbag",price:250,category:"bag",rating:5,img:"Luxury Handbag.png"},
{name:"Summer Dress",price:100,category:"dress",rating:4,img:"Summer Dress.png"},
{name:"Pink Heels",price:110,category:"shoes",rating:5,img:"Pink Heels.png"},
{name:"Mini Bag",price:140,category:"bag",rating:4,img:"Mini Bag.png"},
{name:"Elegant Dress",price:180,category:"dress",rating:5,img:"Elegant Dress.png"},
{name:"Fashion Sneakers",price:130,category:"shoes",rating:4,img:"fashion sneakers.png"},
{name:"Classic Bag",price:210,category:"bag",rating:5,img:"Classic Bag.png"},
{name:"Floral Dress",price:95,category:"dress",rating:4,img:"Floral Dress.png"},
{name:"White Heels",price:85,category:"shoes",rating:4,img:"White Heels.png"},
{name:"Luxury Tote",price:300,category:"bag",rating:5,img:"Luxury Tote.png"},
{name:"Evening Dress",price:220,category:"dress",rating:5,img:"Evening Dress.png"},
{name:"Casual Shoes",price:70,category:"shoes",rating:3,img:"Casual Shoes.png"},
{name:"Stylish Bag",price:160,category:"bag",rating:4,img:"Stylish Bag.png"}

];

const container=document.getElementById("products");

const searchInput=document.getElementById("search");
const categorySelect=document.getElementById("category");
const sortSelect=document.getElementById("sort");

function stars(n){return "⭐".repeat(n)}

function display(data){

container.innerHTML=data.map((p,i)=>`

<div class="card">

<img src="${p.img}">

<div class="info">

<h3>${p.name}</h3>

<p>${stars(p.rating)}</p>

<p class="price">$${p.price}</p>

<button onclick="addCart(${i})">Add to Cart</button>

<button class="wishlistBtn" onclick="addWishlist(${i})">❤️</button>

</div>

</div>

`).join("");

}

function showNotification(msg){

const n=document.getElementById("notification");

n.innerText=msg;
n.style.opacity="1";

setTimeout(()=>{n.style.opacity="0"},2000);

}

function addCart(index){

cart.push(products[index]);

document.getElementById("cartCount").innerText=cart.length;

showNotification("✅ Added to your cart");

updateCartUI();

}

function updateCartUI(){

document.getElementById("cartItems").innerHTML=cart.map((item,i)=>`

<div class="cartItem">

${item.name} - $${item.price}

<button onclick="removeCart(${i})">Remove</button>

</div>

`).join("");

}

function removeCart(i){

cart.splice(i,1);

updateCartUI();

document.getElementById("cartCount").innerText=cart.length;

}

function toggleCart(){

document.getElementById("cartPopup").classList.toggle("active");

}

function addWishlist(index){

wishlist.push(products[index]);

showNotification("❤️ Added to wishlist");

updateWishlistUI();

}

function updateWishlistUI(){

document.getElementById("wishlistItems").innerHTML=wishlist.map((item,i)=>`

<div class="cartItem">

${item.name}

<button onclick="removeWish(${i})">Remove</button>

</div>

`).join("");

}

function removeWish(i){

wishlist.splice(i,1);

updateWishlistUI();

}

function toggleWishlist(){

document.getElementById("wishlistPopup").classList.toggle("active");

}

function applyFilters(){

let filtered=[...products];

const searchValue=searchInput.value.toLowerCase();

filtered=filtered.filter(p=>p.name.toLowerCase().includes(searchValue));

const categoryValue=categorySelect.value;

if(categoryValue!=="all"){
filtered=filtered.filter(p=>p.category===categoryValue);
}

const sortValue=sortSelect.value;

if(sortValue==="low"){filtered.sort((a,b)=>a.price-b.price)}
else if(sortValue==="high"){filtered.sort((a,b)=>b.price-a.price)}

display(filtered);

}

searchInput.addEventListener("input",applyFilters);
categorySelect.addEventListener("change",applyFilters);
sortSelect.addEventListener("change",applyFilters);

display(products);
