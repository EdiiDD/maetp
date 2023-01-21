import { LoginEntity } from "./auth.entity";
import { UserValue } from "./auth.value";

import { UserEntity } from "../../user/domain/user.entity";
import { ErrorEntity } from "../../share/domain/error.value";

export interface AuthRepository {

	registerUser(user: UserEntity): Promise<UserValue | ErrorEntity>

	loginUser(user: LoginEntity): Promise<UserValue | null>
}