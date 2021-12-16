const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json')
// /api/notes
router.get('/notes', (req, res) =>{

    //const UsersNotes = fs readfile(db)
   

    
    // res.sendFile( UsersNotes)
    res.json(db)
});
// /api/notes
router.post('/notes', (req, res) =>{
    //fs readfile(db)


        db.push(req.body)
    //append to the file

    // fs writefile(db)
    fs.writeFileSync("./db/db.json",JSON.stringify(db))

    //res.status(200)
    res.json(db)
});


module.exports = router;