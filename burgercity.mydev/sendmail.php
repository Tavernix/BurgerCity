<?php

spl_autoload_register(function ($class){
	include 'classes/' . $class . '.php';
});


$PDO = PdoConnect::getInstance();

$body = "Поступил новый заказ.\n\n";

$body.= "Позиции в заказе:";

$json = json_decode($_POST['cart']);
foreach ($json as $key => $value) {
	$body.= "\n ID товара: ".strval($key)." в количестве:" .strval($value) ;
};

$allPrice = $_POST['allPrice'];
$body.= "\n".$allPrice."\n";

$body.= "\nИнформация заказа: ";

$body.="\nИмя:".$_POST['buyer'].'';

$body.="\nТелефон: ".$_POST['tel'].'';

$body.="\nУказанный адресс: ".$_POST['address'];

$body.="\nПолучение: ".$_POST['delivery'];

$body.="\nКоментарий к заказу: ".$_POST['note'];

$json = json_decode($_POST['cart']);
$sqlAdd = "
INSERT INTO orders
SET buyer = :buyer,tel = :tel,address = :address,delivery = :delivery,note = :note,cart = :json
";
$set = $PDO->PDO->prepare($sqlAdd);
$set->bindValue(':buyer', $_POST['buyer']);
$set->bindValue(':tel', $_POST['tel']);
$set->bindValue(':address', $_POST['address']);
$set->bindValue(':delivery', $_POST['delivery']);
$set->bindValue(':note', $_POST['note']);
$set->bindValue(':json', json_encode($json));
$set->execute();

mail('t4vern1x@gmail.com', 'Оформлен новый заказ', $body, 'FROM: admin@burgercity.mydev');
header('Content-type: application/json');
echo json_encode($response);