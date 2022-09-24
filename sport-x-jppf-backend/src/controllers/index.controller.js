import { pool} from '../database.js';

export const Home = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result[0]);
    } catch (error) {
        res.send(error);
    }
};