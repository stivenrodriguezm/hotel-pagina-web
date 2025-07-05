#!/bin/bash

# Este script crea la estructura de carpetas y archivos
# para el proyecto hotel-fontana-web dentro del directorio 'src'.
# Ejecútalo desde la raíz de tu proyecto de React.

echo "Creando la estructura de carpetas y archivos..."

# --- Crear Carpetas ---
# Usamos -p para crear directorios anidados si no existen (ej. assets/images)
mkdir -p src/assets/images
mkdir -p src/components/common
mkdir -p src/data
mkdir -p src/pages

echo "Carpetas creadas."

# --- Crear Archivos de Componentes ---
touch src/components/common/Button.js
touch src/components/common/Header.js

# --- Crear Archivos de Páginas ---
touch src/pages/HomePage.js
touch src/pages/RoomsPage.js
touch src/pages/BookingPage.js
touch src/pages/ContactPage.js

# --- Crear Archivos de Datos (ejemplo) ---
touch src/data/roomData.json

echo "Archivos creados."
echo "¡Estructura del proyecto lista!"
