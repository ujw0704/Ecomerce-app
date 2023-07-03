const pageUrl =window.location.href
console.log(pageUrl)
if(!pageUrl.includes("id")){
    


}
else{
    const id = pageUrl.split("=")[1]
    console.log(id)
    which(id)
}

async function which(id){
   const response=  await fetch("https://dummyjson.com/products/"+id)
   const result = await response.json()
   console.log(result)
   show(result)

}

function show(result){
    let div = document.createElement("div")
    div.classList.add("products");
    let img =document.createElement("img");
    img.src =result.thumbnail;
   

    let h3 =document.createElement("h3");
    let disc = document.createElement("p");
    disc.innerHTML =result.description
    let price =document.createElement("p")
    price.innerHTML= result.price
    let  Addcart = document.createElement("a")
    Addcart.innerHTML = "AddToCart"

    
     
    div.append(img)
    div.append(h3)
    div.append(disc)
    div.append(price)
    div.append(Addcart)

    let d = document.querySelector("#singleproducts")
    d.append(div)
}