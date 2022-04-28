# Visual Parnership Students

Este es un proyecto realizado para Launch X de Microsoft donde se realizan varias consultas a una lista json mediante express. El sistema fue realizado con una estructura de controlador, servicio y endpoint para llevar a cabo la comunicación completa.

### Librerías utilizadas

1. Express. Comunicación entre cliente y servidor para la información.
2. NodeJS. Gestión del servidor y poder mostrar el software.
3. Jest. Para pruebas unitarias de cada componente.
4. ESlint. Dar un formato correcto de todos los archivos.

### Componentes

1. StudentController. Comunicación de los métodos entre express y el "service". Lectura de archivo json con la información a evaluar.
2. StudenService. Procesamiento del json obtenido de acuerdo a las funciones solicitadas.
3. Reader. El lector del json, todo lo referente a obtener información del json se centra en este único método de la clase.

Cada uno de estos componentes tienen sus respectivos archivos de pruebas que pueden ejecutarse con Jest:

`npm test test/[carpeta]/[componente]`

### API REST

Se han declarado varios "endpoints" para consulta de la información, los cuales se detallan aquí:

`http://localhost:3000/v1/students`

Obtinene el listado completo de estudiantes registrados.

**Valor devuelto:** arreglo con listado de estudiantes *id*, *name*, *email*, *credits*, *enrollments*, *previousCourses* y *haveCertification*.


`http://localhost:3000/v1/students/certification`

Especificando el parámetro "certification" filtra el listado de estudiantes que tienen una certificación acreditada.

**Valor devuelto:** arreglo con los **correos** de cada estudiante.


`http://localhost:3000/v1/students/credits/:credits`

Obtiene el listado de estudiantes que tienen cierta cantidad de créditos especificados por el último parámetro.

**Valor devuelto:** arreglo con el listado de estudiantes que tienen más de la cantidad de créditos especificada.
