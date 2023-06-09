<?php

spl_autoload_register(function ($class){
	include 'classes/' . $class . '.php';
});



require('components/header.php');
require('components/main.php');
require('components/footer.php');