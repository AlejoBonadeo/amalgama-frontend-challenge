# Respuestas

1. Cual va a ser la forma mas eficiente de manejar el estado y que estructura de datos vamos a utilizar, va a depender de cual es el uso que le queremos dar a la aplicación.

- Para el manejo del estado, vamos a asumir que es un proyecto que va a escalar y seguramente vaya a necesitar un manejador de estado global para tener la información de la api disponible en los componentes que necesitemos sin tener que pasarlos por props. Podemos usar `zustand` ya que es una librería light-weight y cumple las funciones que necesitamos.
- En cuanto a la estructura de datos, si queremos ahorrar lugar con los libros y autores, podemos guardar Hash maps(O key-value JSONs si necesitamos por ejemplo guardarlos en `localStorage`, ademas de que el enunciado pide que sea JSON) con los ids y los datos de cada uno. Asumo que no hay autores sin libros y que la respuesta de libros trae todos los libros(y por lo tanto, todos los autores).

(código adjunto en ./1-zustand)

2. Código adjunto en ./2-json

3. La principal ventaja de guardar los datos de esta manera es que ahorramos guardar la misma información en muchos lugares distintos, haciendo que nuestra aplicación funcione mas rápido. Ademas, al usar key-values para los autores y los libros, las operaciones de búsqueda son rápidas. Ejemplos:

- Buscar autor de un libro: O(1)
- Buscar libro favorito de un usuario con su autor: O(1)
- Buscar libros por autor: O(n)
