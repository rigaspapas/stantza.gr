<?php
	header("Content-type: text/html; charset=UTF-8");

	if (!isset( $_GET['p'] )) $p = 'home';
	else {
		switch( $_GET['p'] ) {
			case 'samples':
				$p = 'samples';
				break;
			case 'shop':
				$p = 'shop';
				break;
			case 'clients':
				$p = 'clients';
				break;
			case 'contact':
				$p = 'contact';
				break;
			default:
				$p = 'home';
		}
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Στάντζα | ειδικά κοπτικά</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="description" content="Στάντζα , ειδικά κοπτικά" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
		<link rel="stylesheet" type="text/css" href="styles/main.css" />
		<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700&subset=latin,greek' rel='stylesheet' type='text/css'>		
	</head>
	
	<body ng-app="stantza" ng-controller="pageController as page">
		<div id="header">
			<div id="logo">
				<h1>Στάντζα</h1>
				<div id="moto">ειδικά κοπτικά</div>
			</div>
			<ul id="menu">
				<li ng-class="{selected:page.location=='home'}">
					<a href="#home" ng-click="page.location = 'home'">Αρχική</a>
				</li>
				<li ng-class="{selected:page.location=='samples'}">
					<a href="#samples" ng-click="page.location = 'samples'">Προϊόντα</a>
				</li>
				<li ng-class="{selected:page.location=='shop'}">
					<a href="#shop" ng-click="page.location = 'shop'">Ο χώρος</a>
				</li>
				<li ng-class="{selected:page.location=='clients'}">
					<a href="#clients" ng-click="page.location = 'clients'">Πελατολόγιο</a>
				</li>
				<li ng-class="{selected:page.location=='contact'}">
					<a href="#contact" ng-click="page.location = 'contact'">Επικοινωνία</a>
				</li>
			</ul>
		</div>
		
        <div id="page-content" ng-include="page.location + '.php'" onload="page.pageLoaded()">
        </div>
        
        <div id="footer">
            Developed by <a href="http://www.rigaspapas.com">Rigas Papas</a>.
        </div>
        
		<div id="black-overlay"></div>
		<div id="outerprev">
			<div id="innerprev">
				<div id="closebutton">
					<img onclick="prevclose();" alt="close" src="images/close.png" />
				</div>
			</div>
		</div>
		
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-36179329-1']);
		  _gaq.push(['_trackPageview']);

		  (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.min.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript" src="js/stantza.js"></script>
		<script type="text/javascript" src="js/keys.js"></script>
	</body>
</html>