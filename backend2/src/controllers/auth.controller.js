import { User } from "../models/index.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerCampesino = async (req, res) => {
    try {
        const { nombre, tipo_documento, documento_identidad, correo, telefono, tipo_usuario, contrasena } = req.body;

        const userExists = await User.findOne({ documento_identidad, correo });
        if (userExists) return res.status(400).json({ message: "El usuario ya existe" });

        const saltRoundes = 10;
        const hashedPassword = await bcryptjs.hash(contrasena, saltRoundes);

        const nuevoUsuario = new User({
            nombre,
            tipo_documento,
            documento_identidad,
            correo,
            telefono,
            tipo_usuario,
            contrasena: hashedPassword
        });

        await nuevoUsuario.save();

        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar', error });
    }
}

export const registerFuncionario = async (req, res) => {
    try {
        const { nombre, tipo_documento, documento_identidad, correo, telefono, tipo_usuario, contrasena } = req.body;

        const userExists = await User.findOne({ documento_identidad, correo });
        if (userExists) return res.status(400).json({ message: "El usuario ya existe" });

        const saltRoundes = 10;
        const hashedPassword = await bcryptjs.hash(contrasena, saltRoundes);

        const nuevoUsuario = new User({
            nombre,
            tipo_documento,
            documento_identidad,
            correo,
            telefono,
            tipo_usuario,
            contrasena: hashedPassword
        });

        await nuevoUsuario.save();

        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar', error });
    }
}

export const login = async (req, res) => {
    try {
        const { correo, documento_identidad, contrasena } = req.body;
        const usuario = await User.findOne({ correo, documento_identidad });

        if (!usuario) return res.status(400).json({ message: "El usuario no existe" });

        const passwordMatch = await bcryptjs.compare(contrasena, usuario.contrasena);
        if (!passwordMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

        const token = jwt.sign({ id: usuario._id, tipo_usuario: usuario.tipo_usuario }, process.env.JWT_SECRET, { expiresIn: "2h" });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
}