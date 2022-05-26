const express = require('express');
const app = express();
const fetch = require("cross-fetch")

app.get('/:username', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    var response = await fetch("https://tiktok.com/@" + req.params.username);
    const data = await response.text()
    res.send({html: data})
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Ready")
})


module.exports = app;
