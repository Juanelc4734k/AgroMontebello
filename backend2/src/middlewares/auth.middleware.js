import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) return res.status(401).json({ message: 'Token requerido' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}