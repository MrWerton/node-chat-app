import "reflect-metadata";
import express from 'express';

const app = express();


const PORT = 4000;
app.listen(PORT, () => console.log(`server run in http://localhost:${PORT}`))