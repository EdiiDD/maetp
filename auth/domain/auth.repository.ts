import { LoginEntity } from "./auth.entity";
import { UserEntity } from "../../user/domain/user.entity";
import { ErrorEntity } from "../../share/domain/error.value";
import { UserValue } from "./auth.value";

export interface AuthRepository {

	registerUser(user: UserEntity): Promise<UserValue | ErrorEntity>

	loginUser(user: LoginEntity): Promise<UserValue | null>
}