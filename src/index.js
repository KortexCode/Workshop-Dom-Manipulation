/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = "https://platzi-avo.vercel.app";
const URL = "https://platzi-avo.vercel.app/api/avo";

window.fetch(`${baseUrl}/api/avo`).then((res)=>res.json()).then((resjson)=>{
    const nodeArray = [];
    const $app = document.getElementById("app");
    resjson.data.forEach(product => {

        const $image = document.createElement("img");
        const $title = document.createElement("h2");
        const $price = document.createElement("p");
        const $div = document.createElement("div");
        const image = `${baseUrl}`+product.image;
        $image.src = image;
        $title.innerText = product.name;
        $price.innerText = product.price;

        $div.append($image, $title, $price);
        nodeArray.push($div);
    });
    
    $app.append(...nodeArray);
   
});


