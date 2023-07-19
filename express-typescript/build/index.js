"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 7770;
app.get('/betacode', (_req, res) => {
    console.log("Hola mundo");
    res.send('betacode');
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo ${PORT}`);
});
