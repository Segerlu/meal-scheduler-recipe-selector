let express = require('express');
let cors = require('cors')
let app = express();
let secrets = require('./secrets.json')

let { Client } = require('pg')
let connectionString = secrets.connectionString;

let client = new Client ({
    connectionString: connectionString
})

app.use(express.json());
app.use(cors());
const PORT = 5555;

client.connect();

//Read favorites - PHASE I
app.get('/read/favorites', (req, res) => {

    client.query('SELECT * FROM favorites;')
    .then(data => {
        console.log('sending')
        res.send(data.rows)
    })
    .catch(error => {
        res.send(error)
    }) 
})

//Post new favorites - PHASE I
app.post('/add/favorites', (req, res) => {
    let favorite = req.body;
    let sql = 
    `INSERT INTO favorites (id, name, instructions, thumbnail_url, video_url, ingredients) 
    VALUES (${favorite.id}, '${favorite.name}', '${favorite.instructions}', '${favorite.thumbnail_url}', '${favorite.vidoe_url}', '${favorite.ingredients}');`

    client.query(sql)
    .then(data => {
        res.status(201)
        res.send('Favorite Added')
    })
    .catch(error => {
        console.log(error)
        res.send(error)
    })

})

//Delete favorites - PHASE I
app.get('/delete/favorites/:id', (req, res) => {

    let favorite = req.params.id;

    client.query(`DELETE FROM favorites WHERE id = '${favorite}'`)
    .then(data => {
        console.log('favorite deleted')
        res.send('favorite deleted')
    })
    .catch(error => {
        console.log(error)
        res.status(500)
        res.send(error)
    })
})

//Read schedule - PHASE II

//Post new schedule - PHASE II

//Delete schedule - PHASE II

app.listen(PORT, console.log('listening on:', PORT));