# Challenge Backend en NodeJS

# Instalaciones previas:

Para la correcta puesta en marcha del proyecto sera necesario instalar el gestor de base de datos PostgreSQL 13 mas sus respectivos drivers(4).
A continuacion en este link https://youtu.be/RgP1njsQO0g estan todas las indicaciones.

# Clonado e instalacion de dependencias 

A continuacion ejecutamos: git clone https://github.com/EstebanEzequiel/backend-nodejs-challenge.git , desde el mismo git bash nos dirigimos a la carpeta del proyecto descargado.
En dicho directorio ejecutamos npm i para descargar he instalar todas las dependencias registradas en el package.json.

# Crear base de datos

Ya teniendo PostgreSQL 13 listo solo bastaria acceder al mismo con la contraseña que se haya definido en su instalacion, y procedemos a crear la base de datos con nombre el 'wuala' (segun la configuracion de server-config.json), siguiendo los siguientes pasos en el navegador de la izquierda: 
Servers >> PostgreSQL 13 >> Databases(1) >> Click der >> Create >> Database.

Nuestro back se encargara de crear las tablas necesarias automaticamente para la ejecucion de la aplicacion. La tabla en cuestion recibe el nombre de 'tareas' incluyendo registros insertados para comenzar con la prueba tecnica agilmente.

# Ejecutamos aplicacion

Ya concluyendo ejecutamos: node index y comenzara a correr nuestro challenge backend, para luego visualizar el despliegue de una vista desarrolla en Angular 12 donde se muestran las listas de tareas segun sus estados (TO-DO/IN-PROGRESS/DONE/DELETE).

Github-Pages: https://estebanezequiel.github.io/challenge/