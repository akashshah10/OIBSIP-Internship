function convertTemperature() {
  const tempInput = document.getElementById("temperature").value.trim();
  const scale = document.getElementById("scale").value;

  if (isNaN(tempInput) || tempInput === "") {
    document.getElementById("result-celsius").textContent = "-- °C";
    document.getElementById("result-fahrenheit").textContent = "-- °F";
    document.getElementById("result-kelvin").textContent = "-- K";
    return;
  }

  const temp = parseFloat(tempInput);
  let celsius, fahrenheit, kelvin;

  if (scale === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9) / 5 + 32;
    kelvin = temp + 273.15;
  } else if (scale === "fahrenheit") {
    fahrenheit = temp;
    celsius = ((temp - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else if (scale === "kelvin") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  document.getElementById("result-celsius").textContent = `${celsius.toFixed(
    2
  )} °C`;
  document.getElementById(
    "result-fahrenheit"
  ).textContent = `${fahrenheit.toFixed(2)} °F`;
  document.getElementById("result-kelvin").textContent = `${kelvin.toFixed(
    2
  )} K`;
}

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("time").textContent = `Time: ${hours}:${minutes}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("convertBtn")
    .addEventListener("click", convertTemperature);
  updateTime();
  setInterval(updateTime, 1000);
});
