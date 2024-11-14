# Pronóstico del Clima - Frontend en React

Este proyecto es un frontend desarrollado en **React** para consumir el backend que proporciona el pronóstico del clima para una ciudad específica. La aplicación permite al usuario ingresar el nombre de una ciudad y obtener el pronóstico del clima de los próximos 4 días, mostrando la fecha, temperatura mínima y máxima, y las condiciones climáticas.

## Requisitos

- **Node.js** (v14 o superior)
- **npm** o **yarn** para manejar dependencias

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio-frontend.git
   cd tu-repositorio-frontend
   npm install
## Configura la URL del Backend:
 ```javascript
const response = await axios.get(`http://127.0.0.1:5000/weather`, {
  params: { city },
});
 ```
## Ejecución del Proyecto
```bash
npm start
```
La aplicación se ejecutará en http://localhost:3000 por defecto.
