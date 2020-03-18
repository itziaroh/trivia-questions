# Prueba Técnica realizada por Itziar Ortega

Se tratada de una aplicación web que muestra preguntas de Trivial traidas desde la API de Open Trivia Database y en la que puedes buscar según la dificultad de las mismas.

## Tecnologías usadas
- React.js
- JavaScript
- Material UI (Librería CSS in JS)
- Axios

## TODO's
Aparte de la funcionalidad de buscar según la dificultad de las preguntas se podrían añadir las siguientes funcionalidades:
- Filtrar por categoría.
- Filtrar por pregunta.
- Filtrar por el tipo de respuesta.
- Paginación para mostrar más preguntas.

Tanto la de buscar por categoría como buscar por pregunta puede implementarse añadiendo un input donde el usuario pueda escribir y hacer la búsqueda en base a ese value.

En cuanto al filtrado por tipo de respuesta, se podrá hacer con inputs de tipo checkbox o radio con las opciones existentes.

Por último, para la paginación de los resultados hay que definir el número máximo de resultados que se visualizan por página. En este caso, la API te devuelve un máximo de 50 resultados, por lo que mostraría 10 preguntas por página. Para ello, usaría la función map y haría un condicional donde se compruebe si el index del resultado por el que se está iterando es múltiplo de 9 y, en el caso de que así fuera, se debe mostar en la siguiente página.