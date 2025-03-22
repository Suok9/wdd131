document.addEventListener("DOMContentLoaded", async () => {
    
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    const weatherIcon = document.getElementById("weather-icon");

    function updateWeatherIcon(condition) {
        let iconSrc = "images/weather.svg"; 

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

    
    updateWeatherIcon("clear sky");  

   
    const temperature = 8; // Example: 8°C
    const windSpeed = 10;  // Example: 10 km/h

    
    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    
    let windChillText = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillText = `${calculateWindChill(temperature, windSpeed)} °C`;
    }

    
    document.getElementById("weather-info").innerHTML = `
        <p>Temperature: ${temperature} °C</p>
        <p>Wind Speed: ${windSpeed} km/h</p>
        <p>Wind Chill: ${windChillText}</p>
    `;
});