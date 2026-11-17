const lotto = [];
let number = 1;

for(let x = 0; x < 10; x++) {
    lotto[x] = [];
    for(let y = 0; y < 5; y++) {
        lotto[x][y] = number++;
    }
}

const table = document.createElement("table");

for (const row of lotto) {
    const tableRow = table.insertRow();
    for (const value of row) {
        tableRow.insertCell().textContent = value;
    }
}

document.getElementById("lotto").appendChild(table);