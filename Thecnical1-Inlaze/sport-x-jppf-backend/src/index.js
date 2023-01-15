import express from "express";
import userRoutes from "./routes/users.routes.js";
import pqrRoutes from "./routes/pqr.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors"; 

const app = express();
export const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/', userRoutes);
app.use('/api/', pqrRoutes);
app.use('/api/', indexRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});