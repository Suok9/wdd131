document.addEventListener("DOMContentLoaded", async () => {
    // Footer Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    const weatherIcon = document.getElementById("weather-icon");

    function updateWeatherIcon(condition) {
        let iconSrc = "images/default.svg"; // Default icon

        if (condition.includes("clear")) {
            iconSrc = "images/sunny.svg";
        } else if (condition.includes("cloud")) {
            iconSrc = "images/cloudy.svg";
        } else if (condition.includes("rain")) {
            iconSrc = "images/rainy.svg";
        } else if (condition.includes("storm")) {
            iconSrc = "images/storm.svg";
        }

        weatherIcon.src = iconSrc;
    }

    // Example usage (replace with actual weather API data)
    updateWeatherIcon("clear sky");  

    // Static weather values for testing (use metric units: °C and km/h)
    const temperature = 8; // Example: 8°C
    const windSpeed = 10;  // Example: 10 km/h

    // Function to calculate wind chill (metric units: °C and km/h)
    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    // Check if conditions are met for wind chill calculation
    let windChillText = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillText = `${calculateWindChill(temperature, windSpeed)} °C`;
    }

    // Display weather information
    document.getElementById("weather-info").innerHTML = `
        <p>Temperature: ${temperature} °C</p>
        <p>Wind Speed: ${windSpeed} km/h</p>
        <p>Wind Chill: ${windChillText}</p>
    `;
});