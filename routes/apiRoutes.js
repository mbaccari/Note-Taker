const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

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
    const newNote = req.body;
    newNote.id = uuid.v4();

    // fs.readFile('../db/db.json')
    //     .then((data) => {
    //         const notes = JSON.parse(data);
    //         notes.push(newNote);
    //     });
    
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        const notes = JSON.parse(data);
        notes.push(newNote);
    })
    
})



// router.delete('/notes', (req, res) => {
//    readFromFile('../db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {

//     })
//   });

// router.post("/notes", function(req, res) {
//     fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
//         if (err) throw err;
//         const notes = JSON.parse(data);
//         const newNote = req.body;
//         newNote.id = uuid.v4();
//         notes.push(newNote);

//         const createNote = JSON.stringify(notes);
//         fs.writeFile(path.join(__dirname, "../db/db.json"), createNote, (err) => {
//             if(err) throw err;
//         });
//         res.json(newNote);
//     });
// });



module.exports = router;
