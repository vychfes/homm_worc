let getProducts = JSON.parse(localStorage.getItem('products'))
let productListUL = document.querySelector('.product-list');
let productNumUl = document.querySelector('.number-product');
let priceComingUl = document.querySelector('.price-coming');
let priceRetailUl = document.querySelector('.price-retail');
let priceWholesaleUl = document.querySelector('.price-wholesale');
let unitUl = document.querySelector('.unit-product');
if (getProducts) {
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText= getProducts[i].name;
        productListUL.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].number;
        productNumUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].coming;
        priceComingUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].retail;
        priceRetailUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].sale;
        priceWholesaleUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].unit;
        unitUl.appendChild(listItem);
    }
}


let button = document.getElementById("but");

let products = [];

button.onclick = function () {
    let productName = document.getElementById("nameProduct").value;
    let productNumber = document.getElementById("product_number").value;
    let priceComing = document.getElementById("price_coming").value;
    let priceRetail = document.getElementById("price_retail").value;
    let priceSale = document.getElementById("price_wholesale").value;
    let productUnit = document.getElementById("unit_product").value;
    let product = {
        name: productName,
        number: productNumber,
        coming: priceComing,
        retail: priceRetail,
        sale: priceSale,
        unit: productUnit,
    }

    let allProducts = JSON.parse(localStorage.getItem('products'));
    if (productNumber === '' || isNaN(productNumber) || priceComing === '' || isNaN(priceComing) || priceRetail === '' || isNaN(priceRetail) || priceSale === '' || isNaN(priceSale) || productName === '') {
        return false
    } else if (allProducts) {
        allProducts.push(product);
        window.localStorage.setItem("products", JSON.stringify(allProducts));
    } else {
        products.push(product);
        window.localStorage.setItem("products", JSON.stringify(products));
    }
    let getProducts = JSON.parse(localStorage.getItem('products'))

    while (productListUL.firstChild) {
        productListUL.removeChild(productListUL.firstChild);
    }
    while (productNumUl.firstChild) {
        productNumUl.removeChild(productNumUl.firstChild);
    }
    while (priceComingUl.firstChild) {
        priceComingUl.removeChild(priceComingUl.firstChild);
    }
    while (priceRetailUl.firstChild) {
        priceRetailUl.removeChild(priceRetailUl.firstChild);
    }
    while (priceWholesaleUl.firstChild) {
        priceWholesaleUl.removeChild(priceWholesaleUl.firstChild);
    }
    while (unitUl.firstChild) {
        unitUl.removeChild(unitUl.firstChild);
    }

    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].name;
        productListUL.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].number;
        productNumUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].coming;
        priceComingUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].retail;
        priceRetailUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].sale;
        priceWholesaleUl.appendChild(listItem);
    }
    for (let i = 0; i < getProducts.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = getProducts[i].unit;
        unitUl.appendChild(listItem);
    }
    document.getElementById("price_wholesale").value = '';
    document.getElementById("price_retail").value = '';
    document.getElementById("price_coming").value = '';
    document.getElementById("product_number").value = '';
    document.getElementById("nameProduct").value = '';
}
let buttonFilter = document.getElementById('buttfiltr');
let result2 = [];
buttonFilter.onclick = function () {
    let nameFilter = document.getElementById('name_filter').value;
    let numberFilter = document.getElementById('number_filter').value;
    let comingFilter = document.getElementById('filter_coming').value;
    let retailFilter = document.getElementById('filter_retail').value;
    let saleFilter = document.getElementById('filter_sale').value;
    let selectFilter = document.getElementById('filter_select').value;
    let result = getProducts.filter(function (el, index) {
        if (nameFilter != "") {
            return el.name === nameFilter;
        } else if (numberFilter != '') {
            return el.number === numberFilter;
        } else if (comingFilter != '') {
            return el.coming === comingFilter;
        } else if (retailFilter != '') {
            return el.retail === retailFilter;
        } else if (saleFilter != '') {
            return el.sale === saleFilter;
        } else {
            return el.unit === selectFilter;
        }
    })

    while (productListUL.firstChild) {
        productListUL.removeChild(productListUL.firstChild);
    }
    while (productNumUl.firstChild) {
        productNumUl.removeChild(productNumUl.firstChild);
    }
    while (priceComingUl.firstChild) {
        priceComingUl.removeChild(priceComingUl.firstChild);
    }
    while (priceRetailUl.firstChild) {
        priceRetailUl.removeChild(priceRetailUl.firstChild);
    }
    while (priceWholesaleUl.firstChild) {
        priceWholesaleUl.removeChild(priceWholesaleUl.firstChild);
    }
    while (unitUl.firstChild) {
        unitUl.removeChild(unitUl.firstChild);
    }


    console.log(result)
    if (result) {
        for (let i = 0; i < result.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result[i].name;
            productListUL.appendChild(listItem);
        }
        for (let i = 0; i < result.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result[i].number;
            productNumUl.appendChild(listItem);
        }
        for (let i = 0; i < result.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result[i].coming;
            priceComingUl.appendChild(listItem);
        }
        for (let i = 0; i < result.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result[i].retail;
            priceRetailUl.appendChild(listItem);
        }
        for (let i = 0; i < result.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result[i].sale;
            priceWholesaleUl.appendChild(listItem);
        }
        for (let i = 0; i < result.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result[i].unit;
            unitUl.appendChild(listItem);
        }
    }


    while (productListUL.firstChild) {
        productListUL.removeChild(productListUL.firstChild);
    }
    while (productNumUl.firstChild) {
        productNumUl.removeChild(productNumUl.firstChild);
    }
    while (priceComingUl.firstChild) {
        priceComingUl.removeChild(priceComingUl.firstChild);
    }
    while (priceRetailUl.firstChild) {
        priceRetailUl.removeChild(priceRetailUl.firstChild);
    }
    while (priceWholesaleUl.firstChild) {
        priceWholesaleUl.removeChild(priceWholesaleUl.firstChild);
    }
    while (unitUl.firstChild) {
        unitUl.removeChild(unitUl.firstChild);
    }
    result2 = result.filter(function (el, index) {

        if (numberFilter != '') {
            return el.number === numberFilter;
        } else if (comingFilter != '') {
            return el.coming === comingFilter;
        } else if (retailFilter != '') {
            return el.retail === retailFilter;
        } else if (saleFilter != '') {
            return el.sale === saleFilter;
        } else {
            return el.unit === selectFilter;
        }
    })

    if (result2) {
        for (let i = 0; i < result2.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result2[i].name;
            productListUL.appendChild(listItem);
        }

        for (let i = 0; i < result2.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result2[i].number;
            productNumUl.appendChild(listItem);
        }
        for (let i = 0; i < result2.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result2[i].coming;
            priceComingUl.appendChild(listItem);
        }
        for (let i = 0; i < result2.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result2[i].retail;
            priceRetailUl.appendChild(listItem);
        }
        for (let i = 0; i < result2.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result2[i].sale;
            priceWholesaleUl.appendChild(listItem);
        }
        for (let i = 0; i < result2.length; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = result2[i].unit;
            unitUl.appendChild(listItem);
        }


    }
}