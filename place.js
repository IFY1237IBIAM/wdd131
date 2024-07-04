
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("last-modified");
    const windChillElement = document.getElementById("wind-chill");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;

    const temperature = 25; // °C
    const windSpeed = 10; // km/h

    function calculateWindChill(temp, speed) {
        return (temp <= 10 && speed > 4.8) ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1) : "N/A";
    }

    windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °C";
});
