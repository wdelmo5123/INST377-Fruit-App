function fruitnutrients() {
    let fruitname = document.getElementById('name').value
    let chart = document.getElementById('nutritionchart')
    fetch(`https://www.fruityvice.com/api/fruit/${fruitname}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)

        let calories = res.nutritions.calories
        console.log(calories)

        let carbs = res.nutritions.carbohydrates
        console.log(carbs)

        let fat = res.nutritions.fat
        console.log(fat)

        let protein = res.nutritions.protein
        console.log(protein)

        let sugar = res.nutritions.sugar
        console.log(sugar)

        new Chart(chart, {
            type: 'bar',
            data: {
                labels: ["Calories", "Carbohydrates", "Fats", "Protein", "Sugar"],
                datasets: [{
                    label: 'Amount',
                    data: [calories, carbs, fat, protein, sugar],
                    borderwidth: 2,
                }]
                
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
}

window.onload = function() {
    fruitnutrients();
}