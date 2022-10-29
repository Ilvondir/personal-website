<?php
if (isset($_POST['person']) && isset($_POST['email']) && isset($_POST['content'])) {
    $person = $_POST['person'];
    $email = $_POST['email'];
    $content = $_POST['content'];

    if ($person=="" || $email=="" || $content=="") {
        echo "Wprowadź wszystkie dane, aby wysłać maila!";
    } else {

        $return = "";

        if (isset($_POST["QNewsletter"])) {
            $readHandleToFile = fopen("../xml/newsletter.xml", "r+");

            $newData = array();
            $newData[0] = "\t<subscriber>\n";
            $newData[1] = "\t\t<name>". mb_strtoupper($person). "</name>\n";
            $newData[2] = "\t\t<email>". mb_strtoupper($email). "</email>\n";
            $newData[3] = "\t</subscriber>\n";

            $alreadyAtNewsletter = false;

            $dataFromFile = array();
            $i = 0;
            while (!feof($readHandleToFile)) {
                $line = fgets($readHandleToFile);
                $dataFromFile[$i] = $line;
                if ($newData[2] == $line) $alreadyAtNewsletter = true;
                $i++;
            }
            fclose($readHandleToFile);

            if (!$alreadyAtNewsletter) {
                $writeHandleToFile = fopen("../xml/newsletter.xml", "w+");
                $newFileData = "";

                for ($i=0;$i<count($dataFromFile)+4;$i++) {
                    if ($i<=1) $newFileData .= $dataFromFile[$i];
                    if ($i>=6) $newFileData .= $dataFromFile[$i-4];
                    if ($i>=2 && $i<=5) $newFileData .= $newData[$i-2];
                }

                fwrite($writeHandleToFile, $newFileData);
                $return .= "Email został pomyślnie zapisany do newslettera.<br>";

                fclose($writeHandleToFile);
            } else {
                $return .= "Ten email jest już zapisany na newsletter.<br>";
            }
        }

        $mailToRecipient = mail($email, "Potwierdzenie nadania maila.", "<html><body>Hej!<br>Tu <b>Michał Komsa</b>!<br>Otrzymałem Twojego maila i wkrótce go rozpatrzę.<br><br>Z poważaniem:<br>Komsa Michał</body></html>", "From: Michał Komsa\r\nContent-type: text/html; charset=utf-8");

        $mailToMe = mail("komsa.m@o2.pl", "Wiadomość ze strony od ". $person, $content, "From: ".$email . "\r\nContent-type: text/html; charset=utf-8\r\nReply-To: ".$email);
        
        if ($mailToRecipient && $mailToMe) {
            $return .= "Udało się poprawnie wysłać maila. Sprawdź swoją skrzynkę odbiorczą.";
        } else {
            $return .= "Podczas wysyłania maila wystąpił błąd.";
        }

        echo $return;
    }
}
?>