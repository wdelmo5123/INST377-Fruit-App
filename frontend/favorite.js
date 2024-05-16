async function loadPeopleData() {
    var host = window.location.origin;

    console.log(host)
    console.log('working from async')

    await fetch('http://127.0.0.1:3000/fruits')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)

            var table = document.createElement('table')
            table.setAttribute('id', 'personInfo')

            var tableRow = document.createElement('tr')

            var tableHeading1 = document.createElement('th')
            tableHeading1.innerHTML = 'First Name'
            tableRow.appendChild(tableHeading1)

            var tableHeading2 = document.createElement('th')
            tableHeading2.innerHTML = 'Last Name'
            tableRow.appendChild(tableHeading2)

            var tableHeading3 = document.createElement('th')
            tableHeading3.innerHTML = 'Favorite Fruit'
            tableRow.appendChild(tableHeading3)

            var tableHeading4 = document.createElement('th')
            tableHeading4.innerHTML = 'Email'
            tableRow.appendChild(tableHeading4)

            table.appendChild(tableRow)

            

            res.forEach(person => {
                var personRow = document.createElement('tr')
                var person_first_name = document.createElement('td')
                var person_last_name = document.createElement('td')
                var person_fruit = document.createElement('td')
                var person_email = document.createElement('td')

                person_first_name.innerHTML = person.first_name
                personRow.appendChild(person_first_name)
                table.appendChild(personRow)

                person_last_name.innerHTML = person.last_name
                personRow.appendChild(person_last_name)
                table.appendChild(personRow)

                person_fruit.innerHTML = person.favorite_fruit
                personRow.appendChild(person_fruit)
                table.appendChild(personRow)

                person_email.innerHTML = person.email_address
                personRow.appendChild(person_email)
                table.appendChild(personRow)


            });

            const preExistingTable = document.getElementById('personInfo')
            if(preExistingTable) {
                preExistingTable.remove
            }
            var cutoff = document.getElementById('cutoff')
            cutoff.insertAdjacentElement('beforebegin', table)

        })

}

async function createFavFruit() {
    console.log('creating person')
    await fetch('http://127.0.0.1:3000/fruit', {
        method: 'POST',
        body: JSON.stringify({
            "first": `${document.getElementById('first').value}`,
            "last": `${document.getElementById('last').value}`,
            "fruit": `${document.getElementById('fruit').value}`,
            "email": `${document.getElementById('email').value}`

        }),
        headers: {
            "Content-type": "application/json" 
        }
    })
    .then((res) => res.json())
    .then((res) => {

        })
    await loadPeopleData();
}

window.onload = loadPeopleData;