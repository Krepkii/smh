function greeting() {
Now = new Date()
Hour = Now.getHours();
if (Hour < 5)
msg ="<font style='font-size: 26px;  color: white;'><b>Доброй ночи :)</b></font>"
else if(Hour < 10)
msg ="<font style='font-size: 26px; color: white;'><b>Доброе утро, дорогой друг! :)</b></font>"
else if(Hour < 18)
msg ="<font style='font-size: 26px; color: white;'><b>Добрый день! :)</b></font>"
else if(Hour < 21)
msg ="<font style='font-size: 26px; color: white;'><b>Добрый вечер! :)</b></font>"
else if (Hour < 24)
msg ="<font style='font-size: 26px; color: white;'><b>Доброй ночи! :)</b></font>"
return( msg )
}
document.write(greeting())
