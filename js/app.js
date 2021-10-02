// show cart
(function () {
    const cartInfo = document.getElementById("cart-info");
    const cart = document.querySelector(".cart");

    cartInfo.addEventListener("click", function () {
        cart.classList.toggle("show-cart")
    })
})();


// add item to cart
(function(){

    const cardBtn = document.querySelectorAll(".store-item-icon");
    cardBtn.forEach(btn => {
        btn.addEventListener("click", function (e) {
           if (e.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = e.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        partialPath = fullPath.slice(pos);
        
        const item = {};
        item.img = `img-cart${partialPath}`

        let name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        let price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        let finalPrice = price.slice(1).trim();
        item.name = name;
        item.price = finalPrice;




        const cardItem = document.createElement("div");
        cardItem.classList.add(
            "cart-item", 
            "d-flex",
             "justify-content-between", 
             "text-capitalize", 
             "my-3"
             );

            // console.log(cardItem);
        cardItem.innerHTML = `

        <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="item-image">
        <div class="item-text">

          <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
          <span>$</span>
          <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
        </div>
        <a href="#" id='cart-item-remove' class="cart-item-remove">
          <i class="fas fa-trash"></i>
        </a>
        `;

        //select cart
        const cart = document.getElementById("cart");
        const total = document.querySelector(".cart-total-container");
        cart.insertBefore(cardItem,total);
        alert("Item Added to Cart")
        showTotal();
           }
        });
    });

    // show total 
    let showTotal = () => {
        const total = [];
        const cartItemPrice = document.querySelectorAll(".cart-item-price");

        cartItemPrice.forEach(item => {
            total.push(parseFloat(item.textContent))
        });
        //console.log(total);

        const totalMoney = total.reduce(function (total, item) {
            total += item
            return total
        },0);
        const finalMoney = totalMoney.toFixed(2);
        

        const itemTotal = document.getElementById("item-total").textContent = finalMoney;
        const itemCount = document.getElementById("item-count").textContent = total.length;
        const cartTotal = document.getElementById("cart-total").textContent = finalMoney;
    }


})();

