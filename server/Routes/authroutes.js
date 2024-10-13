import express from 'express';
import {connectToDatabase} from "../db/conection.js";
import bcrypt from "bcrypt";


const router = express.Router();

router.post('/register',async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const db = await connectToDatabase();
        const [rows] = await db.query(`SELECT * FROM users WHERE email = ?`,[email]);
        if (rows.length > 0) {
            return res.status(409).json({message: `Email already exists`});
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await db.query("INSERT INTO users (username,email,password) VALUES (? , ? , ?) ", [username,email, hashPassword]);

        res.status(200).send({message:"Successfully registered"});
    }catch (e) {
        res.status(500).send({error: e});
    }


})

export default router;