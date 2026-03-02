# Porgramaci-n-Web_-Optimizaci-n-de-virtualizaci-n-en-reac
## Que es el virtual DOM y su relación con React.memo y map()
Virtual DOM es una representación en memoria de la interfaz de usario como un árbol de objetos. En lugar de modificar directamente el DOM real del navegador cada vez que ocurre un cambio, React genera una versión virtual de la interfaz y la mantiene sincronizada con el DOM real mediante un proceso que se llama reconciliación. Cuando el estado o las props de un componente cambian, React vuelve a ejecutar la función del componente y crea un nuevo árbol Virtual DOM para despues comparar el nuevo árbol con el anterior para identificar las diferencias y actualizar unicamente esas partes en el DOM real. A este proceso de volver ejecutar el componente se le conoce como re-render. Sin embargo no significa necesariamente que el DOM real cambie por completo, sino que React vuelve a calcular como deberia verse la interfaz y mediante la reconciliación decide si realmente es necesario modificar el DOM. Por lo que en aplicaciones mas complejas puede afectar, ya que pueden ocurrir re-renderizados innecesarios cuando un componente se vuelve a ejecutar aunque la información que recibe no haya cambiado realmente, lo que puede afectar el rendimiento.
Para evitar estos re-renderizados innecesarios, React tiene una herramienra React.memo que es una función que memoriza un componente funcional y evita que se vuelva a renderizar si sus props siguen siendo las mismas. Basicamente compara las props actuales con las anteriores y si no detecta cambios reutiliza el resultado previo sin volver ejecutar el componente. Esto optimiza el rendimiento, especialmente cuando un componente hijo depende de un componente padre que se re-renderiza con frecuencia. Sin embargo, esta optimización depende de que las props mantengan la misma referencia, ya que si se pasan objetos, arreglos o funciones que se crean nuevamente en cada render, la compararación superficial detectará cambios y el compomponente se volvera a renderizar.
De manera similar, cuando se generan listas dinamicas utilizando map(), React necesita identificar correctamente cada elemento para aplicar la reconciliación de forma eficiente. Por lo que utiliza la propiedad Key que debe ser unica y estable, ya que si la Key cambia entre renders, React puede interpretar incorrectamente que un elemento es otro distinto, lo cual provocaria re-renderizados innecesarios o comportamientos inesperados en la interfaz. Es por eso que se recomienda utilizar identificadores unicos como un id en lugar del indice del arreglo, especialmente en listas que pueden modificarse dinamicamente.
Por lo tanto, React.memo y el uso correcto de Key en listas generadas con map() estan directamente relacionados al funcionamiento del Virtual DOM, ya que influyen en como React realiza la reconciliación y decide que partes del árbol deben actualizarse o volver a renderizarse.

Wendy - Investigación

Emiliano - Dashboard, about, map()

Juan Andrés - Contador home

Jose Alfredo - Ayuda Investigación


## Referencias  
DOM virtual y detalles de implementación – React. (s. f.). React.         https://es.legacy.reactjs.org/docs/faq-internals.html

GeeksforGeeks. (2025, 23 julio). How does React.memo() optimize functional components in React? GeeksforGeeks. https://www.geeksforgeeks.org/reactjs/how-does-react-memo-optimize-functional-components-in-react/

Listas y keys – React. (s. f.). React. https://es.legacy.reactjs.org/docs/lists-and-keys.html

Orejuela, K. G. (2022, 21 septiembre). Método Map para JavaScript y React. DEV Community. https://dev.to/kevingo710/metodo-map-para-javascript-y-react-2de1
