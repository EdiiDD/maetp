import { v4 as uuid } from "uuid"
import { UserEntity } from "./user.entity"

export class UserValue implements UserEntity {
	uuid: string
	email: string
	password: string
	nick_name: string

	constructor({ email, password, nickName }: { email: string, password: string, nickName: string }) {
		this.uuid = uuid()
		this.email = email
		this.password = password ?? ""
		this.nick_name = nickName
	}
}