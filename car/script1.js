const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // To parse JSON request bodies

// Mock user data for authentication
const users = [
    { email: 'user@example.com', password: 'password123' }
];

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists in the mock data
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid email or password' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
