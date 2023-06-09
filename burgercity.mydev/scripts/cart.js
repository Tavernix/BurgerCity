let cart = {};
checkCart();
let cartCount = document.querySelector('.cart-count');

function sumCount(cart) {
  let sum = 0;
  for (let good of Object.values(cart)) {
    sum += good;
  }
  return sum;
}
let changeCount = () => {
  cartCount.textContent = sumCount(cart);
}

changeCount();
//вешаю событие на все кнопки добавить в корзину
let buttons = document.querySelectorAll('.add-to-cart');
let addbuttonsClickHandler = function (button) {
  button.addEventListener('click', function () {
    //что происходит при нажатии на кнопку 
    let id = button.dataset.id;
    if (cart[id]!=undefined){
      cart[id]+=1;
    }
    else{
      cart[id] = 1;
    }
    window.localStorage.setItem('cart', JSON.stringify(cart) );
    changeCount();
    });
  };
for (let i=0; i<buttons.length; i++){
  addbuttonsClickHandler(buttons[i]);
};

function checkCart(){//есть ли что-то в корзине
  if ( window.localStorage.getItem('cart') != null ) {
    cart = JSON.parse(window.localStorage.getItem('cart'));
  }
};

let cardsQuantity = document.querySelectorAll('.quantity');
let cardsQuantityAdd = document.querySelectorAll('.quantity-add');
let cardsQuantityDec = document.querySelectorAll('.quantity-dec');
let cardsDell = document.querySelectorAll('.cart-dell');
let quantityPrices = document.querySelectorAll('.quantity-price');
let selfPrices = document.querySelectorAll('.self-price');
let allPriceInfo = document.querySelector('.all-price');


//количество товара(1) в корзинке
let changeQuantity = function(cardQuantity){
  cardQuantity.textContent = cart[cardQuantity.parentElement.dataset.id];
}
//скрыть не добавленные в корзину
let good = document.querySelectorAll('.cart-card');
let showHide = function(){
  for(let i=0; i<good.length ; i++){
    if (typeof cart[good[i].dataset.id] !== "undefined"){//есть ли такой товар в корзине
     good[i].classList.remove('hidden');
     changeQuantity(cardsQuantity[i])
   } else {
     good[i].classList.add('hidden');
   }
  }
}
showHide();


//количество товара и цена*количество
let toDoQuantity = function(btnQuantityAdd, btnQuantityDec, btnDell, cardQuantity, selfPrice, quantityPrice){
  quantityPrice.textContent = (1*(selfPrice.textContent.split(' ')[0])*(cardQuantity.textContent))+' ₽';

  btnQuantityAdd.addEventListener('click', function () {
    cart[btnQuantityAdd.parentElement.dataset.id] += 1;
    window.localStorage.setItem('cart', JSON.stringify(cart) );
    changeCount();
    showHide();
    CartClear();
    quantityPrice.textContent = (1*(selfPrice.textContent.split(' ')[0])*(cardQuantity.textContent))+' ₽';
    changeAllPrice();
  });

  btnQuantityDec.addEventListener('click', function () {
    cart[btnQuantityDec.parentElement.dataset.id] -= 1;
    if (cart[btnQuantityDec.parentElement.dataset.id]==0){
      quantityPrice.textContent = '0 ₽';
      delete cart[btnQuantityDec.parentElement.dataset.id];
      changeAllPrice();
    };
    window.localStorage.setItem('cart', JSON.stringify(cart) );
    changeCount();
    showHide();
    CartClear();
    quantityPrice.textContent = (1*(selfPrice.textContent.split(' ')[0])*(cardQuantity.textContent))+' ₽';
    changeAllPrice();
  });

  btnDell.addEventListener('click', function () {
    delete cart[btnDell.parentElement.dataset.id];
    window.localStorage.setItem('cart', JSON.stringify(cart) );
    changeCount();
    showHide();
    CartClear();
    quantityPrice.textContent = 0 + ' ₽';
    changeAllPrice();
  });
}
//наложить верхнее на каждую карточку 
quantityPrice();
function quantityPrice() {
  for (let i=0; i<cardsQuantity.length; i++){
    toDoQuantity(cardsQuantityAdd[i], cardsQuantityDec[i], cardsDell[i], cardsQuantity[i], selfPrices[i], quantityPrices[i]);
  };
}
//посчитать allPrice
function changeAllPrice(){
  let allPrice = 0;
  for (let i=0; i<cardsQuantity.length; i++){
    allPrice += Number(quantityPrices[i].textContent.split(' ')[0]);
    allPriceInfo.textContent = ('Общая сумма: ' + allPrice + ' ₽');
  }
}
changeAllPrice();


//если товаров в корзине нет:
let CartClear = function (){
  changeAllPrice();
  let notGoods = document.querySelector('.not_goods');
  if (Object.keys(cart) != 0){
    notGoods.classList.add('hidden');
  } else {
    notGoods.classList.remove('hidden');
    allPriceInfo.textContent = ('Общая сумма: 0 ₽');
  }
}

  

try{
CartClear();
} catch (e){ };

