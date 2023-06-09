<?php
require('include_bd.php');
require('components/header.php');
$id =  $_GET['product_id'];
$product = $products[$id-1];
require('components/good.php');
require('components/footer.php');