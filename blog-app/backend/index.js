require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const welcomeRoute = require('./routes/welcomeRoute');

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes)
app.use('/api', welcomeRoute)

app.use((req, res) => {
    res.status(404).json(({ error: 'Resource not found' }))
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});