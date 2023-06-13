# Merlin Software - Prueba Técnica

Single Page Application de los Podcasts de Apple

## Empezando

Estas instrucciones te permitirán obtener una copia del proyecto y ejecutarlo en tu máquina local para desarrollo.

### Pre-requisitos

Asegúrate de tener npm instalado en tu máquina. Si no lo tienes, por favor consulta el siguiente enlace:

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Instalar

Después de eso, instala las dependencias requeridas ejecutando el siguiente comando en la terminal.

```
npm install
```

Después de que la instalación sea exitosa, crea un un archivo .env con las variables que fueron enviados por e-mail

Accede a https://cors-anywhere.herokuapp.com/ y permite el acceso para poder hacer las peticiones

Por último, jecuta el siguiente comando para que tu código esté disponible en modo de desarrollo.

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) para ver el sitio

### Archivo .ENV

Deberán crear un archivo .env dentro de la carpeta del proyecto y pegar las variables que fueron enviadas por mail.

### Permitir acceso CORS

Entrar a [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/) y permitir acceso para poder hacer las peticiones a las APIs de Apple.

## Correr en producción

Utiliza este comando para construir la aplicación para producción y ejecutarla.

```
npm run build && npm start
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio

## Hecho con

- [Apple Podcasts API](https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json) - Apple Podcasts API
- [Vite](https://vitejs.dev/) - El entorno web
- [Tailwind](https://tailwindcss.com/) - Framework CSS
- [React Icons](https://react-icons.github.io/react-icons/) - Iconos SVGs
- [CORS](https://cors-anywhere.herokuapp.com/) - CORS Anywhere para las peticiones
- [Dayjs](https://day.js.org/) - Fechas

## Decisiones

- **Vite:** Se eligió Vite como herramienta de construcción para maximizar la velocidad de desarrollo y el rendimiento de la aplicación.
- **Diseño:** Se copio el diseño tal como fue presentado.
- **Modo estricto en TypeScript:** El proyecto utiliza TypeScript en modo estricto para garantizar la detección temprana de errores y proporcionar una mayor seguridad durante el desarrollo.
- **Diseño escalable y responsive:** Los componentes se han diseñado teniendo en cuenta la escalabilidad, lo que facilita a otros desarrolladores continuar trabajando en la aplicación en el futuro.
- **Evitar código repetido:** Se ha evitado la repetición de código en la medida de lo posible. Si se detectó código repetido, se crearon funciones o variables para reutilizarlo y mantener un código más limpio y legible.

## Autor

- Lucas Barallobre
