const db = require('../Database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res){
    const { username, password } = req.body;
    try {
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
    } catch (err){
        return res.status(500).json({error: 'Something went wrong. Please try again.'})
    }
    
}

async function signup(req, res){
    const { username, password} = req.body;

    try {
        const existingUser = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

        if(existingUser){
            return res.status(409).json({error: 'Username already taken.'})
        }

        const hashed_password = await bcrypt.hash(password, 10);

        db.prepare('INSERT INTO users (username, password) VALUES (?, ?)'
        ).run(username, hashed_password);

        return res.status(200).json({message: 'Account created successfully.'});
    } catch (err){
        console.error(err);
        return res.status(500).json({error: 'Something went wrong. Please try again.'});
    }
        
}

module.exports = { login , signup }