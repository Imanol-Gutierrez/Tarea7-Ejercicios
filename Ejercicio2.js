async function obtenerClima() {
  const API_KEY = "59a1d726c080747797be2f13080aab72";
  const lat = 14.27028;   
  const lon = -90.04028;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) throw new Error("Error en la petición: " + response.status);

    const data = await response.json();
    const tempC = data.main.temp;                // ya en °C
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;

    console.log(`🌡️ Temperatura: ${tempC.toFixed(1)} °C`);
    console.log(`💧 Humedad: ${humedad}%`);
    console.log(`☁️ Clima: ${descripcion}`);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

obtenerClima();
