let selected = document.getElementById("category")
    if(selected.value == "all"){
    fetch("http://127.0.0.1:8000/api").then(data => data.json()).then((r)=>{
        let parent = document.getElementById("product-grid")
        
    r.map((value)=>{
        
     let div = document.createElement("div");
     div.className = ` product-card  `;
     div.id = value["type"]
     div.innerHTML = `<img src="${value["image"]}" alt="${value["name"]}">
                        <h3>${value["name"]}</h3>
                        <p>${value["description"]}.</p>
                        <p class="price">${" ₹ " +value["price"]}</p>
                        <a href='buy/${value["name"]}' class="buy-button"">Buy Now</a>`
     parent.appendChild(div);
     
    })
    });
 }

selected.addEventListener("change",(e)=>{
    
    let parent = document.getElementById("product-grid");
    parent.innerHTML = "";
    if(e.target.value == "all")
    {
           
        fetch("http://127.0.0.1:8000/api").then(data => data.json()).then((r)=>{
            let parent = document.getElementById("product-grid")
            
        r.map((value)=>{
            
         let div = document.createElement("div");
         div.className = ` product-card  `;
         div.id = value["type"]
         div.innerHTML = `<img src="${value["image"]}" alt="${value["name"]}">
                            <h3>${value["name"]}</h3>
                            <p>${value["description"]}.</p>
                            <p class="price">${" ₹ " +value["price"]}</p>
                            <a href= 'buy/${value["name"]}' class="buy-button"">Buy Now</a>`
         parent.appendChild(div);
         
        })
        })
     }
     else{
        fetch(`http://127.0.0.1:8000/api/${e.target.value}`).then(data => data.json()).then((r)=>{
            let parent = document.getElementById("product-grid")
            
        r.map((value)=>{
            
         let div = document.createElement("div");
         div.className = ` product-card  `;
         div.id = value["type"]
         div.innerHTML = `<img src="${value["image"]}" alt="${value["name"]}">
                            <h3>${value["name"]}</h3>
                            <p>${value["description"]}.</p>
                            <p class="price">${" ₹ " +value["price"]}</p>
                            <a href='buy/${value["name"]}' class="buy-button"">Buy Now</a>`
         parent.appendChild(div);
         
        })
        });
    }
    e.preventDefault();
})
  
  

    
   

