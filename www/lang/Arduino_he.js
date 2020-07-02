'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "בחר יציאה";
Blockly.Msg.com2 = "🔔 בחר יציאה בבקשה" ;
Blockly.Msg.check = "בודק...";
Blockly.Msg.upload = "מעלה...";
Blockly.Msg.error = "🔔 שגיאה! רובוט לא מחובר";
Blockly.Msg.verif = "🔔 בדוק את הקוד "
Blockly.Msg.save = "שמור כפורמט";
Blockly.Msg.update = "עדכון";
Blockly.Msg.new_update = "A new version is available, do you want to download and install it now?" ;
Blockly.Msg.yes = "כן";
Blockly.Msg.no = "לא";
Blockly.Msg.uptodate = "💯 Version is up to date!" ;
Blockly.Msg.download = "ההורדה הושלמה, האפליקציה תפעיל עצמה מחדש..."
// common to all blocks
Blockly.Msg.HELPURL = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pin = "בחיבור";
Blockly.Msg._AT = "ב";
Blockly.Msg.AV = "קדימה";
Blockly.Msg.AR = "אחורה";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "ימינה";
Blockly.Msg.left = "שמאלה";
Blockly.Msg.LetR = "ימינה ושמאלה";
Blockly.Msg.direction = "כיוון";
Blockly.Msg.vitesse = "מהירות ";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "⊞ אחסון";
Blockly.Msg.CAT_numerique = "- דיגיטלי";
Blockly.Msg.CAT_analogique = "~ אנלוגי";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ טבלה";
Blockly.Msg.CAT_list = "▤ רשימה";
Blockly.Msg.CAT_servo = "↷ סרבו";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ לוגי";
Blockly.Msg.CAT_MATH = "∑ מתמטי";
Blockly.Msg.CAT_TEXT = "❝ טקסט";
Blockly.Msg.CAT_VARIABLES = "↝ משתנה";
Blockly.Msg.CAT_FUNCTIONS = "∬ פונקציה";
Blockly.Msg.CAT_ARDUINO = "∞ מבנה";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ חיישנים/תקשורת";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ יציאה";
Blockly.Msg.CAT_ARDUINO_TIME = "◌ זמן";
Blockly.Msg.CAT_actionneur = "↻ מנוע";
Blockly.Msg.CAT_com = "☎ תקשורת";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- סריאלי";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- תוכנתי";
Blockly.Msg.CAT_ARDUINO_moteur="↻ מנוע DC";
Blockly.Msg.CAT_ultrason = "⇣ חיישן";
Blockly.Msg.CAT_bluetooth = "☏ בלוטוס";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ מטריצה LED";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ עיניים LED";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ מסך LCD";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ שמע";
Blockly.Msg.CAT_OTTO = "⊟ אוטטו";
Blockly.Msg.CAT_OTTOH = "⊟ הומנואיד";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
//Wireless
Blockly.Msg.esp8266_init_tooltip = "initialization of the wifi module and connection with the indicated parameters";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "key";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["client", "client"], ["server", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dynamic", "dynamic"], ["static", "static"]];
Blockly.Msg.esp8266_10 = "address";
Blockly.Msg.esp8266_recept_tooltip = "reception";
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/esp";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "send HTML page";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "start server";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "if in the query we find";
Blockly.Msg.esp8266_request_container = "we find";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interrupt: when a';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "disable interrupt on pin";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Specifies an action to take when an external interrupt (4 possible modes) occurs on pin 2 or 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Disable the previously specified external interrupt";
Blockly.Msg.LKL_MODE = 'is detected on the pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["שניות", "s"], ["מילישניות", "m"], ["מיקרושניות", "u"]];
Blockly.Msg.time = [["שניות", "s"], ["מילישניות", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(high state)", Blockly.Msg.high], ["0(low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["DOWN", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["turn on", Blockly.Msg.high], ["turn off", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['rising edge', 'RISING'], ['falling edge', 'FALLING'], ['changing state', 'CHANGE'], ['low state', Blockly. Msg.low]];
Blockly.Msg.irq = [['rising edge', 'Pin.IRQ_RISING'], ['falling edge', 'Pin.IRQ_FALLING'], ['high state', 'Pin.IRQ_HIGH_LEVEL'], ["low state "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["humidity", "h"], ["temperature", "t"]];
Blockly.Msg.couleur = [["blue", "blue"], ["yellow", "yellow"], ["red", "red"], ["green", "green"]];
Blockly.Msg.sens = [["forward", "a"], ["turn right", "d"], ["turn left", "g"]];
//sensor
Blockly.Msg.VL53L0X="חיישן מרחק לייזר";
Blockly.Msg.VL53L0X_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="מחרק נמדד על ידי לייזר";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nreturn Distance measured by laser in mm";
Blockly.Msg.bme280="חיישן לחץ אטמוספרי";
Blockly.Msg.bme280_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="atmospheric pressure";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\nreturn atmospheric pressure in hPa";
Blockly.Msg.inter="מצד בתג";
Blockly.Msg.inter_tooltip="returns true (false) if the switch is (is not) at the indicated position";
Blockly.Msg.mc005="נוכחות זוהתה בחיבור";
Blockly.Msg.mc005_tooltip="MC005:\nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.bp = "כפתור נלחץ בחיבור";
Blockly.Msg.bp_tooltip = "returns true (false) if a pushbutton is (is not) pressed";
Blockly.Msg.dht11_tooltip="DHT11 :\nreturns the humidity of the air (from 20 to 80%) or \n the temperature (from 2 to 50�C)";
Blockly.Msg.dht22_tooltip = "DHT22: \nreturns the humidity of the air (from 0 to 100%) or \n the temperature (from -40 to 80 � C)";
Blockly.Msg.suiveur_ligne = "black line detected on the pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nreturns true (false) if a black line is (is not) detected";
Blockly.Msg.light = "בהירות נמדדה בחיבור";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.hum = "soil moisture on the pin";
Blockly.Msg.hum_tooltip = "CAP 615: \nreturns soil moisture from 0 to 100%";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.grove_ldr = "בהירות בחיבור";
Blockly.Msg.grove_ldr_tooltip = "returns the measured brightness \n0: no light \n100: very intense light";
Blockly.Msg.potar = "cursor position on the pin";
Blockly.Msg.potar_tooltip = "returns a value based on the cursor position \n0: cursor left \n255: cursor right";
Blockly.Msg.lm35 = "temperature on the pin";
Blockly.Msg.lm35_tooltip = "LM35: \nreturns the measured temperature in degrees celcius (from 0 to 80 �)";
Blockly.Msg.ultrason_1 = "מרחק < גבול";
Blockly.Msg.ultrason_2 = "מחזיר ערך אמת אם המרחק קטן מהגבול";
Blockly.Msg.ultrason_distance1 = "מרחק נמדד על ידי אולטראסוני";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSound sensor that allows to make distance measurements (of 3 cm and 4 m) \nindicate the pins of the Arduino to which will be connected TRIG and ECHO";
Blockly.Msg.ultrason = "חיישן מרחק אולטראסוני";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nreturns the distance measured in cm by the ultrasonic detector";
Blockly.Msg.ultrason_helpurl = "https://www.carnetdumaker.net/articles/mesurer-une-distance-avec-un-capteur-ultrason-hc-sr04-et-une-carte-arduino-genuino/"; // do not translate
Blockly.Msg.pir = "motion detected ";
Blockly.Msg.feu = "flame detected ";
Blockly.Msg.presence = "זוהה חפץ ";
Blockly.Msg.appui = "מגע ";
Blockly.Msg.pir_tooltip = "HC-SR501: \nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.feu_tooltip = "CAP168: \nreturns true (false) if a flame is (is not) detected";
Blockly.Msg.presence_tooltip = "CAP711: \nreturns true (false) if a contact has (did not) take place";
Blockly.Msg.appui_tooltip = "CAP831: \nreturns true (false) if a support is (is not) detected";
// bluetooth
Blockly.Msg.bluetooth1 = "אם המידע המתקבל על ידי הבלוטוס";
Blockly.Msg.bluetooth1_tooltip = "bluetooth data reception \nconnecting module HC-06 to pins 0 and 1 \net cross Rx and Tx pins";
Blockly.Msg.bluetooth2 = "שלח באמצעות בלוטוס";
Blockly.Msg.bluetooth2_tooltip = "sends data via bluetooth \nconnecting module HC-06 to pins 0 and 1 \net cross pins Rx and Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate
//LCD screen
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "LCD screen";
Blockly.Msg.LCDi2c_tooltip = "initializes the 2-line, 16-character I2C LCD with RGB backlight. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "show on LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "display the text in the specified location";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "write the text (s) on the LCD screen";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "line 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "line 2";
Blockly.Msg.LCD_line = "line";
Blockly.Msg.LCD_col = "column";
Blockly.Msg.LCD_raz = "erase the LCD screen";
Blockly.Msg.LCD_raz_tooltip = "clear screen";
Blockly.Msg.lcd_aff_symbole = "display the symbol";
Blockly.Msg.lcd_aff_symbole_tooltip = "show the symbol that has been defined before";
Blockly.Msg.lcd_symbole = "define the symbol";
Blockly.Msg.lcd_symbole_tooltip = "definition of a character for the LCD: \n 0 turns off a pixel \n 1 lights a pixel";
// structure
Blockly.Msg.loop = "לולאה";
Blockly.Msg.init = "הגדרות";
Blockly.Msg.base_setup_loop = "The initialization function: \nIt is used to initialize the variables, the direction of the pins ... \nIt is executed only once \nThe loop function: \nThis is the main part of the program, all the blocks placed here will run in loop and indefinitely (several thousand times per second) ";
Blockly.Msg.loop_tooltip = "all blocks placed here will run in a loop and indefinitely (several thousand times per second)";
Blockly.Msg.begin_tooltip = "this block is used to define the order in which the program should execute";
Blockly.Msg.begin = "התחלה";
Blockly.Msg.def = "הצהרה";
Blockly.Msg.def_tooltip = "all the blocks placed here will only be executed once, this is where the different sensors or actuators are configured";
Blockly.Msg.END = "סוף";
Blockly.Msg.END_tooltip = "סוף התוכנה, בלוקים שיופיע מתחת לא יעבדו";
Blockly.Msg.code_tooltip = "Type an instruction here that is not in blocks";
//matrix
Blockly.Msg.matriceLC = "הפעל מנורות LED, שורה";
Blockly.Msg.matrice_create_aff = "Create block 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Create the block 'set the symbol %1'";
Blockly.Msg.matrice = "מטריצה";
Blockly.Msg.matrice8x8_tooltip = "Initialisation of the matrix to 64 LEDs, it is necessary to indicate the pins of the arduino to which will be connected DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "הגדר את הסימן";
Blockly.Msg.matrice8x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turn off an LED \n 1 turn on an LED";
Blockly.Msg.matrice8x8_efface = "מחק מטריצה";
Blockly.Msg.matrice8x8_aff = "הצג את הסימן";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice8x8_del_tooltip = "Turns on (off) an LED in the array indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice8x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice8x8_helpurl = "http://tiptopboards.free.fr/arduino_forum/viewtopic.php?t=6&p=6";
Blockly.Msg.matrice16x8_tooltip = "Initialization of the array to 128 LEDs. \nMatrix <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "define the symbol";
Blockly.Msg.matrice16x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turns off an LED \n 1 turns on an LED";
Blockly.Msg.matrice16x8_efface = "כבה מנורות במטריצה";
Blockly.Msg.matrice16x8_aff = "הצג את הסימן";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice16x8_del_tooltip = "Turns on (off) an LED in the matrix indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice16x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="הזמן שעבר ב";
Blockly.Msg.millis_start="התחל שמירה על זמן";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "returns the duration in microseconds of a UP or DOWN pulse applied to a pin.If the parameter value is HIGH, the block waits for the pin to go HIGH, starts then the timing, waits for the pin to go back to the LOW level and then stop the timing ";
Blockly.Msg.ARDUINO_BASE_DELAY = "חכה";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Specify the wait time in seconds, milliseconds or microseconds. \nThe program does nothing else during this time";
Blockly.Msg.millis1 = "משך זמן ב";
Blockly.Msg.millis2 = "מההתחלה";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "returns the duration in milliseconds, seconds or microseconds since the program started";
Blockly.Msg.ARDUINO_PULSEIN = "state duration";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";
Blockly.Msg.tempo_tooltip = "This block checks if the indicated time has arrived, if it is the case then it executes the blocks placed inside .. Unlike the block 'to wait' this one is not blocking." ;
Blockly.Msg.tempo1 = "הכל";
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
// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "the LED on the board";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Turn off or turn on the LED on the Arduino board";
Blockly.Msg.blink = "blink the board LED";
Blockly.Msg.blink_tooltip = "The board LED flashes 1 or 10 times per second";
Blockly.Msg.del = "the LED in pin";
Blockly.Msg.del_tooltip = "turns on (off) the LED connected to the indicated pin";
Blockly.Msg.bargraphe = "bargraph";
Blockly.Msg.bargraphe_allume="turn on LEDs to";
Blockly.Msg.bargraphe_allume_tooltip="0 lights no LEDs \n2,5 lights up the first 2 LEDs and the 3rd half turns on \n10 turns on all LEDs";
Blockly.Msg.bargraphe_tooltip = "bargraph module composed of 10 LEDs (8 green, 1 yellow and 1 red), it is necessary to indicate the pins of the arduino on which will be connected DCKI and DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indicate the PWM pins to connect to the RGB LED";
Blockly.Msg.rvb_set="show color";
Blockly.Msg.rvb_set_tooltip="displays a color indicating a value for the three components (red, green, blue)";
Blockly.Msg.pixel1 = "RGB NeoPixel";
Blockly.Msg.pixel2 = "update pixels";
Blockly.Msg.pixel3 = "with color";
Blockly.Msg.pixel4 = "number";
Blockly.Msg.pixel5 = "set pixel brightness to";
Blockly.Msg.pixel6 = "set the pixel";
Blockly.Msg.pixel1_tooltip="neopixel RGB module indicate the pin to be connected and the number of pixels";
Blockly.Msg.pixel2_tooltip="show changes made";
Blockly.Msg.pixel5_tooltip="adjusts pixel brightness (from 0 to 255)";
Blockly.Msg.pixel3_tooltip="choose the pixel to light and its color \ nCaution the numbering starts at 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "שלח אל חיבור";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 logical state to a specific output";
Blockly.Msg.toggle = "החלף את מצב החיבור";
Blockly.Msg.toggle_tooltip = "Toggle: \n write a logical state 0 if before there was a state 1 (and vice versa) on the specified output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "put the PWM pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "מצב חיבור דיגיטלי";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "returns the logical state (0 or 1) of the indicated pin \nreturns 1 (high state) by default if pull-up enabled";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "read logical state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "ערך חיבור אנלוגי";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
// audio
Blockly.Msg.play = "נגן";
Blockly.Msg.play_tooltip = "נגן את התו";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "צפצוף ביציאה";
Blockly.Msg.beep_TOOLTIP = "beeps (at 440Hz for 1s) on the selected pin";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "השמע סאונד ביציאה";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "תדר (הרץ)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "משך זמן (מילישניות)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emit a sound on the selected pin, at the desired frequency and for the desired duration";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "הפסק סאונד ביציאה";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "stop the sound on the selected pin";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";
Blockly.Msg.lp2i_mp3_Volume = "עוצמה [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "MP3 player";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninitialization of the module, volume and operating mode \nModule MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "play the mp3 file";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "play the specified song";
Blockly.Msg.lp2i_mp3_play_tooltip = "plays the current song";
Blockly.Msg.lp2i_mp3_pause = "pause mp3 file";
Blockly.Msg.lp2i_mp3_pause_tooltip = "stop the current song";
Blockly.Msg.lp2i_mp3_prev = "read the previous mp3 file";
Blockly.Msg.lp2i_mp3_prev_tooltip = "play the previous track";
Blockly.Msg.lp2i_mp3_vol = "set the volume to";
Blockly.Msg.lp2i_mp3_vol_tooltip = "set the volume to the specified value [0-48]";
Blockly.Msg.lp2i_mp3_next = "read the following mp3 file";
Blockly.Msg.lp2i_mp3_next_tooltip = "plays the next song";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "סובב מנוע";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "זווית [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "טווח ערכים 0-180";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "סובב מנוע";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Spin the servo connected to the specified pin, at the indicated speed and in the selected direction";
//engine
Blockly.Msg.mot_tooltip = "Shield motor controller L293D: \n activates both motors (M1 and M2) to advance or turn, the speed can be set between 0 and 90";
Blockly.Msg.mot_stop = "stop";
Blockly.Msg.mot_stop_tooltip = "L293D Motor Controller Shield: \nstop the two motors (M1 and M2)";
Blockly.Msg.moteur = "activate the engine";
Blockly.Msg.moteurstop = "stop the engine";
Blockly.Msg.moteur_tooltip = "starts the DC motor connected to the specified pin, at the indicated speed \nspeed = 0 -> motor stop";
Blockly.Msg.moteurdagu_tooltiprs040 = "RS 040 board: \n activates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "RS 040 board: \nstop one of the 2 motors";
Blockly.Msg.moteurdagu_tooltiprs027 = "RS 027 board: \n operates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "forward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "backward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - stepper motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "speed (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "number of steps";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 engine";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 engine";
Blockly.Msg.m_pap="step-by-step engine";
Blockly.Msg.m_pap_step="step";
Blockly.Msg.m_pap_step1="move forward";
Blockly.Msg.m_pap_tooltip = "Initialization of a stepping motor. \nIndicate number of steps, speed in rpm and pins to connect";
Blockly.Msg.m_pap_step_tooltip = "activates the stepping motor by the number of steps indicated, the following instruction will only be executed once the rotation of the motor is done";
// serial
Blockly.Msg.Serial_Init = "serial port on";
Blockly.Msg.Serial_Init_tooltip = "Set the communication rate in characters per second for serial communication";
Blockly.Msg.Serial_Write = "send to serial port";
Blockly.Msg.Serial_write_tooltip = "Send data to the serial port";
Blockly.Msg.Serial_read = "data read on the serial port";
Blockly.Msg.Serial_read_tooltip = "returns the first available data byte available in the serial port, or -1 if no data is available";
Blockly.Msg.Serial_available = "amount of data on the serial port";
Blockly.Msg.Serial_available_tooltip = "returns the number of bytes available in the serial port queue, or 0 if nothing is available";
Blockly.Msg.Serial_saut = "a line break";
Blockly.Msg.Serial_saut_tooltip = "returns a line break on the serial monitor";
Blockly.Msg.Serial_space = "a separator";
Blockly.Msg.Serial_space_tooltip = "return a space on the serial monitor";
Blockly.Msg.repl_read = "user entered command";
// software serial
Blockly.Msg.SSERIAL_Init = "software port on Rx";
Blockly.Msg.SSERIAL_tooltip = "Creating a new communication port using the specified pins and speed";
Blockly.Msg.SSERIAL_Read = "data read on the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Write = "send to the software port";
Blockly.Msg.SSERIAL_Write_tooltip = "Send data to the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Available = "amount of data on the software port";
Blockly.Msg.SSERIAL_Available_tooltip = "returns the number of available bytes in the software port queue, or 0 if nothing is available";
////////////////////////////OTTO DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "בית";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "הרובוט הולך ישר למצב בית";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.OTTO9_CALIBRATION='כיול ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='רגל ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='כף רגל; ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='יד ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'שמור נתונים לזיכרון';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTO9_MOVE_TEXT = "הליכה";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "תנועות בסיסיות";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ קדימה", "FORWARD"], ["↓ אחורה", "BACKWARD"], ["↺ שמאלה", "LEFT"], ["↻ ימינה", "RIGHT"], ["נטייה לשמאל", "BENDLEFT"], ["נטייה לימין", "BENDRIGHT"], ["ניעור רל שמאל", "SHAKELEFT"], ["ניעור רגל ימין", "SHAKERIGHT"], ["למעלה", "jump"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ קדימה", "FORWARD"], ["↓ אחורה", "BACKWARD"], ["↺ שמאלה", "LEFT"], ["↻ ימינה", "RIGHT"]]; 
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "מהירות";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["רגיל", "1000"],["לאט", "2000"],["לאט מאוד", "3000"] , ["מהיר", "750"], ["מהיר מאוד", "500"], ["מהיר מידי", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["רגיל", "45"],["לאט", "20"],["לאט מאוד", "10"] , ["מהיר", "60"], ["מהיר מאוד", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "ריקוד";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto dance!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["הליכת ירח ⟵", "moonwalkerLEFT"],  ["הליכת ירח ⟶", "moonwalkerRIGHT"],["קרוסינג ⟵", "crusaitoLEFT"],["קרוסינג ⟶", "crusaitoRIGHT"], ["נפנוף ↑", "flappingFRONT"], ["נפנוף ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "גודל";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["רגיל", "25"], ["קטן", "10"], ["גדול", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "תנועות";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto complex movements";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "מחוות";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Emotional sounds combined with movements";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 שמח1", "OttoSuperHappy"],["🙂 שמח2", "OttoHappy"], ["🙁 עצוב", "OttoSad"], ["😴 ישן", "OttoSleeping"], ["😕 מבולבל", "OttoConfused"], ["😰 עייף", "OttoFretful"], ["😍 אוהב", "OttoLove"], ["😡 כועס", "OttoAngry"], ["🤩 קסם", "OttoMagic"], ["😐 גל", "OttoWave"], [" 😎 ניצחון", "OttoVictory"], ["😞 עצוב", "OttoFail"], ["💩 פלוץ", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "צלילים";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Emotional sounds";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 שמח1", "S_superHappy"], ["🙂 שמח2", "S_happy"], ["😊 שמח3", "S_happy_short"], ["🙁 עצוב", "S_sad"], ["😕 מבולבל", "S_confused"], ["🤗 חיבוק", "S_cuddly"], ["😮 הוווו", "S_OhOoh"], ["😯 הואואו", "S_OhOoh2"], ["😲 הפתעה", "S_surprise"],["🤖 חיבור", "S_connection"], [" 🤖 ניתוק", "S_disconnection"], ["👇 לחיצנ", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 לישון", "S_sleeping"], ["💩 פלוץ1", "S_fart1"], ["💩 פלוץ2", "S_fart2"], ["💩 פלוץ3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "מרחק [סנטימטר]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Ranging distance between 2cm to 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "חפץ";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["קרוב", "10"],["קרוב מאוד", "3"],["רחוק", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "רעש נמדד";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "מגע";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use if conditional";
Blockly.Msg.OTTO9_GETG_TEXT = "תזוזה";
Blockly.Msg.OTTO9_GETG_CHOICE = [["aX", "gyro.getAngleX()"], ["aY", "gyro.getAngleY()"], ["aZ", "gyro.getAngleZ()"], ["gX", "gyro.getGyroX()"], ["gY", "gyro.getGyroY()"]];
Blockly.Msg.OTTO9_MOUTH_TEXT = "פה";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "mouth emotion for the 8x8 LED matrix #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 שמח פתוח", "happyOpen"],["🙂 שמח סגור", "happyClosed"], ["😊 חיוך", "smile"], ["😦 עצוב1", "23"], ["🙁 עצוב2", "24"], ["😮 מופתע1", "smallSurprise"], ["😲 מופתע2", "bigSurprise"], ["😕 מבולבל", "confused"],["😛 לשון", "tongueOut"],["🙃 מגוחך", "culito"],  ["😑 רציני", "lineMouth"], ["🙄 כועס", "21"], ["💖 לב", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ לא", "xMouth"], ["✅ אוקיי", "okMouth"],["❓?", "27"], ["⚡ ברק", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "eyes";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "eyes emotion for the 16x8 i2C LED matrix ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "eyes text";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " clear eyes";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "mouth text";
Blockly.Msg.OTTO9_CLEAR_TEXT = " סגירת פה";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Turn off all LEDs of the mouth matrix 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "ידיים";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "move the arms!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]];