import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../core/error/app_error";
import { UseCase } from "../../../../core/usecase";
import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user_repository";

interface UserParams{
    name: string,
    password: string,
    photo_url: string,
    email: string,

}

@injectable()
export class CreateUserUseCase implements UseCase<void, UserParams>{
    private _userRepository: UserRepository;
    constructor(
        @inject('UserRepository')
         userRepository: UserRepository

    ){
        this._userRepository = userRepository;
    }
   async call(params: UserParams): Promise<void> {
        const {email, name,password,photo_url} = params;
        const userAlreadyExists = await this._userRepository.getByEmail(email);

        if(userAlreadyExists){
            throw new AppError('User already exists', 401)
        }

        await this._userRepository.create({ data:{email, name, password, photo_url}})
    }
    
}