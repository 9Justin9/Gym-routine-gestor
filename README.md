# Gym-routine-gestor
This is my first ever project in which I wanted to make a gym routine gestor in order to make the tracking of my workouts easier.

AI guide I took:
El objetivo principal de este proyecto es construir la "sala de control" o el motor lógico de una aplicación de gimnasio.
No estamos creando botones de colores ni pantallas visuales todavía; estamos programando las reglas, cálculos y estructuras que hacen que una app real funcione por detrás. Para ti, la función de este proyecto es demostrar que dominas la Programación Orientada a Objetos (POO) antes de empezar el bachillerato tecnológico.
Tu proyecto debe incluir obligatoriamente los siguientes componentes para estar completo y bien estructurado:
------------------------------
## 1. Las Tres Clases Principales (La Estructura)
Tu código debe organizar la información usando el principio de responsabilidad: cada cosa se encarga de lo suyo.

* Clase Ejercicio: Representa un único movimiento físico. Debe incluir:
* Propiedades: Nombre (ej. "Sentadilla"), series, repeticiones y peso.
   * Método propio: Un cálculo matemático interno que devuelva el volumen total de ese ejercicio específico (Multiplicar: $\text{series} \times \text{repeticiones} \times \text{peso}$).
* Clase Rutina: Funciona como el contenedor de un día de entrenamiento (ej. "Día de Pierna"). Debe incluir:
* Propiedades: Nombre del día y un Array vacío que se llenará con objetos de tipo Ejercicio.
   * Métodos de gestión: Funciones internas para añadir un ejercicio al array y otra para eliminar un ejercicio si te arrepientes.
* Clase Gimnasio o Historial (El nivel superior): Controla toda tu semana.
* Propiedades: Un array que almacena diferentes objetos de tipo Rutina.
   * Método: Capacidad de mostrar el plan semanal completo por consola.

------------------------------
## 2. Lógica de Negocio (Los Cálculos)
Un buen programa de informática no solo guarda datos, los procesa. Tu proyecto debe ser capaz de:

* Sumar volúmenes: Recorrer con un bucle (como un .forEach()) todos los ejercicios de una rutina y calcular cuántos kilos totales has levantado en esa sesión de entrenamiento.
* Formatear texto: Métodos que transformen los datos brutos en frases legibles por consola (ej. en lugar de mostrar un objeto roto, que imprima: "1. Press Militar: 4x10 con 40kg").

------------------------------
## 3. Simulación de Uso Real (El Flujo)
Al final de tu archivo logic.js, debes escribir código que "use" tus clases para demostrar que funcionan. Debe incluir:

   1. La creación (instanciación) de al menos 3 ejercicios distintos.
   2. La creación de al menos 2 rutinas (ej. "Lunes - Torso" y "Miércoles - Pierna").
   3. La asignación de los ejercicios correspondientes a cada rutina.
   4. La ejecución de los métodos de cálculo para ver los resultados en la terminal de VS Code.

------------------------------
## 4. Control de Versiones (Buenas Prácticas)
Como extra profesional para optimizar tu tiempo esta semana:

* El proyecto debe estar guardado en una carpeta limpia de tu ordenador.
* Debe incluir un archivo oculto .git (inicializado con Git) listo para ser subido a la nube.

Si te parece bien el alcance, ¿cómo prefieres avanzar?
Escribimos juntos el código de la tercera clase (la clase Gimnasio) para conectar las rutinasTe enseño la lógica matemática exacta para eliminar un ejercicio del array por su nombre

