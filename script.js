const searchScreen = document.querySelector(".search-screen");
const resultScreen = document.querySelector(".result-screen");
const errorScreen = document.querySelector(".error-screen");

const searchCityBtn = document.getElementById("search-city-btn");
const searchAgainBtn = document.querySelectorAll(".search-again-btn");
const userInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const weatherStatus = document.getElementById("weather-status");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feels-like");
const windSpeed = document.getElementById("wind-speed");
const windDirection = document.getElementById("wind-direction-arrow");


async function getWeatherData(city) {
    const apiKey = "66d81ebba64d347044f13d4afb688cdd";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();        
        return data;
    } catch (error) {
        console.error("Error getting weather data: ", error.message);
    }
}

async function displayWeather(city) {
    cityName.textContent = "Loading...";
    temperature.textContent = "--";
    feelsLike.textContent = "--";
    windSpeed.textContent = "--";
    weatherStatus.textContent = "--";
    weatherIcon.innerHTML = "";

    const data = await getWeatherData(city);

    if (!data) {
        searchScreen.classList.add("hidden");
        errorScreen.classList.remove("hidden");
        resultScreen.classList.add("hidden");
        return;
    }

    searchScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    cityName.textContent = data.name;
    weatherStatus.textContent = data.weather[0].main;
    temperature.textContent = Math.round(data.main.temp);
    feelsLike.textContent = Math.round(data.main.feels_like);
    windSpeed.textContent = data.wind.speed;
    windDirection.style.transform = `rotate(${data.wind.deg}deg)`;

    switch(data.weather[0].main) {
        case "Clear":
            weatherIcon.innerHTML = `<i class="fa-regular fa-sun" style="color: yellow;"></i>`;
            break;
        case "Clouds":
            weatherIcon.innerHTML = `<i class="fa-regular fa-cloud"></i>`;
            break;
        case "Rain":
        case "Drizzle":
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            break;
        case "Thunderstorm": 
            weatherIcon.innerHTML = `<i class="fa-solid fa-bolt-lightning"></i>`;
            break;
        case "Snow":
            weatherIcon.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
            break;
        default:
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    }
}

searchCityBtn.addEventListener("click", () => {
    if (userInput.value.trim() === "") {
        alert("Please Enter a City");
        return;
    }
    displayWeather(userInput.value.toLowerCase());
});

searchAgainBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        userInput.value = "";
        searchScreen.classList.remove("hidden");
        resultScreen.classList.add("hidden");
        errorScreen.classList.add("hidden");
    });
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchCityBtn.click();
    }
});