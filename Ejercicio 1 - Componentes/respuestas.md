# Respuestas

1. Encontré los siguientes problemas con el componente:

- La operación de parsear `contacts` a `contactsToDisplay` puede ser intensiva dependiendo de la cantidad de contactos. Debería usarse el hook `useMemo` para prevenir que la se calcule en cada re-render y solo lo haga cuando es necesario(cambio en el array de dependencias que deberia incluir en este caso `contacts`, `states` y `cities`)
- En la linea 57(mi archivo fue levemente reformateado, en el pdf es otra linea, ver en este repo /Ejercicio 1 - Componentes/ContactScreen.tsx) hay un error de sintaxis ya que falta un `)`.
- Los 2 componentes que vienen justo después del `map` deberían tener la prop `key`.
- La imagen con el avatar debería tener la prop `alt`
- Todas las variables tienen tipo `any` implícito. Deberían estar fuertemente tipadas.
- Componentes reutilizables como la navbar deberían abstraerse.
- El nombre completo y el de la compañía, al estar separados por un guion, parece que debieran estar en la misma linea, pero como h3 y h4 no son inline se vera incorrectamente.

2. Ver directorio ./2-refactored.

3. Solucione los problemas que encontré y marque en el punto 1. Creo que en el punto 1 ya explique como se solucionan los cambios. Podria cambiar la respuesta para marcar en el punto 1 los problemas y en este las soluciones, pero ya hice las 2 en el punto 1 y no me quiero quedar sin tiempo.

4. Ver codigo en ./4-profile
