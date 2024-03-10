document.addEventListener('DOMContentLoaded', function () {
    const weatherInfo = document.getElementById('weather-info');

    // Function to fetch weather data from API
    function fetchWeather() {
        const apiKey = 'YOUR_API_KEY'; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`; // Example: London
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const city = data.name;
                const country = data.sys.country;
                const weatherHtml = `
                    <h2>${city}, ${country}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Description: ${description}</p>
                `;
                weatherInfo.innerHTML = weatherHtml;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Fetch weather data on page load
    fetchWeather();
});
