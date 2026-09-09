# 🌤️ Modern Glassmorphism Weather App

A sleek, responsive, and interactive Weather Application built with **vanilla JavaScript**, **CSS3 Glassmorphism**, and the **OpenWeatherMap API**. 

The app features smooth screen transitions, custom keyframe animations, staggered element delays, and interactive wind direction indicators.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-E16745?style=for-the-badge&logo=openweather&logoColor=white)

---

## ✨ Features

* **Real-Time Weather Data:** Fetches live weather conditions, temperature, "feels like" status, and wind dynamics for any city worldwide using OpenWeatherMap REST API.
* **Glassmorphism UI:** Modern UI design with blurred backdrop filters, crisp white borders, translucent cards, and smooth CSS keyframe animations.
* **Dynamic Weather Icons & Wind Compass:** Maps dynamic weather conditions (`Clear`, `Clouds`, `Rain`, `Snow`, `Thunderstorm`) to specific Font Awesome icons and rotates a wind arrow dynamically based on degrees (`wind.deg`).
* **Optimized UX & Screen State Management:** 
  * Asynchronous state handling eliminates UI flicker or dynamic data overlap.
  * Native keyboard interaction (triggers search on pressing `Enter`).
  * Auto-clearing input field when resetting screens.
* **Unit Conversions & Rounding:** Automatically rounds temperatures to nearest integers and converts wind speed from meters/sec to kilometers/hour (`m/s` ➔ `km/h`).
* **Robust Error Handling:** Seamless error screen routing for non-existent cities or API request failures without breaking application state.
* **Fully Responsive:** Fluid layouts designed using modern CSS Media Queries for smartphones, tablets, and desktop displays.

---

## 🚀 Live Demo

[Launch Weather App](https://avtzo.github.io/Weather-App/)

---

## 🛠️ Tech Stack & Concepts Applied

* **HTML5:** Semantic elements, form input handling, accessibility attributes.
* **CSS3:** Custom CSS Variables, Flexbox, Keyframes Animations (`opacity` staging), `backdrop-filter` Glassmorphism styling, Media Queries.
* **JavaScript (ES6+):**
  * Async/Await & Fetch API
  * DOM Manipulation & Dynamic Style Injection
  * Event Listeners (`click`, `keypress`, `forEach`)
  * JavaScript `switch` statements & Mathematical Utilities (`Math.round`)
* **Icons & Typography:** Font Awesome 6 & Google Fonts (Poppins).

---

## 📁 Project Structure

```text
weather-app/
│
├── index.html          # Structure and markup (Search, Result, and Error screens)
├── style.css           # Glassmorphism design, keyframe animations, responsive layout
├── script.js           # Async API fetching, DOM updates, event handling
├── images/             # Local visual assets & favicons
└── README.md           # Project documentation
```
## Installation & Execution
1. Clone the repository to your local machine:
```bash
git clone https://github.com/avtzo/Weather-App.git
