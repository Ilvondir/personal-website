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

            $j = 0;
            for ($i=2;$i<count($dataFromFile)-1;$i+=4) {
                if ($sendToArray[$j]=="true") echo $dataFromFile[$i+1];
                $j++;
            }

            fclose($handleToFile);
        }
    }
?>