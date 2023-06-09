<?php

spl_autoload_register(function ($class){
	include 'classes/' . $class . '.php';
});


$PDO = PdoConnect::getInstance();

$result = $PDO->PDO->query("
SELECT * from `goods`
");

$products = array();

while ($productInfo = $result->fetch()){
	$products[] = $productInfo;
}

$categories = $PDO->PDO->query("
SELECT DISTINCT `category` from `goods`
");
$category = array();
while ($categoriesInfo = $categories->fetch()){
	$category[] = $categoriesInfo;
}
