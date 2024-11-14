import React, { useState } from 'react';
import axios from 'axios';
import './WeatherForecast.css';

const WeatherForecast = () => {
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState('');
    const [noData, setNoData] = useState(false);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const getWeatherForecast = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/weather`, {
                params: { city },
            });

            if (response.data[1] === 404 && response.data[0].error) {
                setError(response.data[0].error);
                setForecast([]);
                setNoData(false);
            } else if (response.data.length > 0) {
                setForecast(response.data);
                setError('');
                setNoData(false);
            } else {
                setForecast([]);
                setNoData(true);
                setError('');
            }
        } catch (err) {
            setError('Error al conectar con el servidor. Inténtalo de nuevo más tarde.');
            setForecast([]);
            setNoData(false);
        }
    };

    return (
        <div className="weather-container">
            <h2>Consulta el Pronóstico del Clima</h2>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Ingresa el nombre de la ciudad"
                    value={city}
                    onChange={handleInputChange}
                    className="city-input"
                />
                <button onClick={getWeatherForecast} className="fetch-button">Consultar Pronóstico</button>
            </div>

            {error && <p className="error-message">{error}</p>}
            {noData && <p className="no-data-message">No hay datos disponibles para esta ciudad.</p>}

            {forecast.length > 0 && (
                <div className="table-container">
                    <table className="forecast-table">
                        <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Temperatura Mínima (°C)</th>
                            <th>Temperatura Máxima (°C)</th>
                            <th>Condiciones Climáticas</th>
                        </tr>
                        </thead>
                        <tbody>
                        {forecast.map((day, index) => (
                            <tr key={index}>
                                <td>{day.date}</td>
                                <td>{day.temp_min}°C</td>
                                <td>{day.temp_max}°C</td>
                                <td>{day.condition}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;
