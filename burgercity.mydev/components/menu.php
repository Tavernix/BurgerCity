
<section class="menu">
    <form class="menu-filter" action="#" method="get">
        <fieldset class="menu-filter-group">
            <legend class="menu-filter-title">Наше меню</legend>
            <ul class="menu-filter-list">
                <?foreach ($category as $type):?>
                <li class="menu-filter-item">
                    <label class="control">
                        <input class="control-input" data-category="<?=$type['category']?>" type="checkbox" name="<?=$type['category']?>" checked>
                        <?=$type['category']?>
                    </label>
                </li>
                <br>
                <?endforeach?>
            </ul>
        </fieldset>
        <button class="menu-filter-btn">Показать</button>
    </form>
    <div class="cards">
        <?foreach ($products as $product):?>
            <div class="card" data-id="<?=$product['id']?>" data-card-category="<?=$product['category']?>">
                <img class="card-img" src="<?=$product['image']?>" alt="Изображение <?=$product['name']?>">
                <div class="card-info">
                    <a class="category" href="menu.php"><?=$product['category']?></a>
                    <a class="name" href="product.php?product_id=<?=$product['id']?>"><?=$product['name']?><a>
                    <div class="card-buy">
                        <span class="price"><?=$product['price']?> ₽</span>
                        <button class="add-to-cart" data-id="<?=$product['id']?>"><img src="img/add-to-cart.png"></button>
                    </div>
                </div>
            </div>
        <?endforeach?>
    </div>

</section>

