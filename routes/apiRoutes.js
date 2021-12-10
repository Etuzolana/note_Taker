const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json')
// /api/notes
router.get('/notes', (req, res) =>{

    //const UsersNotes = fs readfile(db)
    // res.sendFile( UsersNotes)
    res.send("/api/notes GET route hit")
});
// /api/notes
router.post('/notes', (req, res) =>{
    //fs readfile(db)
    //append to the file
    // fs writefile(db)
    //res.status(200)
    res.send("/api/notes POST route hit")
});

module.exports = router;