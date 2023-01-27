import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./create_user_usecase";

export class CreateUserController{
   async handle(request: Request, response: Response){
        console.log(request.body)
        const {name, email, photo_url, password} = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.call({email, name, password, photo_url});

        return response.status(201).send()

    }
}