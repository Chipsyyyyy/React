require('dotenv').config()
const express = require('express');
const cors = require('cors');
const db = require('./Database/db');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

    if (!user){
        return res.status(401).json({ error: 'Invalid username or password '});
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches){
        return res.status(401).json({ error: 'Invalid username or password '});
    }

    const token = jwt.sign(
        {userId: user.id},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    );

    res.status(200).json({ token })
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});