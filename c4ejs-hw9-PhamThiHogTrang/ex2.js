const url = 'https://pokeapi.co/api/v2/pokemon/raichu';
const fectchPromise = fetch(url);
fectchPromise.then(async connection => {
    console.log('Connected');
    console.log(connection);
    const jsonPromise = await connection.json();
    console.log(jsonPromise);
    });