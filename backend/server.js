const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Configurar Express
const app = express();
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

// Ruta de prueba para la raíz
app.get("/", (req, res) => {
  res.send("¡Servidor backend en funcionamiento!");
});

// Manejo de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// Manejo de errores globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Algo salió mal en el servidor" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
