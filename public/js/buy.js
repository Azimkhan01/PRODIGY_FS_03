

fetch("http://127.0.0.1:8000/api").then(data => data.json()).then(async (r)=>{
    const productDetails = document.querySelector('.product-details');
    const firstChild = productDetails.firstElementChild;
    const firstChildId = firstChild.id;
const thirdChild = productDetails.children[2];
const thirdChildId = thirdChild.id;
 
r.map(async (value)=>{
    if(value["type"] == firstChildId && value["name"] != thirdChildId ){
    let parent = document.getElementById("related-products")
 let div = document.createElement("div");
 div.className = ` related-product `;
 div.id = value["type"]
 div.innerHTML = `<a  href="/buy/${value["name"]}"><img src="${value["image"]}" alt="${value["name"]}"></a>
            <a style="color:black;text-decoration:none" href="/buy/${value["name"]}"><p class="related-product-name">${value["name"]}</p></a>
            <a style="color:black;text-decoration:none" href="/buy/${value["name"]}"><p class="related-product-price">${" ₹ "+value["price"]}</p></a>`
 parent.appendChild(div);
    }

})
});