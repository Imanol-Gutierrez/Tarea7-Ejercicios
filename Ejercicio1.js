async function traducirYoda() {
  try {
    const response = await fetch("https://api.funtranslations.com/translate/yoda.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        text: "You must learn the ways of the force"
      })
    });

    if (!response.ok) {
      throw new Error("Error en la petición: " + response.status);
    }

    const data = await response.json();
    console.log("Traducción en Yoda:", data.contents.translated);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

traducirYoda();
