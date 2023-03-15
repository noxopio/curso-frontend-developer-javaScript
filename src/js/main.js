/* const $ = (selector) =>document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu'); */


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailClose = document.querySelector('.product-detail-close');

const cart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart-detail');
const cardsContainer = document.querySelector('.cards-container');


const productDetailContainer = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetail);



function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function toggleCarritoAside() {
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function openProductDetail() {
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}



//---------------------ARREGLO PARA GENERAR HTML-------------------
const productList = [];
//-------------push al arreglo elementos html
productList.push({
    name: 'Skull',
    price: 40.000,
    image: '/src/img/skull.jpg'

});
productList.push({
    name: 'Guitar',
    price: 400.000,
    image: '/src/img/guitarra.jpg'

});
productList.push({
    name: 'Reliquias',
    price: 400.000,
    image: '/src/img/reliquias.jpg'

});

productList.push({
    name: 'rosa',
    price: 40.000,
    image: '/src/img/rosa.jpg'
});
productList.push({
    name: 'Farol',
    price: 10.000,
    image: '/src/img/farol.jpg'
});
productList.push({
    name: 'Farol',
    price: 10.000,
    image: '/src/img/farol.jpg'
});



function renderProducts(arr) {



    for (product of arr) {


        const productCard = document.createElement('div');
        productCard.classList.add('product-card');


        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);




        const productInfo = document.createElement('div');
        productInfo.classList.add('product-detail-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;



        const productName = document.createElement('div');
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/icons/bt_add_to_cart.svg');

        productInfoFigure.append(productImgCart);


        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);


        cardsContainer.append(productCard);
    }







}

renderProducts(productList);

console.log('hello')