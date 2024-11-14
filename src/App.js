import React from 'react';
import './App.css';
import WeatherForecast from './WeatherForecast'; // Importa el componente WeatherForecast

function App() {
    return (
        <div className="App">

            {/* Renderiza el componente WeatherForecast */}
            <WeatherForecast />
        </div>
    );
}

export default App; // Asegúrate de tener esta línea
