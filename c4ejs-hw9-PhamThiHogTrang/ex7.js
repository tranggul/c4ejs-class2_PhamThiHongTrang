let quote1 = document.getElementById('quote');
let author = document.getElementById('author');
const url = 'http://quotes.rest/qod.json';
async function loadQuote(){
const fetchPro = fetch(url);
const connection = await fetchPro;
const data =  await connection.json();

load(data);
}
loadQuote();
function load(data){
quote1.innerHTML = data.contents.quotes[0].quote;   
author.innerHTML = data.contents.quotes[0].author;

}


