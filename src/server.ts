import "reflect-metadata";
import express from 'express';
import 'express-async-errors'
import { CreateUserController } from "./features/user/usecases/createUser/create_user_controller";
import './core/containers/container'
import { handleErrors } from "./core/middlewares/handle_errors";
const app = express();

const createUserController = new CreateUserController()

app.use(express.json())
app.post('/',createUserController.handle);
app.use(handleErrors)


const PORT = 4000;

app.listen(PORT, () => console.log(`server run in http://localhost:${PORT}`))