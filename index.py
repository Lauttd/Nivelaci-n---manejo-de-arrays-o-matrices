def ejecutar_sistema():
    # Creamos la lista principal (matriz) que guardará a todas las personas
    lista_personas = []

    print("--- BIENVENIDO AL SISTEMA DE CARGA ---")
    print("Escribe 'fin' en el nombre para terminar de cargar.\n")

    while True:
        # 1. ENTRADA DE DATOS
        nombre = input("Ingrese nombre: ")
        
        # Si el usuario escribe 'fin', rompemos el bucle
        if nombre.lower() == 'fin':
            break
            
        # Convertimos edad y nota a números para poder operar con ellos
        edad = int(input(f"Ingrese la edad de {nombre}: "))
        nota = float(input(f"Ingrese la nota de {nombre}: "))

        # 2. PROCESAMIENTO: Guardamos la fila [nombre, edad, nota] en nuestra matriz
        persona = [nombre, edad, nota]
        lista_personas.append(persona)
        
        print("Persona cargada con éxito.\n")

    # Si no se cargó a nadie, terminamos el programa
    if len(lista_personas) == 0:
        print("No se ingresaron datos.")
        return

    # 3. SALIDA DE DATOS
    
    # Listado original
    print("\n--- LISTADO COMPLETO (Orden de carga) ---")
    for p in lista_personas:
        print(f"Nombre: {p[0]} | Edad: {p[1]} | Nota: {p[2]}")

    # Listado ordenado por nota (de mayor a menor)
    # sorted crea una copia. key=lambda x: x[2] le dice que use la NOTA (posición 2) para comparar
    # reverse=True hace que sea de Mayor a Menor
    lista_ordenada = sorted(lista_personas, key=lambda x: x[2], reverse=True)

    print("\n--- LISTADO ORDENADO POR NOTA (Mayor a Menor) ---")
    for p in lista_ordenada:
        print(f"Nota: {p[2]} | Nombre: {p[0]}")

    # Promedio general
    # Sumamos todas las notas y dividimos por la cantidad de personas
    suma_notas = sum(p[2] for p in lista_personas)
    promedio = suma_notas / len(lista_personas)
    
    print(f"\n--- PROMEDIO GENERAL: {promedio:.2f} ---")

# Ejecutar el programa
ejecutar_sistema()