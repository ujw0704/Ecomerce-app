

  function hello(){
   fetch("https://dummyjson.com/products")
   .then((response)=>{
    return response.json()

   
    })
   .then((result)=>{
    show(result.products)

   })

   


}
hello()

  function show(data){
    for(let i=0;i<data.length;i++){
        let div = document.createElement("div")
        div.classList.add("products");
        let img =document.createElement("img");
        img.src =data[i].thumbnail;
        let link= document.createElement("a")
        link.href ="singleproducts.html?id="+data[i].id
        link.append(img)


        let h3 =document.createElement("h3");
        let disc = document.createElement("p");
        disc.innerHTML =data[i].description
        let price =document.createElement("p")
        price.innerHTML= data[i].price
        let  Addcart = document.createElement("a")
        Addcart.innerHTML = "AddToCart"

        
        div.append(link)
        div.append(h3)
        div.append(disc)
        div.append(price)
        div.append(Addcart)
        
        document.querySelector("#prduct").append(div)
    }
    
    


  }
  