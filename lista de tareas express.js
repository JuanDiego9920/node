# Asegúrate de estar en la rama principal (main)
git checkout main

# Crea una nueva rama llamada review-1
git checkout -b review-1


git checkout
# Crea el archivo review-1.md y ábrelo para editarlo
touch review-1.md
# O abre un editor de texto para editar el archivo, por ejemplo, con:
# nano review-1.md
# O con cualquier editor de texto de tu elección

# Agrega el contenido al archivo review-1.md (puedes usar un editor de texto)
# Aquí hay un ejemplo de contenido:
echo "# ¿Qué es mi producto y para qué sirve?

Mi producto es una aplicación de lista de tareas que ayuda a las personas a organizar y realizar un seguimiento de sus tareas diarias. Sirve para mejorar la productividad y la gestión del tiempo al permitir a los usuarios crear, editar y completar tareas de manera eficiente.

# ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

- Creación de tareas: Los usuarios pueden crear nuevas tareas fácilmente, lo que les permite anotar las cosas que necesitan hacer.
- Priorización de tareas: Los usuarios pueden asignar prioridades a sus tareas, lo que les ayuda a centrarse en lo más importante.
- Marcar tareas completadas: Los usuarios pueden marcar tareas como completadas una vez que las han realizado, lo que les permite llevar un registro de su progreso.
- Recordatorios: La aplicación puede enviar recordatorios y notificaciones para que los usuarios no se olviden de sus tareas importantes.

Los usuarios usarían estas funcionalidades para mantenerse organizados, reducir el estrés y ser más eficientes en su trabajo y vida cotidiana.

# Enlace al repositorio
[Enlace al repositorio](URL_DEL_REPOSITORIO)

# Enlace a la rama
[Enlace a la rama review-1](URL_DE_LA_RAMA)
" > review-1.md

# Agrega el archivo al área de preparación
git add review-1.md

# Realiza un commit con el archivo
git commit -m "Añadido archivo review-1.md"

# Sube la rama al repositorio remoto
git push origin review-1