import"./modulepreload-polyfill-B5Qt9EMX.js";const l=document.getElementById("product-detail"),m=document.getElementById("more-product-detail"),g=new URLSearchParams(window.location.search),c=g.get("id"),n=document.getElementById("quantity"),f=document.getElementById("increaseItems"),p=document.getElementById("decreaseItems"),h=document.getElementById("addToCart"),y=Array.from(document.getElementsByClassName("carousel-product-image")),i=document.getElementById("productDetailLoader");let t=null;console.log("[DEBUG] productId ===> ",c);I();function r(e){e?i.style.display="block":i.style.display="none"}function I(){r(!0),fetch(`https://fakestoreapi.com/products/${c}`).then(e=>e.json()).then(e=>{r(!1),t=e,t.quantity=1,console.log("[DEBUG] product ===> ",e),y.forEach(o=>{o.src=e.image}),l&&(l.innerHTML=`
            <ul class="breadcrumb">
                <li>Clothing</li>
                <li>Women's</li>
                <li>Outerwear</li>
            </ul>
            <h2>${e.title}</h2>
            <p>$${e.price}</p>
            <ul class="rating">
                ${E(e.rating.rate)}
                <li>(${e.rating.count})</li>
            </ul>
            <span>${e.description} <a href="">Read more</a></span>
        `,m.innerHTML=`
        <h2>${e.title}</h2>
        <h4>Description</h4>
        <p>${e.description}</p>
        `)})}f.addEventListener("click",e=>{n.value=parseInt(n.value,10)+1});p.addEventListener("click",e=>{parseInt(n.value,10)>1&&(n.value=parseInt(n.value,10)-1)});h.addEventListener("click",e=>{console.log("[DEBUG] currentProduct ===> ",t,e),t&&(t.quantity=parseInt(n.value),addToCart(t),window.location.href="/pages/shopping-bags/shopping-bags.html")});function E(e){const o=Math.floor(e),d=e%1>=.5,u=5-Math.ceil(e);let s="";for(let a=0;a<o;a++)s+='<i class="fa fa-star"></i>';d&&(s+='<i class="fa fa-star-half-alt"></i>');for(let a=0;a<u;a++)s+='<i class="fa fa-star-o"></i>';return s}const v=document.getElementById("isMobileMenu");v.addEventListener("click",()=>{document.body.classList.toggle("isMobileMenuOpend")});const B=document.getElementById("removeButtons");B.addEventListener("click",()=>{document.body.classList.toggle("isMobileMenuOpend")});
