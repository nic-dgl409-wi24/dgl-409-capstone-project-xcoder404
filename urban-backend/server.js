const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'urbanglide',
});




app.get('/', (re, res)=>{
    return res.json("From backend side");
})
// Define routes to handle API requests here...

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO signup (`emailId`, `password`) VALUES (?)";
    const values = [
        req.body.emailId,
        req.body.password
    ]
    db.query(sql,[values], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const { emailId, password } = req.body;
    const sql = "SELECT * FROM signup WHERE `emailId` = ?";
    db.query(sql, [emailId], (err, result) => {
        if (err) {
            console.error("Error retrieving data:", err);
            return res.status(500).json({ error: "Failed to login" });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = result[0];
        if (user.password !== password) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        return res.json({ message: "Login successful" });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
