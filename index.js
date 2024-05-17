const client = require('@supabase/supabase-js')
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000
app.use(parser.json())
app.use(express.static(__dirname + '/public'));
app.use(cors())

const url = 'https://oybduybmitwmehjkpayz.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95YmR1eWJtaXR3bWVoamtwYXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MzA0OTIsImV4cCI6MjAzMTMwNjQ5Mn0.Qt-elaT-FCzFJ4OQRfJyhDBxehfgIraudf4Mxm8C9Mg'
const supabase = client.createClient(url, key)

app.get('/', (req, res) => {
    res.sendFile('public/favorite.html', { root: __dirname })
})

app.get('/fruits', async (req, res) => {
    console.log('Getting All Users')

    const { data, error } = await supabase
        .from('Fruit')
        .select()
    
    if(error) {
        console.log('Error')
        res.send(error)
    } else {
        res.send(data)
    }
})

app.post('/fruit', async (req, res) => {
    console.log('Adding User Fruit')
    var first = req.body.first
    var last = req.body.last
    var fruit = req.body.fruit
    var email = req.body.email

    const { data, error } = await supabase
        .from('Fruit')
        .insert({ 'first_name': first, 'last_name': last, 'favorite_fruit': fruit, 'email_address': email})
        .select()
    if(error) {
        console.log("Error")
        res.send(error)
    } else {
        res.send(data)
    }
})

app.listen(port, () => {
    console.log('App is live')
})