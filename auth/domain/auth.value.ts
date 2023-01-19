import { v4 as uuid } from "uuid"
import { UserEntity } from "../../user/domain/user.entity"
import { LoginEntity } from "./auth.entity"

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

export class RegisterValue implements UserEntity {
	uuid: string
	nick_name: string
	email: string
	password: string

	constructor({ nickName, email, password }:
		{ nickName: string, email: string, password: string }) {
		this.uuid = uuid()
		this.nick_name = nickName
		this.email = email
		this.password = password
	}
}

export class LoginValue implements LoginEntity {
	email: string
	password: string

	constructor({ email, password }: { email: string, password: string }) {
		this.email = email
		this.password = password
	}
}