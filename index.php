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
	
	<body>
		<div id="header">
			<div id="logo">
				<h1>Στάντζα</h1>
				<div id="moto">ειδικά κοπτικά</div>
			</div>
			<ul id="menu">
				<li <?php if ($p == 'home') echo 'class="selected" ';?>>
					<a href="?p=home">Αρχική</a>
				</li>
				<li <?php if ($p == 'samples') echo 'class="selected" ';?>>
					<a href="?p=samples">Προϊόντα</a>
				</li>
				<li <?php if ($p == 'shop') echo 'class="selected" ';?>>
					<a href="?p=shop">Ο χώρος</a>
				</li>
				<li <?php if ($p == 'clients') echo 'class="selected" ';?>>
					<a href="?p=clients">Πελατολόγιο</a>
				</li>
				<li <?php if ($p == 'contact') echo 'class="selected" ';?>>
					<a href="?p=contact">Επικοινωνία</a>
				</li>
			</ul>
		</div>
        <?php
            if ( $p == 'samples' ) include 'samples.php';
            else if ( $p == 'shop' ) include 'shop.php';
            else if ( $p == 'contact' ) include 'contact.php';
            else if ( $p == 'clients' ) include 'clients.php';
            else include 'home.php';
        ?>
		
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
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/stantza.js"></script>
		<script type="text/javascript" src="js/keys.js"></script>
	</body>
</html>