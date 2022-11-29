<?php
session_start();

$bdd = new PDO('mysql:host=localhost;dbname=espace_membre', 'root', '');
if(isset($_SESSION['id'])) {
   $requser = $bdd->prepare("SELECT * FROM membres WHERE id = ?");
   $requser->execute(array($_SESSION['id']));
   $user = $requser->fetch();
    if(isset($_POST['newpseudo']) AND !empty($_POST['newpseudo']) AND $_POST['newpseudo'] != $user['pseudo']){

        $pseudo = htmlspecialchars($_POST['newpseudo']);

        $reqpseudo = $bdd->prepare("SELECT * FROM membres where pseudo = ?");
        $reqpseudo->execute(array($pseudo));
        $pseudoexist =  $reqpseudo->rowCount();

        if($pseudoexist == 0) {
            $newpseudo = htmlspecialchars($_POST['newpseudo']);
            $insertpseudo = $bdd->prepare("UPDATE membres SET pseudo = ? WHERE id = ?");
            $insertpseudo->execute(array($newpseudo, $_SESSION['id']));
            header('Location: profil.php?id='.$_SESSION['id']);
        }else{
            $msg = "Pseudo déjà utilisée !";
        }
    }
    if(isset($_POST['newmail']) AND !empty($_POST['newmail']) AND $_POST['newmail'] != $user['mail'] ) {

        $mail = htmlspecialchars($_POST['newmail']);

        $reqmail = $bdd->prepare("SELECT * FROM membres where mail = ?");
        $reqmail->execute(array($mail));
        $mailexist = $reqmail->rowCount();

        if ($mailexist == 0) {
            $newmail = htmlspecialchars($_POST['newmail']);
            $insertmail = $bdd->prepare("UPDATE membres SET mail = ? WHERE id = ? ");
            $insertmail->execute(array($newmail, $_SESSION['id']));
            header('Location: profil.php?id=' . $_SESSION['id']);
        } else {
            $msg = "Adresse mail déjà utilisée !";
        }
    }
   if(isset($_POST['newmdp1']) AND !empty($_POST['newmdp1']) AND isset($_POST['newmdp2']) AND !empty($_POST['newmdp2'])) {
      $mdp1 = sha1($_POST['newmdp1']);
      $mdp2 = sha1($_POST['newmdp2']);
      if($mdp1 == $mdp2) {
         $insertmdp = $bdd->prepare("UPDATE membres SET motdepasse = ? WHERE id = ?");
         $insertmdp->execute(array($mdp1, $_SESSION['id']));
         header('Location: profil.php?id='.$_SESSION['id']);
      } else {
         $msg = "Vos deux mdp ne correspondent pas !";
      }
   }
?>
    <html>
    <head>
        <title>TUTO PHP</title>
        <meta charset="utf-8">
    </head>
    <body>
    <div align="center">
        <h2>Edition de mon profil</h2>
        <div align="center">
            <form method="POST" action="" enctype="multipart/form-data">
                <table>


                    <tr>
                        <td align="right">
                            <label>Pseudo :</label>
                        </td>
                        <td>
                            <input type="text" name="newpseudo" placeholder="Pseudo" value="<?php echo $user['pseudo']; ?>" /><br /><br />
                        </td>
                    </tr>


                    <tr>
                        <td align="right">
                            <label>Mail :</label>
                        </td>
                        <td>
                            <input type="text" name="newmail" placeholder="Mail" value="<?php echo $user['mail']; ?>" /><br /><br />
                        </td>
                    </tr>


                    <tr>
                        <td align="right">
                            <label>Mot de passe :</label>
                        </td>
                        <td>
                            <input type="password" name="newmdp1" placeholder="Mot de passe"/><br /><br />
                        </td>
                    </tr>


                    <tr>
                        <td align="right">
                            <label for="mdp2">Confirmation mot de passe :</label>
                        </td>
                        <td>
                            <input type="password" name="newmdp2" placeholder="Confirmation du mot de passe" /><br /><br />
                        </td>
                    </tr>

                    <tr>
                        <td></td>

                        <td align="center">
                            <br />
                            <input type="submit" value="Mettre à jour mon profil !" />
                        </td>
                    </tr>

                </table>
            </form>
            <?php if(isset($msg)) { echo '<font color="red">'.$msg. '</font>' ;} ?>
        </div>
    </div>
    </body>
    </html>
    <?php
}
else {
    header("Location: connexion.php");
}
?>

