<?php
    if (isset($_POST["subject"]) && isset($_POST["content"]) && isset($_POST["sendTo"])) {
        $subject = $_POST["subject"];
        $content = $_POST["content"];
        $sendToArray = $_POST["sendTo"];

        if ($subject=="" || $content=="") {
            echo "Wprowadź wymagane dane, aby wysłać maila.";
        } else {

            $handleToFile = fopen("../xml/newsletter.xml", "r+");

            $dataFromFile = array();
            $i = 0;
            while (!feof($handleToFile)) {
                $line = fgets($handleToFile);
                $dataFromFile[$i] = $line;
                $i++;
            }
            fclose($handleToFile);

            $everythingSended = TRUE;
            $j = 0;
            for ($i=2;$i<count($dataFromFile)-1;$i+=4) {
                if ($sendToArray[$j]=="true") {

                    $email = substr($dataFromFile[$i+2], 9, strlen($dataFromFile[$i+2])-18);

                    $header = "From: Michał Komsa\r\n";
                    $header .= "Content-type: text/html; charset=utf-8";

                    if (!mail($email, $subject, $content, $header)) $everythingSended = FALSE;
                };
                $j++;
            }

            if ($everythingSended) echo "Twój newsletter został pomyślnie wysłany.";
            else echo "Podczas wysyłania newslettera wystąpił błąd.";

        }
    }
?>