import express from "express";

import {
    criarUsuariosController,
    autenticarUsuariosController
} from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/cadastro', criarUsuariosController);
router.post('/login', autenticarUsuariosController);

export default router;