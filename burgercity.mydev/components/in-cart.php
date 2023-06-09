

<section class="cart">
    <div class="btn-back">
        <a class="button-back" href="menu.php">◀</a>
    </div>
    <div>
        <div class="cart-goods">
            <h1 class="not_goods hidden">В Вашей корзине нет товаров!</h1>

            <?foreach ($products as $product):?>
            <div class="cart-card hidden" data-id="<?=$product['id']?>">
                <div>
                    <img class="cart-card-img" src="<?=$product['image']?>" alt="Изображение <?=$product['name']?>">
                    <h2 class="cart-good-name"><?=$product['name']?></h2>
                </div>
                <p class="self-price"><?=$product['price']?> ₽</p>
                <div class="cart-quantity" data-id="<?=$product['id']?>">
                    <button class="quantity-dec">-</button>
                    <p class="quantity">0</p>
                    <button class="quantity-add">+</button>
                </div>
                <p class="quantity-price">0 ₽</p>
                <button class="cart-dell" data-id="<?=$product['id']?>">х</button>
            </div>
            <?endforeach?>
        </div>


        <p class="all-price">Общая сумма: 0 ₽</p>



        <div class="order">
            <form action="#" method="POST" id="form">
                <fieldset>
                    <div class="fieldset-column">
                        <label for="address">Укажите адрес</label>
                        <input class="input-order" type="text" id="address" name="address" placeholder="г. Благовещенск, ">
                        <label for="note">Коментарий к заказу</label>
                        <textarea class="input-order" id="note" name="note" rows="5"></textarea>
                    </div>
                    <div class="fieldset-column">
                        <label for="buyer">Ваше имя</label>
                        <input class="input-order" type="text" name="buyer"  placeholder="Иван Иванов" required>
                        <label for="tel">Номер телефона</label>
                        <input class="input-order" type="tel" name="tel"  placeholder="+7-(XXX)-XXX-XX-XX"required>
                            <div class="two-radio">
                                <label>   
                                <input class="input-order" type="radio" name="delivery" value="dostavka" checked> Доставка
                                </label>
                                <label>
                                <input class="input-order" type="radio" name="delivery" value="samovivoz" > Самовывоз
                                </label>
                            </div>
                        <button class="output-order" type="submit">Оформить заказ</button>
                    </div>
                </fieldset>
            </form> 
        </div>
    </div>  
    <script src="scripts/order.js"></script>
</section>

