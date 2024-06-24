const express = require('express');
const mongodb = require('mongodb');

const app = express();
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'products';

app.post('/addReview', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) throw err;
        
        const db = client.db(dbName);
        const collection = db.collection('reviews');
        
        
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
