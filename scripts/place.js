const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const temperature = 45; 
const windSpeed = 10; 

function calculateWindChill(temp, speed) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

function updateWindChill() {
    const windChillElement = document.querySelector(".weather-content p:nth-child(4)");
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `Wind Chill: ${windChill}°F`;
    } else {
        windChillElement.textContent = "Wind Chill: N/A";
    }
}

document.addEventListener("DOMContentLoaded", updateWindChill);
