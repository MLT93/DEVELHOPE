<!---
MLT93/MLT93 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

## 👋 Hi, I’m @MLT93

## 👀 These is a right form to do your first step with Git Bash on GitHub:
- [Iniciar un repositorio local creando el archivo oculto .git]

        git init

- [Creo el archivo] 

        touch "README.md"

- [Abro el archivo en Visual Studio Code] 

        code README.md

- [Escribo algo en el archivo que hemos abierto con VSCode ]

        - Hola Mundo!

- [Indica a Git que quieres incluir actualizaciones de un archivo concreto en la próxima confirmación]

        git add README.md 

- [Confirmamos un conjunto de cambios provisionales de forma permanente]

        git commit -m "first commit"

- [Renombramos la rama local, no la rama remota. Si deseas cambiar el nombre de la rama remota correspondiente, se debe actualizar su nombre en el repositorio remoto utilizando comandos adicionales, como (git push origin "nombre-rama-antiguo") y (git push -u origin "nombre-rama-nuevo") para eliminar la rama antigua y crear una nueva con el nombre deseado en el repositorio remoto.] 

        git branch -M main

- [Git remote administra los repositorios remotos con los cuales deseas trabajar e incluir las actualizaciones de tus cambios. Es una manera de crar una conexion entre la parte "local" y la parte "remota" (normalmente se usa <origin>) y después se escribe la URL del repositorio de destino]

        git remote add origin "URL"

- [Indica que deseas actualizar una nueva URL en la cual guardaremos los cambios locales. Con esto cambiamos el destino "remoto" de nuestro trabajo "local" (normalmente se usa <origin>) y la URL (que siempre contiene los datos del repository de destino más el nombre del branch que se asociará)]

        git remote set-url origin "URL"

- [Escribe el siguiente comando para enviar los cambios "locales" al repositorio "remoto" fijando el repositorio remoto como el principal, asi Git sabe que la rama local y la rama remota estan asociadas sin necesidad de especificarlo explícitamente (normalmente se usa <origin>) y escribe el nombre de la rama local que se esta usando para poder enlazarlas (normalmente se usa <main>) para establecerla como la rama de seguimiento predeterminada]

        git push -u origin main 

- [Crea una nueva rama llamada como mejor te parezca "Nombre-del-nuevo-branch" y cambia a ella en un solo paso con el siguiente comando sin necesitar un "git switch" para cambiar de rama]

        git checkout -b "Nombre-del-nuevo-branch" 
