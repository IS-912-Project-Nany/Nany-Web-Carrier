const express = require('express');
const path = require('path');

const app = express();

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static(__dirname + '/dist/Nany-Web-Carrier'));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/Nany-Web-Carrier/index.html'));
});

app.listen(process.env.PORT || 5000);