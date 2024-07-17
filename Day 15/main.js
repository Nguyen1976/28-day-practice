fetch('https://fakestoreapi.com/products')
.then(res => {
    return res.json();
})
.then(data => {
    var products = document.querySelector('.products');
    products.innerHTML = '';
    data.forEach(item => {
        // <div class="product">
                    // <img src="./img1.jpg" alt="">
                    // <div class="info">
                    //     <div class="name">SP1</div>
                    //     <div class="price">99</div>
                    // </div>
        //         </div>
        var newProduct = document.createElement('div')
        newProduct.classList.add('product')
        newProduct.innerHTML = `
                         <img src="${item.image}" alt="">
                        <div class="info">
                            <div class="name">${item.title}</div>
                            <div class="price">$${item.price}</div>
                         </div>`
        products.appendChild(newProduct);
    })
})

var input = document.querySelector('.search input');

input.addEventListener('input', function(e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    var listProductDOM = document.querySelectorAll('.product');
    listProductDOM.forEach(item => {
        if(item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
})