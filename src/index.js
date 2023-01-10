/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = "https://platzi-avo.vercel.app";
const URL = "https://platzi-avo.vercel.app/api/avo";

//Internalización
const formatPrice = (price) =>{
    //Usamos la API de internalización
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
    }).format(price);
    
    return newPrice;
}
const $app = document.getElementById("app");
$app.addEventListener("click", (event)=>{
    console.log(event.target);
})

window.fetch(`${baseUrl}/api/avo`).then((res)=>res.json()).then((resjson)=>{
    const nodeArray = [];
   
    resjson.data.forEach(product => {

        const $image = document.createElement("img");
        const $title = document.createElement("h2");
        const $price = document.createElement("p");
        $title.classList.add("mt-2", "mb-1", "text-red-600");
        const $div = document.createElement("div");
        $div.classList.add("p-2");
        const image = `${baseUrl}`+product.image;
        $image.src = image;
        $title.innerText = product.name;
        $price.innerText = formatPrice(product.price);

        $div.append($image, $title, $price);
        nodeArray.push($div);
    });
    
    $app.append(...nodeArray);
   
});


