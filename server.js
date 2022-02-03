const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const fs = require('fs')

const uuid = require("uuid")

const app = express();
const PORT = 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use( express.static('public'));

app.use("/", htmlRoutes);

app.use("/api", apiRoutes);


// app.post('/api/notes', (req, res) => {

//     // create (persist) data

//     // access the new note data from 'req'

//     // push it to my existing list of notes

//     // write my updated notes list to the 'db.json' file

// });

app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`)
);

