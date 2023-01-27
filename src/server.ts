import "reflect-metadata";
import express from 'express';
import 'express-async-errors'
import { CreateUserController } from "./features/user/usecases/createUser/create_user_controller";
import './core/containers/container'
import { handleErrors } from "./core/middlewares/handle_errors";
import { GetUsersController } from "./features/user/usecases/getUserUseCase/get_users_controller";
const app = express();

const createUserController = new CreateUserController()
const getUserController = new GetUsersController()

app.use(express.json())
app.post('/',createUserController.handle);
app.get('/',getUserController.handle);
app.use(handleErrors)


const PORT = 4000;

app.listen(PORT, () => console.log(`server run in http://localhost:${PORT}`))