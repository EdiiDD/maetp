import { Request, Response } from "express";
import { UseCaseRegisterUser } from "../application/auth.registerUser";
import { matchedData } from "express-validator";
import handleHttpError from "../../share/utils/handleError"
import { LoginValue, RegisterValue } from "../domain/auth.value";
import { ErrorUtils } from "../../share/domain/error.value";
import { UseCaseLoginUser } from "../application/auth.loginUser";
import { encrypt, verified } from "../../share/utils/bcrypt.handl";
import { generateToken } from "../../share/utils/jwt.handle";
import { AuthUserDTOValue } from "./user.value";

export class AuthController {

	constructor(
		private useCaseRegisterUser: UseCaseRegisterUser,
		private useCaseLoginUser: UseCaseLoginUser
	) { }

	public registerUserCtrl = async (req: Request, res: Response) => {
		try {
			const cosas = matchedData(req)
			const passHash = await encrypt(cosas.password)
			const user = new RegisterValue({
				nickName: cosas.nick_name,
				email: cosas.email,
				password: passHash,
			})

			const recuperado = await this.useCaseRegisterUser.execute(user)

			if (ErrorUtils.instanceOfErrorEntity(recuperado)) {
				handleHttpError(res, 'DUPLICATE_EMAIL', 422)
				return
			}
			const token = generateToken(user?.email!)

			res.send({ token })
		} catch (e) {
			handleHttpError(res, 'ERROR_REGISTER_USER')
		}
	}

	public loginUserCtrl = async (req: Request, res: Response) => {
		try {
			const userReq = matchedData(req)

			// Create a use case only for get a user by email
			const user = await this.useCaseLoginUser.execute(
				new LoginValue(
					{
						email: userReq.email,
						password: userReq.password
					}
				))

			console.log(user)
			if (!user) {
				handleHttpError(res, "USER_NOT_EXISTS", 404)
				return
			}

			const isCorrect = await verified(userReq.password, user?.password!)

			if (!isCorrect) {
				console.log("2")
				handleHttpError(res, "PASSWORD_INCORRECT", 403)
				return
			}

			const token = generateToken(user?.uuid!)
			const userDTO = new AuthUserDTOValue(
				{
					uuid: user.uuid,
					nickName: user.nick_name,
					email: user.email
				}
			)
			res.send({
				token,
				user: userDTO
			})

		} catch (e) {
			handleHttpError(res, 'ERROR_LOGIN_USER')
		}
	}
}