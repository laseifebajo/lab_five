const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//listening to a api that is coming into the url and then will print out the text thats in the  ""
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//listening for a http request
//req = request 
//res = response
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})
//listening for a http request
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ]
    //sending back the status 200 means everything is ok 
    res.staus(200).json({
        mymovies: movies,
        'message': 'Data Sent'
    })
})

app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/name', (req,res) =>{
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname )
})

app.post('/name', (req,res) =>{
    res.send('Goodbye ' + req.body.firstname +' ' +req.body.lastname);
})


//here a server is set up which is listening for http requests 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})