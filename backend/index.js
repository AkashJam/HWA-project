const express = require("express");
const app = express();

var cors = require('cors');

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/name', (req,res) => {
    return res.json({
        name: "John Doe"
    })
})
app.listen(5000, () => console.log("Listenting on port 5000"));
