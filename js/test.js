try{
    
    var fullPrice = 0;
    var flag = true;

    for(let key in localStorage) {
        if(key == "length" || key == "key" ||
         key == "getItem" || key == "setItem" ||
          key == "removeItem" ||key == "clear" || key == "current") {
              continue;
          }
          
          var temp = JSON.parse(localStorage.getItem(key));

          var container = document.getElementById("cart_inside");
            var product_cart = document.createElement("div");
            product_cart.className = "product_cart";

            var product_cart_block = document.createElement("div");
            product_cart_block.className = "product_cart-block";

            var left_block = document.createElement("div");
            left_block.className = "left_block";

            var img = document.createElement("img");
            console.log(key);
            img.src = temp.img;

            var text_left = document.createElement("div");
            text_left.className = "text_left";

            var title_cart = document.createElement("span");
            title_cart.className = "title_cart";

            var author_cart = document.createElement("span");
            author_cart.className = "author_cart";

            var right_block = document.createElement("div");
            right_block.className = "right_block";

            var number_cart = document.createElement("span");
            number_cart.className = "number_cart";

            var price_cart = document.createElement("span");
            price_cart.className = "price_cart";


            price_cart.textContent = temp.price * temp.number + " р.";
            fullPrice += temp.price * temp.number;
            number_cart.textContent = temp.number;

            right_block.appendChild(number_cart);
            right_block.appendChild(price_cart);


            title_cart.textContent = temp.title;
            author_cart.textContent = temp.author;
            text_left.appendChild(title_cart);
            text_left.appendChild(author_cart);
            left_block.appendChild(img);
            left_block.appendChild(text_left);

            product_cart_block.appendChild(left_block);
            product_cart_block.appendChild(right_block);

            product_cart.appendChild(product_cart_block);
            container.appendChild(product_cart);

            var decoration = document.getElementById("open_btn");
            decoration.style.display = "block";

            if(flag){
                document.getElementById("emptyCart").style.display = "none";
                flag = false;
            }
      }
      document.getElementById("fullPrice").innerHTML= "К оплате: " + fullPrice + " р.";
} catch(err){
    console.log(err);
}
