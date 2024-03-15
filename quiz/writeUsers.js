const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.post('/adduser', (req, res) => {
    let newuser = req.body;
    req.users.push(newuser);
    fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON.stringify(newuser), (err) => {
    if (err) console.log('Fail to write');
    else console.log('User Saved');
    });
    res.send('done');
});


module.exports = router