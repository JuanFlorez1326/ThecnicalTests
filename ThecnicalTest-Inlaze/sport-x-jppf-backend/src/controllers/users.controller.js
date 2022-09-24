import { pool } from "../database.js";

export const listUsers = async (req, res) => { 
    try {
        const sql = await pool.query("SELECT * FROM users");
        res.json(sql[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error
        });
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = await pool.query("SELECT * FROM users WHERE id = ?", [id]);

        if(sql[0].length  <= 0){
            return res.status(404).json(
                {text: "User not found"}
            );
        }else{
            res.json(sql[0]);
        }
    } catch (error) {
        res.json(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const { names, surnames, mobile_phone, landline, email, type_id, number_id } = req.body;
        const result = await pool.query("INSERT INTO users (names, surnames, mobile_phone, landline, email, type_id, number_id) VALUES (?, ?, ?, ?, ?, ?, ?)", [names, surnames, mobile_phone, landline, email, type_id, number_id]);
        res.json(result[0]);
    } catch (error) {
        res.json(error);
    }
}