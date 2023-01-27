import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUsersUseCase } from "./get_users_usecase";

export class GetUsersController{

   async handle(request: Request, response: Response){
        const getUsersUseCase = container.resolve(GetUsersUseCase)
        const users = await getUsersUseCase.call()
        console.log(users)

        return  response.json(users)

    }
}