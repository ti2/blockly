'use strict';
goog.provide('Blockly.Msg.fr');
goog.require('Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "Choisir le port" ; 
Blockly.Msg.com2 = "Sélectionner un port !" ; 
Blockly.Msg.check = "Vérification " ; 
Blockly.Msg.upload = "Téléversement " ; 
Blockly.Msg.error = "ERREUR : Blocs non connectés " ;
Blockly.Msg.verif = "Vérifier d'abord le programme !"
Blockly.Msg.save = "Enregistrer au format " ; 
Blockly.Msg.update = "Mise à jour" ; 
Blockly.Msg.new_update = "Une nouvelle version est disponible, voulez-vous la télécharger et l'installer maintenant ?" ; 
Blockly.Msg.yes = "oui" ; 
Blockly.Msg.no = "non" ; 
Blockly.Msg.uptodate = "Votre version est à jour." ; 
Blockly.Msg.download = "Téléchargement terminé, l'application va s'installer puis redémarrer..." 
// commun à tous les blocs
Blockly.Msg.HELPURL="http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi"; //ne pas traduire
Blockly.Msg.pin="sur la broche";
Blockly.Msg._AT="à";
Blockly.Msg.AV="avant";
Blockly.Msg.AR="arrière";
Blockly.Msg.high="HIGH"; //ne pas traduire
Blockly.Msg.low="LOW"; //ne pas traduire
Blockly.Msg.right="droit";
Blockly.Msg.left="gauche";
Blockly.Msg.LetR="droit & gauche";
Blockly.Msg.direction="direction";
Blockly.Msg.vitesse="vitesse ";
Blockly.Msg.values = "[0-90]";
//catégories (menu)
Blockly.Msg.CAT_STOCKAGE="⊞ Stockage";
Blockly.Msg.CAT_numerique="- Binaire";
Blockly.Msg.CAT_analogique="~ Autre";
Blockly.Msg.CAT_wifi="＠ Wifi";
Blockly.Msg.CAT_TAB="▦ Tableau";
Blockly.Msg.CAT_list="▤ Liste";
Blockly.Msg.CAT_servo="↷ Servo";
Blockly.Msg.CAT_del="☄ DEL";
Blockly.Msg.CAT_LOGIC="⇋ Contrôle";
Blockly.Msg.CAT_MATH="∑ Math";
Blockly.Msg.CAT_TEXT="❝ Texte";
Blockly.Msg.CAT_VARIABLES="↝ Variable";
Blockly.Msg.CAT_FUNCTIONS="∬ Fonction";
Blockly.Msg.CAT_ARDUINO="∞ Structure";
Blockly.Msg.CAT_ARDUINO_IN="⇅ Entrée/Sortie";
Blockly.Msg.CAT_ARDUINO_OUT="☺ Sortie";
Blockly.Msg.CAT_ARDUINO_TIME="⏱ Temps";
Blockly.Msg.CAT_actionneur="↻ Actionneur";
Blockly.Msg.CAT_com="☎ Communication";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL="- Série";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL="- Logicielle";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Moteur";
Blockly.Msg.CAT_ultrason="⇣ Capteur";
Blockly.Msg.CAT_bluetooth="☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8="░ LED Bouche";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED Eyes";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD="▀ Écran LCD";
Blockly.Msg.CAT_iot="☁ IoT";
Blockly.Msg.CAT_html="✉ HTML";
Blockly.Msg.CAT_DFPLAYER="♫ Audio";
Blockly.Msg.CAT_OTTO = "⊟ Otto"; //added 06/09/2019
Blockly.Msg.CAT_OTTOH = "⊟ Humanoïde"; 
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
Blockly.Msg.CAT_NEOPIXEL = "☄ Neopixel";
Blockly.Msg.CAT_CCS811 = "Sensor CO2";
Blockly.Msg.CAT_Displays = "🖥 Displays";
Blockly.Msg.CAT_AUDIO = "♫ Audio";
Blockly.Msg.CAT_CAMERAS = "📷 Cameras";
Blockly.Msg.CAT_MUVISION = "MuVision";
Blockly.Msg.CAT_OTTO_DIY = "⊟ Otto DIY";
Blockly.Msg.CAT_SENSORS = "⇣ Sensors";
Blockly.Msg.CAT_SSENSORS = "Simple Sensors";
Blockly.Msg.CAT_LED = "Led";
Blockly.Msg.CAT_LEDRGB = "RGB Led";
Blockly.Msg.CAT_MAX7219 = "MAX7219 Matrix";
Blockly.Msg.CAT_BARGRAPH = "BarGraph";
Blockly.Msg.CAT_LCDI2C = "LCD I2C";
Blockly.Msg.CAT_RTC_DS3231 = "RTC DS3231";
Blockly.Msg.CAT_TIME_GENERAL = "General";
Blockly.Msg.CAT_BME280 = "BME280 Laser";
Blockly.Msg.CAT_VL53L0X = "VL53L0X Preassre";

//RTC DS3231
Blockly.Msg.RTCDS3231_NAME="Init RTC DS3231.I2C pins";
Blockly.Msg.RTCDS3231_RTC="Set DateTime DS3231";
Blockly.Msg.RTCDS3231_DAY="Day";
Blockly.Msg.RTCDS3231_MONTH="Month";
Blockly.Msg.RTCDS3231_YEAR="Year";
Blockly.Msg.RTCDS3231_HOUR="Hour";
Blockly.Msg.RTCDS3231_MINUTE="Minute";
Blockly.Msg.RTCDS3231_SECOND="Second";
Blockly.Msg.RTCDS3231_DOFWEEK="Day of week";
Blockly.Msg.RTCDS3231_READ_RTC="RTC DS3231.Read the date and time";
Blockly.Msg.RTCDS3231_VALUES="value";
Blockly.Msg.RTCDS3231_Name2="RTC DS3231.";
Blockly.Msg.RTCDS3231_TEXT_DOFWEEK="Day of week in string";
Blockly.Msg.RTCDS3231_TEXT_MONTH="Month in string ";


//wifi
Blockly.Msg.esp8266_init_tooltip="initialisation du module wifi et connection avec les paramètres indiqués";
Blockly.Msg.esp8266_1="Esp 8266";
Blockly.Msg.esp8266_2="ssid";
Blockly.Msg.esp8266_3="clé";
Blockly.Msg.esp8266_4="IP";
Blockly.Msg.esp8266_5="passerelle";
Blockly.Msg.esp8266_6="masque";
Blockly.Msg.esp8266_7=[["client", "client"],["serveur", "serveur"]];
Blockly.Msg.esp8266_8="port";
Blockly.Msg.esp8266_9=[["dynamique", "dynamic"],["statique", "static"]];
Blockly.Msg.esp8266_10="adressage";
Blockly.Msg.esp8266_recept_tooltip="reception";
Blockly.Msg.esp8266_url="http://julien.coron.free.fr/?p=928";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip="";
Blockly.Msg.esp8266_send_html="envoyer la page HTML";
Blockly.Msg.esp8266_start_tooltip="";
Blockly.Msg.esp8266_start="démarrer le serveur";
Blockly.Msg.esp8266_request_tooltip="";
Blockly.Msg.esp8266_request="si dans la requête on trouve";
Blockly.Msg.esp8266_request_container = "on trouve";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN='Interruption : quand un';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN="désactiver l'interruption sur la broche";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT="Spécifie une action à réaliser lorsqu'une interruption externe (4 modes possibles) survient sur la broche 2 ou 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT="Désactive l'interruption externe spécifiée précédement";
Blockly.Msg.LKL_MODE='est détecté sur la broche';
//FIELDDROPDOWN
Blockly.Msg.note=[["DO\u2083","261"],["RE\u2083","293"],["MI\u2083","329"],["FA\u2083","349"],["SOL\u2083","392"],["LA\u2083","440"],["SI\u2083","493"],["DO\u2084","523"],["RE\u2084","587"],["MI\u2084","659"],["FA\u2084","698"],["SOL\u2084","784"],["LA\u2084","880"]];
Blockly.Msg.tempo=[["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]];
Blockly.Msg.on_off=[["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink=[["lentement", "1000"],["rapidement", "100"]];
Blockly.Msg.AV_AR=[[Blockly.Msg.AV, "FORWARD"],[Blockly.Msg.AR, "BACKWARD"]];//ne pas traduire
Blockly.Msg.times=[["secondes", "s"],["millisecondes", "m"],["microsecondes", "u"]];
Blockly.Msg.time=[["secondes", "s"],["millisecondes", "m"]];
Blockly.Msg.char_lcd=[["n°1","1"],["n°2","2"],["n°3","3"],["n°4","4"],["n°5","5"],["n°6","6"],["n°7","7"],["n°8","8"]];
Blockly.Msg.rxtx=[["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]];
Blockly.Msg.FIELDDROPDOWN=[["1(état haut)", Blockly.Msg.high], ["0(état bas)",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1=[["HAUT", Blockly.Msg.high], ["BAS",Blockly.Msg.low]];
Blockly.Msg.ligne=[["1", "0"], ["2", "1"]];
Blockly.Msg.colonne=[["1","0"],["2","1"],["3","2"],["4","3"],["5","4"],["6","5"],["7","6"],["8","7"],["9","8"],["10","9"],["11","10"],["12","11"],["13","12"],["14","13"],["15", "14"],["16", "15"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF=[["allumer", Blockly.Msg.high], ["éteindre",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice=[["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar=[[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR,Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN=[['front montant', "RISING"], ['front descendant', "FALLING"], ["changement d'état", "CHANGE"], ["état bas",Blockly.Msg.low]];
Blockly.Msg.irq=[['front montant', "Pin.IRQ_RISING"], ['front descendant', "Pin.IRQ_FALLING"], ["état haut", "Pin.IRQ_HIGH_LEVEL"], ["état bas", "Pin.IRQ_LOW_LEVEL"]];
Blockly.Msg.menudht=[["humidité", "h"],["température", "t"]];
Blockly.Msg.couleur=[["bleu", "bleu"],["jaune", "jaune"],["rouge", "rouge"],["vert", "vert"]];
Blockly.Msg.sens=[["avancer", "a"],["tourner à droite", "d"],["tourner à gauche", "g"]];
//capteur
Blockly.Msg.VL53L0X="Détecteur à laser";
Blockly.Msg.VL53L0X_tooltip="initialise le détecteur.\nDétecteur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distance mesurée par laser";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nretourne la distance mesurée par laser en mm";
Blockly.Msg.bme280="Détecteur de pression atmosphérique";
Blockly.Msg.bme280_tooltip="initialise le détecteur.\nDétecteur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="pression atmosphérique";
Blockly.Msg.bme280_pressure_tooltip="retourne la pression atmosphérique en hPa";
Blockly.Msg.inter="interrupteur sur";
Blockly.Msg.inter_tooltip="retourne vrai (faux) si l'interrupteur est (n'est pas) sur la position indiquée";
Blockly.Msg.mc005="présence détectée sur la broche";
Blockly.Msg.mc005_tooltip="MC005:\nretourne vrai (faux) si une présence est (n'est pas) pressé";
Blockly.Msg.bp="bouton pressé sur la broche";
Blockly.Msg.bp_tooltip="retourne vrai (faux) si un bouton poussoir est (n'est pas) pressé";
Blockly.Msg.dht11_tooltip="DHT11 :\nretourne l'humidité de l'air (de 20 à 80%) ou \n la température (de 2 à 50°C)";
Blockly.Msg.dht22_tooltip="DHT22 :\nretourne l'humidité de l'air (de 0 à 100%) ou \n la température (de -40 à 80°C)";
Blockly.Msg.suiveur_ligne="ligne noire détectée sur la broche";
Blockly.Msg.suiveur_ligne_tooltip= "CAP227 :\nretourne vrai (faux) si une ligne noire est (n'est pas) détectée";
Blockly.Msg.light= "luminosité sur la broche";
Blockly.Msg.light_tooltip= "retourne une valeur en fonction de la luminosité\n0 : obscurité\n255 : pleine lumière";
Blockly.Msg.hum= "humidité du sol sur la broche";
Blockly.Msg.hum_tooltip= "CAP 615 :\nretourne l'humidité du sol de 0 à 100%";
Blockly.Msg.light_tooltip= "retourne une valeur en fonction de la luminosité\n0 : obscurité\n255 : pleine lumière";
Blockly.Msg.grove_ldr= "luminosité sur la broche";
Blockly.Msg.grove_ldr_tooltip= "retourne la luminosité mesurée\n0 : aucune lumière\n100 : lumière très intense";
Blockly.Msg.potar= "position du curseur sur la broche";
Blockly.Msg.potar_tooltip= "retourne une valeur en fonction de la position du curseur\n0 : curseur à gauche\n255 : curseur à droite";
Blockly.Msg.lm35= "température sur la broche";
Blockly.Msg.lm35_tooltip="LM35 :\nretourne la température mesurée en degré celcius (de 0 à 80°)";
Blockly.Msg.ultrason_1="distance < limite";
Blockly.Msg.ultrason_2="retourne un état Haut si la distance mesurée est inférieur à la limite";
Blockly.Msg.ultrason_distance1="distance mesurée par ultrason";
Blockly.Msg.ultrason_tooltip="HC-SR04 :\ncapteur à ultrason qui permet de faire des mesures de distance (de 3 cm et 4 m)\nindiquer les broches de l'arduino sur lesquelles vont être connectées TRIG et ECHO";
Blockly.Msg.ultrason="détecteur à ultrason";
Blockly.Msg.ultrason_distance2="HC-SR04 :\nretourne la distance mesurée en cm par le détecteur à ultrason";
Blockly.Msg.ultrason_helpurl="https://www.carnetdumaker.net/articles/mesurer-une-distance-avec-un-capteur-ultrason-hc-sr04-et-une-carte-arduino-genuino/";//ne pas traduire
Blockly.Msg.pir="mouvement détecté ";
Blockly.Msg.feu="flamme détectée ";
Blockly.Msg.presence="obstacle détecté ";
Blockly.Msg.appui="appui digital ";
Blockly.Msg.pir_tooltip="HC-SR501 :\nretourne vrai (faux) si une présence est (n'est pas) détectée";
Blockly.Msg.feu_tooltip="CAP168 :\nretourne vrai (faux) si une flamme est (n'est pas) détectée";
Blockly.Msg.presence_tooltip="CAP711 :\nretourne vrai (faux) si un contact a (n'a pas) lieu";
Blockly.Msg.appui_tooltip="CAP831 :\nretourne vrai (faux) si un appui est (n'est pas) détecté";
//bluetooth
Blockly.Msg.bluetooth1="si la donnée reçue par bluetooth";
Blockly.Msg.bluetooth1_tooltip= "réception de données par bluetooth\nconnecter le module HC-06 sur les broches 0 et 1\net croiser les broches Rx et Tx";
Blockly.Msg.bluetooth2= "envoyer par bluetooth";
Blockly.Msg.bluetooth2_tooltip= "envoie des données par bluetooth\nconnecter le module HC-06 sur les broches 0 et 1\net croiser les broches Rx et Tx";
Blockly.Msg.bluetooth_init_tooltip="";
Blockly.Msg.bluetooth_helpurl="http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=57&sid=cedb66db91596dd8926d167142dbf307";//ne pas traduire
//écran LCD
Blockly.Msg.lcd_fond="fond";
Blockly.Msg.LCD="écran LCD";
Blockly.Msg.LCDi2c_tooltip="initialise l'écran LCD I2C, de 2 lignes et 16 caractères avec rétro-éclairage RGB.\nAfficheur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.LCD_tooltip= "initialise l'écran LCD, de 2 lignes et 16 caractères, en indiquant les broches à connecter";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL= "http://electroniqueamateur.blogspot.fr/2017/01/utiliser-un-afficheur-lcd-2-x-16-avec.html";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT="afficher sur l'écran LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip="affiche le texte à l'emplacement indiqué";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP="écris le(s) texte(s) sur l'écran LCD";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1="ligne 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2="ligne 2";
Blockly.Msg.LCD_line="ligne";
Blockly.Msg.LCD_col="colonne";
Blockly.Msg.LCD_raz="effacer l'écran LCD";
Blockly.Msg.LCD_raz_tooltip="efface l'écran";
Blockly.Msg.lcd_aff_symbole="afficher le symbole";
Blockly.Msg.lcd_aff_symbole_tooltip="affiche le symbole qui a été défini auparavant";
Blockly.Msg.lcd_symbole="définir le symbole";
Blockly.Msg.lcd_symbole_tooltip="définition d'un caractère pour l'afficheur LCD :\n 0 éteint une pixel\n 1 allume une pixel";
// structure
Blockly.Msg.loop="Boucle";
Blockly.Msg.init="Initialisation";
Blockly.Msg.base_setup_loop="La fonction initialisation :\nElle est utilisée pour initialiser les variables, le sens des broches...\nElle n'est exécutée qu'une seule fois\nLa fonction boucle :\nC'est la partie principale du programme, tous les blocs placés ici s'éxécuteront en boucle et indéfiniment (plusieurs milliers de fois par seconde)";
Blockly.Msg.loop_tooltip="tous les blocs placés ici s'éxécuteront en boucle et indéfiniment (plusieurs milliers de fois par seconde)";
Blockly.Msg.begin_tooltip="ce bloc permet de définir l'ordre dans lequel le programme doit s'exécuter";
Blockly.Msg.begin="DÉBUT du programme";
Blockly.Msg.def="Déclaration";
Blockly.Msg.def_tooltip="tous les blocs placés ici ne s'éxécuteront qu'une seule fois, c'est ici qu'on configure les différents capteurs ou actionneurs";
Blockly.Msg.END="FIN du programme";
Blockly.Msg.END_tooltip="Stoppe le programme, les blocs placés à la suite seront ignorés";
Blockly.Msg.code_tooltip="Tapez ici une instruction qui ne se trouve pas sous forme de blocs";
//matrice
Blockly.Msg.matriceLC="mettre la DEL, ligne";
Blockly.Msg.matrice_create_aff="Créer le bloc 'afficher le symbole %1'";
Blockly.Msg.matrice_create_symbole="Créer le bloc 'définir le symbole %1'";
Blockly.Msg.matrice="matrice";
Blockly.Msg.matrice8x8_tooltip="Initialisation de la matrice à 64 DEL, il faut indiquer les broches de l'arduino sur lesquelles vont être connectées DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole="définir le symbole";
Blockly.Msg.matrice8x8_symbole_tooltip="définition d'un symbole pour la matrice :\n 0 éteint une DEL\n 1 allume une DEL";
Blockly.Msg.matrice8x8_efface="éteindre les DEL de la matrice";
Blockly.Msg.matrice8x8_aff="afficher le symbole";
Blockly.Msg.matrice8x8_binaire_tooltip="1 allume une DEL de la matrice et 0 l'éteint";
Blockly.Msg.matrice8x8_del_tooltip= "Allume (éteint) une DEL de la matrice en indiquant les coordonnées de celle-ci\nAttention la numérotation commence à 0";
Blockly.Msg.matrice8x8_aff_tooltip= "Affiche le symbole qui aura été préalablement défini";
Blockly.Msg.matrice8x8_efface_tooltip= "Eteint toutes les DEL de la matrice";
Blockly.Msg.matrice8x8_helpurl="http://tiptopboards.free.fr/arduino_forum/viewtopic.php?t=6&p=6";
Blockly.Msg.matrice16x8_tooltip="Initialisation de la matrice à 128 DEL.\nMatrice <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole="définir le symbole";
Blockly.Msg.matrice16x8_symbole_tooltip="définition d'un symbole pour la matrice :\n 0 éteint une DEL\n 1 allume une DEL";
Blockly.Msg.matrice16x8_efface="éteindre les DEL de la matrice";
Blockly.Msg.matrice16x8_aff="afficher le symbole";
Blockly.Msg.matrice16x8_binaire_tooltip="1 allume une DEL de la matrice et 0 l'éteint";
Blockly.Msg.matrice16x8_del_tooltip= "Allume (éteint) une DEL de la matrice en indiquant les coordonnées de celle-ci\nAttention la numérotation commence à 0";
Blockly.Msg.matrice16x8_aff_tooltip= "Affiche le symbole qui aura été préalablement défini";
Blockly.Msg.matrice16x8_efface_tooltip= "Eteint toutes les DEL de la matrice";
Blockly.Msg.matrice16x8_helpurl="http://";
//temps
Blockly.Msg.millis ="temps écoulé en";
Blockly.Msg.millis_start="commencer un chronométrage en";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein="retourne la durée en microsecondes d'une impulsion de niveau HAUT ou BAS appliquée sur une broche. Si le paramètre valeur est HAUT (BAS), le bloc attend que la broche passe à HAUT (BAS), commence alors le chronométrage, attend que la broche repasse au niveau BAS (HAUT) et stoppe alors le chronométrage";
Blockly.Msg.ARDUINO_BASE_DELAY="attendre";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP="Spécifier le temps d'attente en secondes, millisecondes ou microsecondes.\nLe programe ne fait rien d'autre pendant ce laps de temps";
Blockly.Msg.millis1="durée en";
Blockly.Msg.millis2="depuis le début";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP="retourne la durée en millisecondes, secondes ou microsecondes depuis que le programme a commencé";
Blockly.Msg.ARDUINO_PULSEIN="durée de l'état";
Blockly.Msg.tempo_helpurl="http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ExempleBlinkWithoutDelay";
Blockly.Msg.tempo_tooltip="Ce bloc vérifie si le temps indiqué est arrivé, si c'est le cas alors il éxécute les blocs placés à l'intérieur. Contrairement au bloc 'attendre' celui-ci n'est pas bloquant.";
Blockly.Msg.tempo1="toutes les";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="
//DEL
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT="la DEL de la carte";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP="éteint ou allume la DEL sur la carte Arduino";
Blockly.Msg.blink="faire clignoter la DEL de la carte";
Blockly.Msg.blink_tooltip= "la DEL de la carte clignote 1 ou 10 fois par seconde";
Blockly.Msg.del="la DEL connectée à la broche";
Blockly.Msg.del_tooltip="allume (éteint) la DEL connectée à la broche indiquée";
Blockly.Msg.bargraphe="bargraphe";
Blockly.Msg.bargraphe_allume="allumer les DEL du bargraphe jusqu'à";
Blockly.Msg.bargraphe_allume_tooltip="0 n'allume aucune DEL\n2,5 allume les 2 premières DEL et la 3ème à moitié\n10 allume toutes les DEL";
Blockly.Msg.bargraphe_tooltip="module bargraphe composé de 10 DEL (8 vertes, 1 jaune et 1 rouge), il faut indiquer les broches de l'arduino sur lesquelles vont être connectées DCKI et DI";
Blockly.Msg.rvb_init="DEL rvb";
Blockly.Msg.rvb_init_tooltip="indiquer les broches PWM à connecter à la DEL RVB";
Blockly.Msg.rvb_set="afficher la couleur";
Blockly.Msg.rvb_set_tooltip="affiche la couleur en fonction des 3 composantes (rouge, vert, bleu)";
Blockly.Msg.pixel1="pixel RVB";
Blockly.Msg.pixel2="mettre à jour les pixels";
Blockly.Msg.pixel3="avec la couleur";
Blockly.Msg.pixel4="nombre";
Blockly.Msg.pixel5="régler la luminosité des pixels à";
Blockly.Msg.pixel6="régler la pixel";
Blockly.Msg.pixel1_tooltip="module neopixel RVB\nindiquer la broche à connecter et le nombre de pixels";
Blockly.Msg.pixel2_tooltip="affiche les modifications apportées";
Blockly.Msg.pixel5_tooltip="règle la luminosité des pixels (de 0 à 255)";
Blockly.Msg.pixel3_tooltip="choisir la pixel à allumer ainsi que sa couleur\nAttention la numérotation commence à 0";
//sortie
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1="mettre la broche NUMERIQUE";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP="écrire un état logique 0 ou 1 sur une sortie spécifique";
Blockly.Msg.toggle="basculer l'état de la broche";
Blockly.Msg.toggle_tooltip="Toggle :\nécrire un état logique 0 si auparavant il y avait un état 1 (et inversement) sur la sortie spécifiée";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1="mettre la broche PWM";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP="envoyer une valeur comprise entre 0 et 255 sur une sortie spécifique";
//entrée
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT="état de la broche NUMERIQUE";
Blockly.Msg.in_pullup ="Pull-Up";
Blockly.Msg.in_pullup_tooltip="retourne l'état logique (0 ou 1) de la broche indiquée\nretourne 1(état haut) par défaut si pull-up activé";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP="lecture de l'état logique 0 ou 1 de la broche numérique";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT="valeur de la broche ANALOGIQUE";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP="retourne une valeur comprise entre 0 et 1023";
//audio
Blockly.Msg.play="jouer";
Blockly.Msg.play_tooltip="joue la note";
Blockly.Msg.play_helpurl="";
Blockly.Msg.beep="émettre un bip sur la broche";
Blockly.Msg.beep_TOOLTIP="émet un bip (à 440Hz pendant 1s) sur la broche selectionnée";
Blockly.Msg.ARDUINO_TONE_INPUT1="émettre un son sur la broche";
Blockly.Msg.ARDUINO_TONE_INPUT2="fréquence (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3="durée (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP="émettre un son sur la broche selectionnée, à la fréquence désirée et pendant la durée souhaitée";
Blockly.Msg.ARDUINO_NOTONE_INPUT="stopper le son sur la broche";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP="arrêter le son sur la broche selectionnée";
Blockly.Msg.lp2i_mp3_helpurl="http://ouilogique.com/tests_DFPlayer/";
Blockly.Msg.lp2i_mp3_Volume="volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay="lecture automatique";
Blockly.Msg.lp2i_mp3="lecteur MP3";
Blockly.Msg.lp2i_mp3_tooltip="DFPlayer Mini mp3 :\ninitialisation du module, du volume et du mode de fonctionnement\nModule MP3 <--> Arduino\nRx(2) <---------------> Tx(1)";
Blockly.Msg.lp2i_mp3_play="lire le fichier mp3";
Blockly.Msg.lp2i_mp3_play_track_tooltip="joue le morceau indiqué";
Blockly.Msg.lp2i_mp3_play_tooltip="joue le morceau en cours";
Blockly.Msg.lp2i_mp3_pause="mettre le fichier mp3 en pause";
Blockly.Msg.lp2i_mp3_pause_tooltip="stoppe le morceau en cours" ;
Blockly.Msg.lp2i_mp3_prev="lire le fichier mp3 précédent";
Blockly.Msg.lp2i_mp3_prev_tooltip="joue le morceau précédent";
Blockly.Msg.lp2i_mp3_vol="mettre le volume à";
Blockly.Msg.lp2i_mp3_vol_tooltip="mettre le volume à la valeur indiquée [0-48]";
Blockly.Msg.lp2i_mp3_next="lire le fichier mp3 suivant";
Blockly.Msg.lp2i_mp3_next_tooltip="joue le morceau suivant";
//servomoteur
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1="orienter le servomoteur";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE="angle [0-180]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP="rotation possible entre 0 et 180 degrés";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT="actionner le servomoteur en continue";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP="actionne le servomoteur connecté à la broche spécifiée, à la vitesse indiquée et dans le sens sélectionné";
//moteur
Blockly.Msg.mot_tooltip="Shield contrôleur de moteurs L293D :\nactionne les deux moteurs (M1 et M2) pour avancer ou tourner, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.mot_stop="arrêter";
Blockly.Msg.mot_stop_tooltip="Shield contrôleur de moteurs L293D :\nstoppe les deux moteurs (M1 et M2)";
Blockly.Msg.moteur="actionner le moteur ";
Blockly.Msg.moteurstop="arrêter le moteur ";
Blockly.Msg.moteur_tooltip="met en route le moteur à courant continu connecté à la broche indiquée, à la vitesse indiquée\nvitesse=0 --> arrêt du moteur";
Blockly.Msg.moteurdagu_tooltiprs040= "Carte RS 040 :\nactionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.moteurdagu_tooltiprs040stop= "Carte RS 040 :\nstoppe un des 2 moteurs";
Blockly.Msg.moteurdagu_tooltiprs027= "Carte RS 027 :\nactionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1="v1 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2="v2 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION="direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE=Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT="avant";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE="arrière";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP="stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1="v1 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2="v2 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT="broche";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT="pas par tour";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM=Blockly.Msg.vitesse+"(RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS="nombre de pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1="moteur DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2="moteur DC 2";
Blockly.Msg.m_pap="Moteur pas à pas";
Blockly.Msg.m_pap_step="pas";
Blockly.Msg.m_pap_step1="avancer de";
Blockly.Msg.m_pap_tooltip="Initialisation d'un moteur pas à pas.\nIndiquer le nombre de pas, la vitesse en tr/min et les broches à connecter";
Blockly.Msg.m_pap_step_tooltip="actionne le moteur pas à pas du nombre de pas indiqué, l'instruction suivante ne sera éxécutée qu'une fois la rotation du moteur effectuée";
//com série
Blockly.Msg.Serial_Init="port série sur";
Blockly.Msg.Serial_Init_tooltip="Fixe le débit de communication en nombre de caractères par seconde pour la communication série";
Blockly.Msg.Serial_Write="envoyer sur le port série";
Blockly.Msg.Serial_write_tooltip="Envoie des données sur le port série";
Blockly.Msg.Serial_read="donnée lue sur le port série";
Blockly.Msg.Serial_read_tooltip="retourne le premier octet de donnée entrant disponible dans le port série, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.Serial_available="quantité de données sur le port série";
Blockly.Msg.Serial_available_tooltip="retourne le nombre d'octet disponible dans la file d'attente du port série, ou 0 si rien n'est disponible";
Blockly.Msg.Serial_saut="un saut de ligne";
Blockly.Msg.Serial_saut_tooltip="retourne un saut de ligne sur le moniteur série";
Blockly.Msg.Serial_space="un séparateur";
Blockly.Msg.Serial_space_tooltip="retourne un espace sur le moniteur série";
Blockly.Msg.repl_read="commande entrée par l'utilisateur";
//com logicielle
Blockly.Msg.SSERIAL_Init="port logiciel sur Rx";
Blockly.Msg.SSERIAL_tooltip="Création d'un nouveau port de communication en utilisant les broches et la vitesse spécifiées";
Blockly.Msg.SSERIAL_Read="donnée lue sur le port logiciel";
Blockly.Msg.SSERIAL_Read_tooltip="retourne le premier octet de donnée entrant disponible dans le port logiciel, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.SSERIAL_Write="envoyer sur le port logiciel";
Blockly.Msg.SSERIAL_Write_tooltip="Envoie des données sur le port logiciel";
Blockly.Msg.SSERIAL_Read_tooltip="retourne le premier octet de donnée entrant disponible dans le port logiciel, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.SSERIAL_Available="quantité de données sur le port logiciel";
Blockly.Msg.SSERIAL_Available_tooltip="retourne le nombre d'octet disponible dans la file d'attente du port logiciel, ou 0 si rien n'est disponible";
////////////////////////////OTTO DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "début";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto reprend sa position d'origine";
Blockly.Msg.OTTO9H_HOME_TOOLTIP = "Otto goes to home position straight.Reserved pins: 2-leftleg 3-rightleg 4-leftfoot 5-rightfoot 6-leftArm 7-rightArm 8-Trigger US 9-Echo US and 13-Passive buzzer";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.OTTO9_CALIBRATION='étalonner ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='jambe ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='pied ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='bras ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'save Trims on EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTO9_MOVE_TEXT = "déplacement";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Otto basic movements";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["en avant", "FORWARD"], ["en arrière", "BACKWARD"], ["tourne à gauche", "LEFT"], ["tourne à droite", "RIGHT"], ["penche à gauche", "BENDLEFT"], ["penche à droite", "BENDRIGHT"], ["secoue la jambe gauche", "SHAKELEFT"], ["secoue la jambe droite", "SHAKERIGHT"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["en avant", "FORWARD"], ["en arrière", "BACKWARD"], ["tourne à gauche", "LEFT"], ["tourne à droite", "RIGHT"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "vitesse";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["lente", "600"], ["normale", "800"], ["vite", "1000"], ["très vite", "1200"], ["lumière", "1400"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["lente", "20"], ["normale", "45"], ["vite", "60"], ["très vite", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "danse";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto danse!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalker left", "moonwalkerLEFT"],  ["moonwalker right", "moonwalkerRIGHT"],["crusaito left", "crusaitoLEFT"],["crusaito right", "crusaitoRIGHT"], ["flapping front", "flappingFRONT"], ["flapping back", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "taille";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normale", "25"], ["petite", "10"], ["grande", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "faire";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto complex movements";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "geste";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Emotional sounds combined with movements";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["joyeux", "OttoHappy"], ["très joyeux", "OttoSuperHappy"], ["triste", "OttoSad"], ["dort", "OttoSleeping"], ["élan", "OttoFart"], ["confus", "OttoConfused"], ["agité", "OttoFretful"], ["amoureux", "OttoLove"], ["en colère", "OttoAngry"], ["magique", "OttoMagic"], ["vagues", "OttoWave"], ["victoire", "OttoVictory"], ["chute", "OttoFail"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "son";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Emotional sounds";
Blockly.Msg.OTTO9_SOUND_CHOICE = [["câlin", "S_cuddly"], ["OhOoh", "S_OhOoh"], ["OhOoh2", "S_OhOoh2"], ["surprise", "S_surprise"], ["bouton pressé", "S_buttonPushed"], ["mode 1", "S_mode1"], ["mode 2", "S_mode2"], ["mode 3", "S_mode3"], ["dort", "S_sleeping"], ["élan 1", "S_fart1"], ["élan 2", "S_fart2"], ["élan 3", "S_fart3"], ["joyeux", "S_happy"], ["joyeux simple", "S_happy_short"], ["très joyeux", "S_superHappy"], ["triste", "S_sad"], ["confus", "S_confused"], ["connection", "S_connection"], ["déconnection", "S_disconnection"]];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distance.Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TEXT2 = "Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Ranging distance between 2cm to 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstáculo";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["cerca", "10"],["muy cerca", "3"],["lejos", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "son. Pin A6";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touché. Pin A0";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use if conditional";
Blockly.Msg.OTTO9_GETG_TEXT = "Read the accelerations and angular velocities.I2C pins";
Blockly.Msg.OTTO9_GETG_TEXT2 = "Value";
Blockly.Msg.OTTO9_MOUTH_TEXT = "bouche";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "mouth emotion for the 8x8 LED matrix #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["happyOpen", "happyOpen"],["happyClosed", "happyClosed"],["sadOpen", "23"], ["sadClosed", "24"],["vampire1", "vamp1"], ["vampire2", "vamp2"],   ["smile", "smile"], ["heart", "heart"], ["small surprise", "smallSurprise"], ["big surprise", "bigSurprise"], ["confused", "confused"], ["0", "zero"], ["1", "one"], ["2", "two"], ["3", "three"], ["4", "four"],["5", "five"],["6", "six"],["7", "seven"],["8", "eight"],["9", "nine"], ["x", "xMouth"], ["ok", "okMouth"],["interrogation", "27"],["tongue", "tongueOut"],["culito", "culito"],  ["thunder", "thunder"], ["line", "lineMouth"], ["diagonal", "21"], ["little Uuh", "littleUuh, i"], ["dreamMouth0", "dreamMouth, 0"], ["dreamMouth1", "dreamMouth, 1"], ["dreamMouth2", "dreamMouth, 2"]];
Blockly.Msg.OTTO9_EYES_TEXT = "eyes";
Blockly.Msg.OTTO9_EYES_TEXT2 = "Pins: I2C";
Blockly.Msg.OTTO9_MOUTH_TEXT2 = "Pins: DIN A3, CS A2, CLK A1";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "eyes emotion for the 16x8 i2C LED matrix ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "eyes text";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " clear eyes";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "mouth text";
Blockly.Msg.OTTO9_CLEAR_TEXT = " clear mouth";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Turn off all LEDs of the mouth matrix 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "bras";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "move the arms!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["en l'air", "HANDSUP"], ["gauche saluer", "HANDWAVE1"], ["droit saluer", "HANDWAVE2"]];

//SIMPLE SENSORS
Blockly.Msg.BUTTON_NAME="Button";
Blockly.Msg.INTERNAL_BUTTON_NAME="Start button MRTduino board";
Blockly.Msg.BUTTON_LOGIC="Logic inverse";
Blockly.Msg.BUTTON_PRESSED="pressed?";
Blockly.Msg.BUTTON_TOUCH_NAME="Capacity Touch";
Blockly.Msg.KNOCK_NAME="Knock";
Blockly.Msg.KNOCK_DETECTED="detected?";
Blockly.Msg.TILT_NAME="Digital Tilt";
Blockly.Msg.TILT_DETECTED="detected?";
Blockly.Msg.POTE_NAME="Potentiometer";
Blockly.Msg.PERCENT="percent(0-100)%";
Blockly.Msg.VALUE="Value(0-1023)";
Blockly.Msg.PHOTO_NAME="Photo Interrupter";
Blockly.Msg.PHOTO_DETECTED="detected?";
Blockly.Msg.VAR_LM35="LM35 Temperature (ºC)";
Blockly.Msg.LDR_NAME="Photocell (LDR or CDS) ";
Blockly.Msg.LDR_DETECTED="detected?";
Blockly.Msg.IR_NAME="Infrared";
Blockly.Msg.IR_DETECTED="sensed?";
Blockly.Msg.FLAME_NAME="Flame";
Blockly.Msg.FLAME_DETECTED="detected?";
Blockly.Msg.SOUND_NAME="Sound (MIC)";
Blockly.Msg.SOUND_DETECTED="detected?";
Blockly.Msg.DHT_NAME="DHT";
Blockly.Msg.DHT_Type="Type";
Blockly.Msg.DHT_Type11="DHT11";
Blockly.Msg.DHT_Type21="DHT21";
Blockly.Msg.DHT_Type22="DHT22";
Blockly.Msg.DHT_Temp="Temperature ºC";
Blockly.Msg.DHT_Humi="Humidity";
Blockly.Msg.DHT_Head="Heat Index ºC";
Blockly.Msg.GAS_NAME="Gas CO (MQ-7)";
Blockly.Msg.GAS_DETECTED="detected?";
Blockly.Msg.ALCOHOL_NAME="Alcohol (MQ-3)";
Blockly.Msg.ALCOHOL_DETECTED="detected?";
Blockly.Msg.VIBRATION_NAME="Vibration";
Blockly.Msg.VIBRATION_DETECTED="detected?";
Blockly.Msg.HALL_NAME="Hall Magnetic";
Blockly.Msg.HALL_DETECTED="detected?";
Blockly.Msg.PIR_NAME="PIR Motion";
Blockly.Msg.PIR_DETECTED="detected?";
Blockly.Msg.VAPOR_NAME="Vapor (Steam)";
Blockly.Msg.ALIGHT_NAME="Ambient Light (TEMT6000)";
Blockly.Msg.WATER_NAME="Water level";
Blockly.Msg.MOISTURE_NAME="Soil Moisture";
Blockly.Msg.JOYSTICK_NAME="Joystick axis";
Blockly.Msg.JOYSTICK_BUTTON="Joystick button";
Blockly.Msg.JOYSTICK_PRESSED="pressed?";
Blockly.Msg.ultrasonic_ranger="HC-SR04 Ultrasonic (cm)";
Blockly.Msg.unit="Unit";
Blockly.Msg.cm="cm";
Blockly.Msg.inch="inch";
Blockly.Msg.TRIG="TRIG Trigger";
Blockly.Msg.Echo="Echo";
Blockly.Msg.VAR_TemSens="Analog NTC Temperature (ºC)";

//CCS811

Blockly.Msg.CCS811="Init CO2(CCS811) sensor";
Blockly.Msg.CCS811_name="CO2(CCS811) sensor";
Blockly.Msg.CCS811_2="- SDA-SCL and connect WAK to GND";
Blockly.Msg.CCS811_available="Is the sensor available?";
Blockly.Msg.CCS811_readed = "Is the measure readed?";
Blockly.Msg.CCS811_values="value";

//LCD I2C
Blockly.Msg.LCD_I2C_setup = "Init LCD I2C Address";
Blockly.Msg.LCDP_Column = "Columns";
Blockly.Msg.LCDP_Row = "Rows";
Blockly.Msg.LCDP_Column2 = "column";
Blockly.Msg.LCDP_Row2 = "row";
Blockly.Msg.LCDP_Print = "and print";
Blockly.Msg.LCDP_Clear = "LCD I2C clear";
Blockly.Msg.LCDP_scrollDisplay = "LCD I2C scroll display ";
Blockly.Msg.LCDP_setBcklight = "LCD I2C set Backlight ";
Blockly.Msg.LCDP_showCursor = "LCD I2C show Cursor ";
Blockly.Msg.LCDP_blinkCursor = "LCD I2C blink Cursor ";
Blockly.Msg.LCDP_Home = "LCD I2C home";
Blockly.Msg.LCDP_SetCursor = "LCD I2C set cursor";
Blockly.Msg.LCDP_Display = "LCD I2C ";


//REMOTE CONTROL IR
Blockly.Msg.KEY="Key";
Blockly.Msg.GENERAL_IR="Remote Control IR";
Blockly.Msg.GENERAL_PRESSED="Read key";
Blockly.Msg.PIN="PIN";

//OPEN SMART MP3
Blockly.Msg.MP3OS_name = "Mp3 OpenSmart";
Blockly.Msg.MP3OS_init = "Init Mp3 Opensmart using software serial";
Blockly.Msg.MP3OS_TX="Port TX#";
Blockly.Msg.MP3OS_RX="Port RX#";
Blockly.Msg.MP3OS_equalizer = "Set equalizer";
Blockly.Msg.MP3OS_volumen = "Set volumen(0-30)";
Blockly.Msg.MP3OS_operation = "Operation:";
Blockly.Msg.MP3OS_check = "Check mp3.Need to be executed in main loop";
Blockly.Msg.MP3OS_playsong = "Play track number";
Blockly.Msg.MP3OS_playsongdirectory = "in folder number";
Blockly.Msg.MP3OS_inject="Inject track number";

//Mu Vision

/*Help*/
Blockly.LKL_VS2_HELP_INIT = "initialize MU vision sensor, and choose the port.";     
Blockly.LKL_VS2_HELP_VISION_LEVEL = 'Set the recognition level, the level increases, the false alarm rate decreases, and the recognition rate will decrease accordingly.';//'设置识别等级，等级升高，误报率降低，识别率也会相应降低';
Blockly.LKL_VS2_HELP_VISION_ZOOM = 'Set the image zoom level, the level is raised, the farther the recognition distance is, the smaller the recognition angle is.';//'设置图像缩放等级，等级升高，识别距离越远，识别角度越小';

/*Warning**/
Blockly.LKL_VS2_WARNING_SETUP_ONLY = 'This block can only be placed in the setup block!';
Blockly.LKL_VS2_WARNING_MU_INIT = 'Please DON\'T forget initialize the uart1, Serial1. Configure the bauds too';             //'请勿同时使用Serial连接MU与电脑打印字符，此操作会导致电脑端打印字符错乱或通信异常';


//LED color type
Blockly.LKL_VS2_LED_CLOSE = 'Close';					//'关闭';
Blockly.LKL_VS2_LED_RED = 'Red';						//'红色';
Blockly.LKL_VS2_LED_GREEN = 'Green';					//'绿色';
Blockly.LKL_VS2_LED_YELLOW = 'Yellow';					//'黄色';
Blockly.LKL_VS2_LED_BLUE = 'Blue';						//'蓝色';
Blockly.LKL_VS2_LED_PURPLE = 'Purple';					//'紫色';
Blockly.LKL_VS2_LED_CYAN = 'Cyan';						//'青色';
Blockly.LKL_VS2_LED_WHITE = 'White';					//'白色';
//Vision Zoom
Blockly.LKL_VS2_AUTO = 'auto';							//'自动';
Blockly.LKL_VS2_VISION_ZOOM = 'Zoom';					//'缩放';
//Vision Level
Blockly.LKL_VS2_LEVEL = 'level';						//'等级';
Blockly.LKL_VS2_HIGH_SPEED = 'highSpeed';				//'速度优先';
Blockly.LKL_VS2_NORMAL = 'normal';						//'性能均衡';
Blockly.LKL_VS2_HIGH_ACCURACY = 'highAccuracy';			//'准确度优先';
//UART status
Blockly.LKL_VS2_UART_OPEN = 'Open';						//'打开';
Blockly.LKL_VS2_UART_CLOSE = 'Close';					//'关闭';
//Vision type
Blockly.LKL_VS2_COLOR_BLOCK = 'ColorBlock';             //'色块';
Blockly.LKL_VS2_VISION_COLOR_DETECT = 'ColorBlock';	    //'色块检测';
Blockly.LKL_VS2_VISION_COLOR_RECOGNITION = 'ColorRecognition';	//'颜色识别';
Blockly.LKL_VS2_VISION_BALL = 'Ball';					//'球';
Blockly.LKL_VS2_VISION_LINE = 'Line';					//'线条';
Blockly.LKL_VS2_VISION_BODY = 'Body';					//'人体';
Blockly.LKL_VS2_VISION_FACE = 'Face';					//'人脸';
Blockly.LKL_VS2_VISION_TRAFFIC_CARD = 'TrafficCard';	//'交通卡片';
Blockly.LKL_VS2_VISION_SHAPE_CARD = 'ShapeCard';		//'形状卡片';
Blockly.LKL_VS2_VISION_NUM_CARD = 'NumberCard';			//'数字卡片';
//Card type
Blockly.LKL_VS2_CARD_CIRCLE = 'Circle';					//'圆形';
Blockly.LKL_VS2_CARD_TRIANGLE = 'Triangle';				//'三角形';
Blockly.LKL_VS2_CARD_SQUARE = 'Square';					//'方形';
Blockly.LKL_VS2_CARD_TICK = 'Tick';						//'钩';
Blockly.LKL_VS2_CARD_CROSS = 'Cross';					//'叉';
Blockly.LKL_VS2_CARD_STRAIGHT = 'Straight';				//'向前';
Blockly.LKL_VS2_CARD_TURN_LEFT = 'TurnLeft';			//'向左';
Blockly.LKL_VS2_CARD_TURN_RIGHT = 'TurnRight';			//'向右';
Blockly.LKL_VS2_CARD_TURN_AROUND = 'TurnAround';		//'掉头';
Blockly.LKL_VS2_CARD_WHISTLE = 'Whistle';				//'鸣笛';
Blockly.LKL_VS2_CARD_STOP = 'Stop';						//'停止';
//Vision state
Blockly.LKL_VS2_STATE_VALUE_X = 'Horizontal';			//'横向坐标';
Blockly.LKL_VS2_STATE_VALUE_Y = 'Vertical';				//'纵向坐标';
Blockly.LKL_VS2_STATE_VALUE_WIDTH = 'Width';			//'宽度';
Blockly.LKL_VS2_STATE_VALUE_HEIGHT = 'Height';			//'高度';
Blockly.LKL_VS2_STATE_VALUE_R_CHANNEL = 'ChannelR';		//'红色通道';
Blockly.LKL_VS2_STATE_VALUE_G_CHANNEL = 'ChannelG';		//'绿色通道';
Blockly.LKL_VS2_STATE_VALUE_B_CHANNEL = 'ChannelB';		//'蓝色通道';
Blockly.LKL_VS2_STATE_VALUE_LABEL = 'Label';			//'标签';
//True False
Blockly.LKL_VS2_TRUE = 'True';							//'是';
Blockly.LKL_VS2_FALSE = 'False';						//'否';
//Enable Disable
Blockly.LKL_VS2_ENABLE = 'enable';						//'开启';
Blockly.LKL_VS2_DISABLE = 'disable';					//'关闭';
//Camera AWB
Blockly.LKL_VS2_LOCK_AWB = 'LockAWB';					//'锁定白平衡';
Blockly.LKL_VS2_WHITE_LIGHT = 'WhiteLight';				//'白光模式';
Blockly.LKL_VS2_YELLOW_LIGHT = 'YellowLight';			//'黄光模式';
Blockly.LKL_VS2_ALL = 'All';                            //'所有';

//Other
Blockly.LKL_VS2_COLOR = 'color';						//'颜色';
Blockly.LKL_VS2_DEFAULT = 'default';                    //'默认';
Blockly.LKL_VS2_LOW = 'low';                            //'低';
Blockly.LKL_VS2_MID = 'middle';                         //'中';
Blockly.LKL_VS2_HIGH = 'high';                          //'高';

/*模块文本*/
Blockly.LKL_VS2_MU = 'initialize';									//'初始化';
Blockly.LKL_VS2_MODE = 'mode';										//'模式';
Blockly.LKL_VS2_SetupVS = 'setup';          						//'设置';
Blockly.LKL_VS2_SET_RECOGNITION_REGION = 'set recognition region';  //'设置识别区域';
Blockly.LKL_VS2_SET_MIN_RECOGNITION_SIZE = 'set min recognition size';//'设置最小识别尺寸';
Blockly.LKL_VS2_SERIAL = 'port';									//'端口';
Blockly.LKL_VS2_ADDRESS = 'address';								//'地址';
Blockly.LKL_VS2_RESET = 'reset to default';						    //'恢复默认设置';
Blockly.LKL_VS2_LED_DETECT_COLOR = 'when detected then';			//'识别到物体亮';
Blockly.LKL_VS2_LED_UNDETECT_COLOR = 'else';				        //'没识别到物体亮';
Blockly.LKL_VS2_BRIGHTNESS = 'brightness';							//'亮度';
Blockly.LKL_VS2_VISION_TYPE = 'algorithm';						    //'算法';
Blockly.LKL_VS2_SET_VISION_LEVEL = 'level';				            //'设置识别等级';
Blockly.LKL_VS2_SET_FRAME_ROTATE = 'rotate Frame';					//'图像翻转';
Blockly.LKL_VS2_SET_CAMERA_HFR = 'high FPS mode';   				//'高帧率模式';
Blockly.LKL_VS2_SET_CAMERA_AWB = 'camera white balance';			//'摄像头白平衡';
Blockly.LKL_VS2_SET_VISION_ZOOM = 'zoom';   					    //'图像缩放等级';
Blockly.LKL_VS2_SET_UART_BAUD = 'UART baudrate';					//'串口波特率';
Blockly.LKL_VS2_DETECTED = 'detected';								//'检测到';
Blockly.LKL_VS2_RECOGNIZED = 'recognized';                          //'识别到';
Blockly.LKL_VS2_GET_DETECTED_MESSAGE = 'get';						//'获取';
Blockly.LKL_VS2_VALUE = 'value';									//'值';
Blockly.LKL_VS2_GET_PIX_COLOR = 'get Position';						//'捕获坐标';
Blockly.LKL_VS2_CARD_TYPE = 'type';								    //'卡片类型';
Blockly.LKL_VS2_SET_DETECT_COLOR = 'setDetectColor';				//'设置识别颜色';
Blockly.LKL_VS2_COORDINATE = 'coordinate';                          //'坐标';

// Light sensor
Blockly.LKL_VS2_LIGHT_SENSOR = 'light sensor';                      //'光线传感器';
Blockly.LKL_VS2_SET = 'set';                                        //'设置';
Blockly.LKL_VS2_SENSITIVITY = 'sensitivity';                        //'灵敏度';
Blockly.LKL_VS2_WB_CORRECTION = 'white balance correction';         //'白平衡校准';
Blockly.LKL_VS2_READ = 'read';                                      //'读取';
Blockly.LKL_VS2_PROXIMITY = 'proximity detection';                  //'接近检测';
Blockly.LKL_VS2_ALS = 'ambient light detection';                    //'环境光检测';
Blockly.LKL_VS2_GESTURE_SENSOR = 'gesture detection';               //'手势检测';
Blockly.LKL_VS2_GESTURE = 'gesture';                                //'手势';
Blockly.LKL_VS2_GESTURE_UP = 'upward';                              //'上划';
Blockly.LKL_VS2_GESTURE_DOWN = 'downward';                          //'下划';
Blockly.LKL_VS2_GESTURE_LEFT = 'leftward';                          //'左划';
Blockly.LKL_VS2_GESTURE_RIGHT = 'rightward';                        //'右划';
Blockly.LKL_VS2_GESTURE_LIFT_UP = 'pull';                           //'上抬';
Blockly.LKL_VS2_GESTURE_PUSH_DOWN = 'push';                         //'下压';

// AT WiFi
Blockly.LKL_VS2_SSID = "ssid";                                      //"名称";
Blockly.LKL_VS2_PASSWORD = "password";                              //"密码";
Blockly.LKL_VS2_WAIT_CONNECT = "connection succeeded";              //"连接成功";
Blockly.LKL_VS2_DISCONNECT = "disconnect";                          //"断开连接";
Blockly.LKL_VS2_CLIENT = "client";                                  //"客户端";
Blockly.LKL_VS2_HOT_SPOT = "hot-spot";                              //"热点";
Blockly.LKL_VS2_TARGET_IP = "target IP";                            //"目标IP";
Blockly.LKL_VS2_LOCAL_IP = "local IP";                              //"本地IP";
Blockly.LKL_VS2_WRITE = "write";                                    //"写入";

// SOFTWARE SERIAL FOR BT
Blockly.Msg.SSERIAL_BT_Init="Init Bluetooth SoftwareSerial";
Blockly.Msg.SSERIAL_BT_TX="Pin TX#";
Blockly.Msg.SSERIAL_BT_RX="Pin RX#";
Blockly.Msg.SSERIAL_BT_BAUD="Baudios";
Blockly.Msg.SSERIAL_BT_Read="SoftwareSerial BT Read byte";
Blockly.Msg.SSERIAL_BT_Println="SoftwareSerial BT Print on new line";
Blockly.Msg.SSERIAL_BT_Print="SoftwareSerial BT Print on same line";
Blockly.Msg.SSERIAL_BT_Write="SoftwareSerial BT write"
Blockly.Msg.SSERIAL_BT_Avai="SoftwareSerial BT Available?";
Blockly.Msg.SSerial_BT_Print_Format="SoftwareSerial BT Print  Format";
Blockly.Msg.SSERIAL_BT_ReadNum="SoftwareSerial BT Read as number";
Blockly.Msg.SSERIAL_BT_ReadString="SoftwareSerial BT Read String";
Blockly.Msg.SSERIAL_BT_Readlf="until line feed";