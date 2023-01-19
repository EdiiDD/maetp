import { v4 as uuid } from "uuid"
import { UserEntity } from "../../user/domain/user.entity"
import { AuthUserDTOEntity } from "../domain/auth.entity"

export class AuthUserDTOValue implements AuthUserDTOEntity {
	uuid: string
	nick_name: string
	email: string

	constructor({ uuid, nickName, email }:
		{ uuid: string, nickName: string, email: string, }) {
		this.uuid = uuid
		this.nick_name = nickName
		this.email = email
	}
}