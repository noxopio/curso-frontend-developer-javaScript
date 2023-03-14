/* const $ = (selector) =>document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu'); */


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);

cart.addEventListener('click', toggleCarritoAside);




function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleCarritoAside() {
    desktopMenu.classList.add('inactive')
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}




const productList = [];
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
    name: 'Farol Buho',
    price: 40.000,
    image: '/src/img/farol_buho.jpg'
});
productList.push({
    name: 'Farol Buho',
    price: 40.000,
    image: '/src/img/rosa.jpg'
});
productList.push({
    name: 'Farol Buho',
    price: 40.000,
    image: '/src/img/farol.jpg'
});




function renderProducts(arr){
    
    
    
    for (product of arr) {
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
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
    
        cardsContainer.appendChild(productCard);
    }







}

renderProducts(productList);