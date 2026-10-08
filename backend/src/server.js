import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url";

import usuarioRoutes from './routes/usuarioRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'frontend')))

app.use("/guyra", usuarioRoutes);
app.get("/guyra/cadastro", async (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'signPage', 'cadastro.html'));
});
app.get("/guyra/login", async(req,res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'loginPage', 'login.html'));
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});