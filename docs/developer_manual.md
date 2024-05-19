The Fruit App: Developer Manual

1. How to install your application and all dependencies:
This program uses Node.js 
To check install, put this command into the terminal: `node -v`

To start using the Fruit App, you must clone the repository onto a terminal. 
`git clone https://github.com/wdelmo5123/INST377-Fruit-App.git`

2. How to run your application on a server:
Open VSCode on your device (make sure to actually download VSCode) and open the cloned repository file. Then, open the repository’s terminal and type “npm start” (make sure you check you have node). You can check if the server works on the  application by going to the Vercel link on Github and refreshing the Favorite Fruits page, which should show the table of names from the database. The most recent deployment on Vercel has the server automatically working, so npm start may not be required. You can also check this without Vercel by going into your browser (Chrome preferred) and typing localhost, which should show the same table if you did “npm start” on the terminal.

3. How to run any tests you have written for your software:
On the fruit chart page, type in any fruit name (it will not create a chart if there are spelling errors and if it's a non-fruit) and press the “Get Fruit!” button. This should create a bar chart of nutritional information about the fruit. 
On the families page, go to the top down options and select a family. It should pop up a table about all the fruits under the family and all the information about it (id, family, order, genus, and nutritions). You can also type in a single fruit name and it should pop up the same information for that specific fruit.
On the favorite fruits page, the bottom of the page should have a table containing people’s information and their favorite fruit if the server is running. Filling in the first name, last name, favorite fruit, and email address and pressing submit will add a new entry to the table at the bottom. 

4. The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do:
GET
/api/fruit/all
`fetch('https://www.fruityvice.com/api/fruit/all')
	.then(resp => resp.json())
	.then(data => …)`
This will return all fruit types and their data that come with it.

/api/fruit/name
let fruit = “orange”
`fetch(`https://www.fruityvice.com/api/fruit/${fruit})
	.then(resp => resp.json())
	.then(data => console.log(data))`
This will return the data for the specific fruit only. 

/api/fruit/id 
Let id = 4
`fetch(`https://www.fruityvice.com/api/fruit/${id})
	.then(resp => resp.json())
	.then(data => console.log(data))`
Instead of using name, it will return by id.

/api/fruits
fetch(`${host}/fruits`)
	.then((res) => res.json())
	.then((res) =>){}
This gets all the current information from the supabase and creates a table.

POST
/api/fruit
`fetch(`${host}/fruit`, {
        method: 'POST',
        body: JSON.stringify({
            "first": `${document.getElementById('first').value}`,
            "last": `${document.getElementById('last').value}`,
            "fruit": `${document.getElementById('fruit').value}`,
            "email": `${document.getElementById('email').value}`
        }),`
It will create a person’s favorite fruit onto the supabase and be added to the table.

5. A clear set of expectations around known bugs and a road-map for future development:
	There are two known bugs that can be fixed in the future. There is a bug in the home page. There are various light green patches under each fruit name. There is also a potential bug under the families page. When first loaded up, the fruits don't show up until you change the family. We are not entirely sure if this is a bug, but it's an observation, but the functionality works.
	There is a road map for future development. First, the two bugs will be fixed and emphasized. Second, there would be more details under the favorite fruits page. We would add functions that would count the number of fruits that would be considered the user’s favorite. We would make a chart to determine which fruit is the most favorite. Third, we would make a new page that would act like a fruit search engine. We can add filters to it to narrow it by nutritional facts. For example, we can filter by finding fruits under 50 calories and the results would show as a table. 
	
