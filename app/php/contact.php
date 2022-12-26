<?php
echo "Votre mail a bien été envoyé";
?>

<!-- <!doctype html>

<html>



<head>

    <meta charset="utf-8">

    <title>Envoi d'un message par formulaire</title>

</head>



<body>

    

    <?php

    if(isset($_POST['message'])){

        $entete  = 'MIME-Version: 1.0' . "\r\n";

        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        $entete .= 'From: ' . $_POST['mail'] . "\r\n";



        $message = '<h2>Message envoyé depuis la page Contact de mon site jordandohou.fr</h2>

        <p><b>Mail : </b>' . $_POST['mail'] . '<br>

		<b>objet : </b>' . $_POST['objet'] . '<br>

        <b>Message : </b>' . $_POST['message'] . '</p>';



        $retour = mail('jordandohou11@gmail.com', 'Envoi jordandohou.fr', $message, $entete);

        if($retour) {

            echo '<p>Votre message a bien été envoyé.</p>';

        }

    }

    ?>

</body>

</html> -->