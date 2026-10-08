import{
    criarUsuarios,
    autenticarUsuarios
} from '../models/usuarioModel.js';

export {
    criarUsuariosController,
    autenticarUsuariosController
}

import bycrypt from "bcrypt";

const criarUsuariosController = async (req, res) => {
    try {
        const { nome, telefone, email, senha } = req.body;

        if (!nome || !telefone || !email || !senha){
            return res.status(400).json({erro: "Preencha todos os campos"});
        }

        const senhaHash = await bycrypt.hash(senha, 10);

        const usuario = await criarUsuarios (nome, telefone, email, senhaHash);

        res.status(201).json(usuario)
    } catch (e){
        res.status(500).json({erro: "Falha ao criar o usuário."})
    }
};

const autenticarUsuariosController = async (req, res) => {
    try {
        const {email, senha} = req.body;

        if (!email || !senha){
            return res.status(400).json({erro: "Preencha todos os campos"});
        }

        const usuario = await autenticarUsuarios(email);
        const senhaLogin = await bycrypt.compare(senha, usuario.senha);

        if (!usuario || !senhaLogin){
            res.status(401).json({erro: "Email ou senha inválidos"});
        }

        res.status(200).json({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        });
    } catch (e) {
        res.status(500).json({ erro: "Falha ao fazer login."})
    }
};