# UpShowTest
Prueba Automatizada

La prueba esta realizada en Visual Studio Code, esta pensada para que se corra CamposFaltantes / Create Account / Login respectivamente.
Me encontre con varios problemas que pude ir solucionando a lo largo de la semana, uno de ellos fue tener que hacer la actualizacion de ChromeDriver a una version mas reciente.
En Nightwatch.conf.js en la parte de test_settings me encontre que estaba configurado con Default y no Chrome la seccion de Webdriver y no me permitia correr las pruebas.
Las pruebas se pueden correr perfectamente una ves, ya que despues los mails ya estan creados y no deja crearlos nuevamente (no pude encontrar la maanera de que se generaran mails aleatorios)
Y por ultimo, CreateAcccount no corre en Firefox (problemas con el DropDown)
