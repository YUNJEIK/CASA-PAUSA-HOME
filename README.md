OBJETIVO DEL E-COMMERCE
casa.pausa.home es una tienda digital orientada al bienestar y la decoracion consciente. Su proposito principal es ofrecer una interfaz de usuario fluida, intuitiva y reactiva que simule una experiencia de compra real. Permite explorar productos de diseño (velas, textiles, ceramica, objetos), gestionarlos en un carrito dinamico con control estricto de inventario, y asentar la transaccion mediante una base de datos en la nube. 
DESCRIPCION DE FUNCIONALIDADES PRINCIPALES
• Catalogo Inteligente: Carga asincrona de colecciones completas o filtradas dinamicamente por categorias mediante la URL.
• Detalle de Producto Expandido: Visualizacion minuciosa de cada item, con opcion de navegacion inteligente para regresar de manera exacta a la seccion de origen.
• Control de Stock Reactivo: Un contador sincrono que impide seleccionar cantidades superiores al stock real del producto o inferiores a una unidad.
• Carrito de Compras Persistente: Visualizacion en tiempo real de items agregados, desglose de cantidades, subtotales por articulo y calculo del precio final acumulado.
• Checkout Automatizado: Formulario de validacion del comprador que genera, descuenta y registra de forma directa una orden de compra unica en la base de datos.

SECCION TECNICA Y ARQUITECTURA
A. Funcionamiento del CartContext
La administracion de los datos globales se resolvio mediante React Context API. El contenedor CartProvider envuelve a toda la aplicacion en el archivo main.jsx, exponiendo un estado global y funciones operativas (addItem, removeItem, clearCart). Cualquier componente de la SPA (como CartWidget o ItemDetail) puede consumir de forma reactiva las unidades acumuladas o los montos totales sin incurrir en prop drilling.
B. Estructura de Componentes
El proyecto sigue rigurosamente el patron de diseño de Componentes Contenedores y de Presentacion:
• App (Raiz)
• NavBar (Presentacion)
• CartWidget (Presentacion y Contexto)
• ItemListContainer (Contenedor de Firestore)
• ItemList (Presentacion de listado)
• Item (Presentacion de tarjeta)
• ItemDetailContainer (Contenedor de Item unico)
• ItemDetail (Presentacion de detalle)
• ItemCount (Contador y validador de stock)
• Cart (Vista de carrito)
• CheckoutForm (Contenedor de ordenes)
C. Estructura de la Base de Datos (Firebase / Firestore)
Coleccion: products
Modelado de documentos de inventario en la base de datos:
• id: String (Autogenerado por Firestore)
• name: String (Nombre del producto)
• description: String (Detalle comercial del producto)
• price: Number (Precio unitario)
• stock: Number (Cantidad fisica disponible)
• category: String (Filtro tecnico: velas, textiles, ceramica, objetos)
• image: String (URL de la imagen alojada)
Coleccion: orders (Ejemplo de Documento Generado)
Al confirmar una compra mediante el Checkout, se inyecta un documento estructurado de la siguiente manera:
{
"buyer": {
"name": "Juan Perez",
"phone": "1123456789",
"email": "juan.perez@email.com"
},
"items": [
{
"id": "A7zK9pX4mQ",
"title": "Vela de Soja Cuarzo",
"price": 4500,
"quantity": 2
}
],
"total": 9000,
"date": "2026-10-10"
} 
OBSERVACIONES FINALES, DIFICULTADES Y DISEÑO
• Decisiones de Diseño: Se opto por una arquitectura limpia utilizando Vite para optimizar los tiempos de compilacion (HMR). Se aplico CSS modular y renderizado condicional exhaustivo (loaders, mensajes de error y estados de carritos vacios) para elevar la Experiencia de Usuario (UX).
• Dificultades Encontradas: Uno de los mayores desafios fue evitar la duplicacion de productos dentro del carrito al hacer multiples clics desde el detalle. Se resolvio estructurando una validacion interna en la funcion addItem, la cual mapea el estado previo y suma la nueva cantidad al articulo si este ya existia mediante su ID.
• Confirmacion de Ejecucion: Se confirma que el proyecto se ha probado clonandolo desde cero en un directorio limpio. Al ejecutar npm install y proveer las variables de entorno necesarias en el archivo .env, la aplicacion se instala, compila bajo Vite y funciona de forma optima sin arrojar errores criticos ni advertencias en la consola.