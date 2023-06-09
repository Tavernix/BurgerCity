
<section class="good-one" data-id="<?=$product['id']?>">
    <div class="btn-back">
        <a class="button-back" href="menu.php">◀</a>
    </div>
    <div class="good">
    <div class="good-pic">
        <img class="good-img" src="<?=$product['image']?>" alt="Изображение <?=$product['name']?>">
    </div> 
    <div class="good-info">   
        <h1 class="good-name"><?=$product['name']?></h1>
        <p>Описание: <?=$product['description']?>
        </p>
        <p>
            Категория:
            <a class="good-category" href="menu.php"><?=$product['category']?></a>
        </p>
        <div class="card-buy">
            <p class="good-price">Цена: <?=$product['price']?> ₽</p>
            <bottom class="add-to-cart" data-id="<?=$product['id']?>" >Добавить в корзину</bottom>
        </div>
    </div>
    </div>
</section>

