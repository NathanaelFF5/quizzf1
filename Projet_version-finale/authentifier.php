<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Quizz</title>
</head>
<body>
	<h1>Bonjour <?php echo $_POST['login']; ?> </h1>

	<?php 
		$login = $_POST['login'];
		$mdp = $_POST['mdp'];

		if ($login == 'nathanael' && $mdp =='f1' ){
			echo "<p>Authentification réussie<p>";
			echo "<button onclick=\"window.location.href='page1projet.html';\">
			Continuer</button>";
		}
		else{
			echo "<p>Login et/ou mot de passe erronés</p>";
			echo "<button onclick=\"window.location.href='index.html';\">
			Recommencer</button>";
		}

	  ?>

</body>
</html>









