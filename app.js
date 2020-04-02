const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

let ejs = require('ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/submit', (req, res) => {
    let urlObject = {
        itemName: req.body['item-name'],
        itemDescription: req.body['item-description'],
        itemPrice: req.body['item-price'],
        itemLocation: req.body['item-location'],
    };
    res.render("listing.ejs", {
        urlObject
    });
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});