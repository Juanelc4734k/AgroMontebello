import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo_documento: { type: String, required: true },
    documento_identidad: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String },
    tipo_usuario: { type: String, enum: ['campesino', 'funcionario', 'admin'], required: true },
    contrasena: { type: String, required: true },
    fecha_registro: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);