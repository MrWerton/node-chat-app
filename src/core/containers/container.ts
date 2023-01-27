import { container } from "tsyringe";
import { UserRepository } from "../../features/user/repositories/user_repository";
import { UserRepositoryImp } from "../../features/user/repositories/user_repository_imp";

container.registerSingleton<UserRepository>("UserRepository", UserRepositoryImp)