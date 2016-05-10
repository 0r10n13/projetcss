<?php
/**
 * Created by PhpStorm.
 * User: Orion
 * Date: 10/05/2016
 * Time: 10:03
 */

$layout = "layout.php";

$route = !empty($_REQUEST['route']) ? $_REQUEST['route'] : "index";

$htmlContent = "<h1>TESTOUILLE</h1>";

switch ($route)
{
	case "index":
		break;
}

include $layout;