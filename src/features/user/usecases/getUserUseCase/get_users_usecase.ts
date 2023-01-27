import { inject, injectable } from "tsyringe";
import { UseCase } from "../../../../core/usecase";
import { User } from "../../entities/user";
import { UserRepository } from "../../repositories/user_repository";



@injectable()
export class GetUsersUseCase implements UseCase<User[], null>{
    private _userRepository: UserRepository;

    constructor(
        @inject('UserRepository')
         userRepository: UserRepository
    ){
        this._userRepository = userRepository;
    }

    async call(): Promise<User[]> {
        const users = await this._userRepository.getAll();

        return users;

    }
   
    
}