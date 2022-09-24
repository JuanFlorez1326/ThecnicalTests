import { pool } from "../database.js";

export const listAllPqr = async (req, res) => {
    try {
        const sql = await pool.query("SELECT * FROM pqr");
        res.json(sql[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            error
        });
    }
}

export const getPqr = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = await pool.query("SELECT * FROM pqr WHERE id_pqr = ?", [id]);
        if(sql[0].length  <= 0){
            return res.status(404).json({text: "Pqr not found"});
        }else{
            res.json(sql[0]);
        }
        res.json(sql[0]);
    } catch (error) {
        res.json(error);
    }
}

export const createPqr = async (req, res) => {
    try {
        const { id_type_user, title, ticket_type, description ,ticket_status, ticket_creation_date  } = req.body;
        const result = await pool.query("INSERT INTO pqr (id_type_user, title, ticket_type, description, ticket_status, ticket_creation_date) VALUES (?, ?, ?, ?, ?, ?)", [id_type_user, title, ticket_type, description, ticket_status, ticket_creation_date]);
        res.json(result[0]);
    } catch (error) {
        res.json(error);
    }
}

export const updatePqr = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, ticket_type, ticket_status, ticket_creation_date } = req.body;
        const sql = await pool.query("UPDATE pqr SET title = ?, ticket_type = ?, ticket_status = ?, ticket_creation_date = ? WHERE id_pqr = ?", [title, ticket_type, ticket_status, ticket_creation_date, id]);
        res.json(sql[0]);
    } catch (error) {
        res.json(error);
    }
}

export const deletePqr = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = await pool.query("DELETE FROM pqr WHERE id_pqr = ?", [id]);
        res.json(sql[0]);
    } catch (error) {
        res.json(error);
    }
}

export const deleteGroupPrq = async (req, res) => {
    try {
        const {ticket_type} = req.params
        const sql = await pool.query("DELETE FROM pqr WHERE ticket_type = ?", [ticket_type]);
        res.json(sql[0]);
    } catch (error) {
        res.json(error)
    }
}

export const getPqrById = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = await pool.query("SELECT u.*, p.*  FROM users u INNER JOIN pqr p ON u.id = p.id_type_user WHERE u.id = ?;", [id]);
        res.json(sql[0]);
    } catch (error) {
        res.json(error);
    }
}