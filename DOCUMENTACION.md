
# API PRUEBA TECNICA WUALA 

la siguiente se ocupa de manejar y getionar la informacion de las tareas iniciadas y sus cambios de estado sobre los productos de los clientes.
URL base: http://localhost:9003/ en ambito local.

# Consultas HTTP

# Insertar nueva tarea en la DB

- URL: http://localhost:9003/post-tareas

- Metodo: POST

- Content-type: application/json

- parametros: datos asignados a la tarea(body)

    {
        "producto": "zapatilla topper clasica",
        "tipo": "descuentos de precio",
        "titulo": "epoca de navidad",
        "fecha": "20/12/2021",
        "estado": "",
        "activo": true
    }

- Respuestas

    201: { "message": "task created successfully" }
    500: { err: error.message }


# Obtener tareas en la DB

- URL: http://localhost:9003/get-tareas

- Metodo: GET

- Content-type: application/json

- parametros: sin parametros

- Respuestas

    200:   
    [
        {
            "id": 1,
            "producto": "zapatilla topper clasica",
            "tipo": "descuento de precio",
            "titulo": "promocion navidad",
            "fecha": "2021-12-16T03:00:00.000Z",
            "estado": "TO-DO",
            "activo": true
        },
        {
            "id": 2,
            "producto": "zapatilla adidas ultimate",
            "tipo": "descuento de precio",
            "titulo": "promocion navidad",
            "fecha": "2021-12-17T03:00:00.000Z",
            "estado": "TO-DO",
            "activo": true
        },
        .
        .
        .
    ]

    400: { err: "not found" }
    500: { err: error.message }


# Actualizar una tarea en la DB

- URL: http://localhost:9003/put-tareas

- Metodo: PUT

- Content-type: application/json

- parametros: datos asignados a la tarea(body)

    {
        "id":26,
        "producto": "jean levis super skinny",
        "tipo": "descuentos de precio",
        "titulo": "año nuevo",
        "fecha": "26/12/2021",
        "estado": "",
        "activo": true
    }

- Respuestas

    200: { message:"task updated successfully" }
    500: { err: error.message }