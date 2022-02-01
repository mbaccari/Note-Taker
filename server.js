const express = require('express');
const path = require('path')

const app = express();
const PORT = 3001;

app.use( express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json()
})


app.post('/api/notes', (req, res) => {

    // create (persist) data

    // access the new note data from 'req'

    // push it to my existing list of notes

    // write my updated notes list to the 'db.json' file

});

app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`)
);