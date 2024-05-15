const familySelect = document.getElementById('fam');
const api = 'https://www.fruityvice.com/api/fruit/all';

// for the select

function famSelect() {
    fetch(api)
        .then(resp => resp.json())
        .then(data => {
            const fruitFam = new Set();
            data.forEach(fruit => {
                fruitFam.add(fruit.family);
            });
            //sort
            const sortedFruitFam = [...fruitFam].sort((a, b) => a.localeCompare(b));
            sortedFruitFam.forEach(familyType => {
                const option = document.createElement('option');
                option.value = familyType;
                option.text = familyType;
                familySelect.appendChild(option);
            });
        });
}

// to create a table

function makeRows(fruit) {
    const row = document.createElement('tr');
    for (const key in fruit) {
        const cell = document.createElement('td');
        if (key === 'nutritions') {
            const nutritions = fruit[key];
            let nutrition = '';
            for (const nutrient in nutritions) {
                nutrition += `${nutrient}: ${nutritions[nutrient]}, `;
            }
            //for nutrition 
            cell.textContent = nutrition.slice(0, -3); 
        } else {
            cell.textContent = fruit[key];
        }
        row.appendChild(cell);
    }
    return row;
}

// displays the fruit in family
function getFam(family) {
    fetch(api)
        .then(resp => resp.json())
        .then(data => {

            const fruitInFam = data.filter(fruit => fruit.family === family);
            fruitInFam.sort((a, b) => a.name.localeCompare(b.name));
            const table = document.getElementById('fruitTable');
            table.innerHTML = ''; 
            if (fruitInFam.length > 0) {
                const keys = Object.keys(fruitInFam[0]);
                const headerRow = document.createElement('tr');
                keys.forEach(key => {
                    const th = document.createElement('th');
                    th.textContent = key;
                    headerRow.appendChild(th);
                });
                table.appendChild(headerRow);
                fruitInFam.forEach(fruit => {
                    const row = makeRows(fruit);
                    table.appendChild(row);
                });
            } else {
                table.innerHTML = '<tr><td colspan="5">No fruits found for this family</td></tr>';
            }
        });
}


familySelect.addEventListener('change', function() {
    const familyChosen = this.value;
    if (familyChosen) {
        getFam(familyChosen);
    }
});
//searches a specific fruit
document.getElementById('submitFruit').addEventListener('click', function(event){
    event.preventDefault();
    const fruitName = document.getElementById('fruitSearch').value.trim();
    if (fruitName) {
        fetch(`https://www.fruityvice.com/api/fruit/${fruitName}`)
            .then(resp => resp.json())
            .then(data => {
                const table = document.getElementById('searchTable');
                table.innerHTML = ''; 

                if (data.name) {
                    const row = makeRows(data);
                    table.appendChild(row);
                } else {
                    table.innerHTML = `<tr><td colspan="5">No data found for ${fruitName}</td></tr>`;
                }
            });
    } else {
        alert('Please enter a fruit name.');
    }
});

famSelect();
