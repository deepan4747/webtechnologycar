// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/carRentalDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Mongoose schema for the car rental
const carRentalSchema = new mongoose.Schema({
    carMake: String,
    carModel: String,
    rentalStart: Date,
    rentalEnd: Date,
    renterName: String,
    renterEmail: String,
    rentalPrice: Number
});

const CarRental = mongoose.model('CarRental', carRentalSchema);
/*
// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const newRental = new CarRental({
        carMake: req.body.carMake,
        carModel: req.body.carModel,
        rentalStart: req.body.rentalStart,
        rentalEnd: req.body.rentalEnd,
        renterName: req.body.renterName,
        renterEmail: req.body.renterEmail,
        rentalPrice: req.body.rentalPrice
    });

    newRental.save((err) => {
        if (err) {
            res.status(500).send('Error saving rental data.');
        } else {
            res.send('Car rental data successfully saved!');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
*/

document.getElementById('rentalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const carMake = document.getElementById('carMake').value;
    const carModel = document.getElementById('carModel').value;
    const rentalStart = document.getElementById('rentalStart').value;
    const rentalEnd = document.getElementById('rentalEnd').value;
    const renterName = document.getElementById('renterName').value;
    const renterEmail = document.getElementById('renterEmail').value;
    const rentalPrice = document.getElementById('rentalPrice').value;

    // Send form data using Fetch API
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            carMake: carMake,
            carModel: carModel,
            rentalStart: rentalStart,
            rentalEnd: rentalEnd,
            renterName: renterName,
            renterEmail: renterEmail,
            rentalPrice: rentalPrice
        })
    })
    .then(response => response.text())
    .then(data => {
        alert('Success: ' + data);  // Show success message
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
