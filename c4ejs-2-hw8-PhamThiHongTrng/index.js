let x = document.getElementById('up');
let y = document.getElementById('down');
let count = 0;

let z =document.getElementById("value");

document.getElementById("value").textContent = count;

x.addEventListener('click', up);
y.addEventListener('click', down);
function up() {
    count++;
    z.textContent = `${count}`
}
function down() {
    count--;
    z.textContent = `${count}`
}
z.insertAdjacentElement('afterbegin', `<li>${count}</li>`);
