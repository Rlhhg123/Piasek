const numbers = [];
for(let x=0; x<10; x++) {
    numbers[x] = []
    for(let y=0; y<10; y++) {
        numbers[x][y] = [x] + "," + [y];
    }
}

for(let x=0; x<10; x++) {
    document.write(numbers[x].join(" || ") + "<br>");
}