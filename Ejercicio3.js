// obtener el nombre del pokemon desde los argumentos de la linea de comandos
const nombrePokemon = process.argv[2];

// realizar la petición a la API de pokeapi
fetch('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon)
  .then(response => {
    if (!response.ok) {
      // si la respuesta no es OK (ej: 404), lanzamos un error
      throw new Error(`No se encontró el Pokémon '${nombrePokemon}'`);
    }
    return response.json();
  })
  .then(data => {
    // imprime el nombre del pokemon, numero de pokedex(id), su peso y altura
    console.log('Nombre:', data.name);
    console.log('Número de Pokédex:', data.id);
    console.log('Peso:', data.weight);
    console.log('Altura:', data.height);

    // lista con los nombres de sus tipos
    const tipos = data.types.map(tipo => tipo.type.name);
    console.log('Tipos:', tipos.join(', '));
  })
  .catch(error => {
    // manejo de errores amigable
    console.error('❌ Error:', error.message);
  });
