---
route: 'wordleClon'
title: 'wordleClon'
description: ''
pubDate: 'Sep 22 2025'
heroImage: 'WordleClon_zvr6di'
githubRepo: 'https://github.com/PC0staS/WordleClon'
demoLink: 'https://wordleClon.pablocostas.dev'
---
# WordleClon

WordleClon es un clon interactivo del popular juego Wordle, desarrollado con React, Vite y TypeScript. El objetivo es adivinar una palabra de 5 letras en un número limitado de intentos, con animaciones y lógica fiel al juego original.

## Características

- **Animaciones avanzadas:** Las celdas giran (flip) y se colorean de izquierda a derecha usando `framer-motion`.
- **Colores de feedback:**
  - Verde: letra correcta y en posición correcta.
  - Amarillo: letra correcta pero en posición incorrecta.
  - Gris: letra no está en la palabra.
- **Intentos limitados o ilimitados:** El usuario puede alternar entre modos.
- **Modales de victoria y derrota:** Mensajes superpuestos con significado de la palabra.
- **Validación de palabras:** Se consulta la API de la RAE para verificar y obtener el significado.
- **Animación de shake:** El input tiembla si la palabra no es válida.
- **Animación de flip:** Cada celda gira al revelarse el color.
- **Animación spring en filas:** La fila entera se anima al aparecer.

## Estructura del proyecto

```
WordleClon/
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   ├── Cell.tsx
│   │   ├── GuessGrid.tsx
│   │   ├── GuessInput.tsx
│   │   ├── InputCell.tsx
│   │   └── Solution.tsx
│   └── data/
│       ├── config.ts
│       └── words.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Instalación y ejecución

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el proyecto:
   ```bash
   npm run dev
   ```

## Uso

- Escribe una palabra de 5 letras y pulsa "Guess".
- El grid mostrará el feedback de colores y animaciones.
- Cambia entre intentos limitados e ilimitados con el botón correspondiente.
- Al ganar o perder, se muestra un modal con el significado de la palabra.

## Tecnologías

- React
- TypeScript
- Vite
- framer-motion
- TailwindCSS

## API utilizada

- [RAE API](https://rae-api.com/) para validación y significado de palabras.

## Lógica de coloreo

- Las letras repetidas se colorean siguiendo la lógica de Wordle original:
  - Primero se marcan las verdes.
  - Luego los amarillos solo si quedan instancias disponibles en la palabra solución.
  - Si una letra no está, se marca gris.

## Animaciones

- **Flip:** Cada celda gira al revelarse el color.
- **Spring:** La fila entera se anima al aparecer.
- **Shake:** El input tiembla si la palabra no es válida.

## Personalización

- Puedes ajustar los delays, colores y efectos en los componentes `Cell.tsx` y `GuessGrid.tsx`.

## Autor

- Pablo Costas

## Licencia

MIT

