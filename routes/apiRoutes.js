const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/utils');

router.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {

        const notes = JSON.parse(data);

        res.json(notes);

    })
});

// router.post("/api/notes", (req, res) => {
//     console.log(req.body)
// })


router.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newTip = {
        title,
        text,
        id: uuid.v4(),
      };
  
      readAndAppend(newTip, path.join(__dirname, '../db/db.json'));
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });







  router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    console.log(req.params.id);
    readFromFile(path.join(__dirname, '../db/db.json'))
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all tips except the one with the ID provided in the URL
        const result = json.filter((note) => note.id !== noteId);
  
        // Save that array to the filesystem
        writeToFile(path.join(__dirname, '../db/db.json'), result);
  
        // Respond to the DELETE request
        res.json(`Item ${noteId} has been deleted 🗑️`);
      });
  });



module.exports = router;
