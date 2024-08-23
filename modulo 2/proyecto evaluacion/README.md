# Descripción del Proyecto: Implementación de Selectores Dinámicos con jQuery

## Descripción General

Este proyecto tiene como objetivo desarrollar un formulario interactivo con selectores dinámicos para Región, Provincia y Comuna, utilizando jQuery para cargar los datos desde un archivo JSON. El formulario está diseñado para facilitar la selección de una región, provincia y comuna, actualizando las opciones disponibles en función de las selecciones realizadas previamente.

## Estructura del Proyecto

### Estructura de Archivos

- **index.html**: Archivo HTML que contiene el formulario y los campos necesarios.
- **script.js**: Archivo JavaScript que implementa la lógica de jQuery para manejar los selectores dinámicos.
- **styles.css**: Archivo CSS para estilos personalizados.
- **assets/data/data.json**: Archivo JSON que contiene los datos de regiones, provincias y comunas.

### Descripción de Archivos

- **index.html**: Contiene la estructura del formulario con campos para Región, Provincia y Comuna, así como campos adicionales como Nombre, Correo Electrónico y Mensaje. Incluye enlaces a Bootstrap 5.3 y archivos CSS y JS personalizados.
- **script.js**: Implementa la lógica para cargar los datos del archivo JSON y actualizar dinámicamente las opciones en los selectores según las selecciones realizadas por el usuario.
- **styles.css**: Archivo para agregar estilos personalizados al formulario y otros elementos de la página.
- **data.json**: Contiene la información estructurada sobre regiones, provincias y comunas, utilizada para llenar dinámicamente los selectores.

## Referencias

1. **Documentación de jQuery**: [https://api.jquery.com/](https://api.jquery.com/)
2. **Bootstrap 5.3**: [https://getbootstrap.com/docs/5.3/](https://getbootstrap.com/docs/5.3/)
3. **Especificación JSON**: [https://www.json.org/json-es.html](https://www.json.org/json-es.html)

## Consideraciones

- Asegúrate de que el archivo `data.json` esté correctamente ubicado en la carpeta `assets/data/` y que el servidor local esté configurado para servir archivos desde esa ubicación.
- Puedes probar este código en un servidor local o mediante un entorno de desarrollo que permita cargar archivos JSON sin problemas de CORS.
