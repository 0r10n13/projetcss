<?php
/**
 * Created by PhpStorm.
 * User: Orion
 * Date: 10/05/2016
 * Time: 10:03
 */

$layout = "layout.php";

$route = !empty($_REQUEST['route']) ? $_REQUEST['route'] : "index";

$htmlContent = "list.html";

switch ($route)
{
	case "index":
		$htmlContent = "list.html";
		break;
}

ob_start();
require $htmlContent;
$htmlContent = ob_get_contents();
ob_get_clean();
include $layout;