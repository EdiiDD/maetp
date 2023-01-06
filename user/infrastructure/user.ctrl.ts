import { Request, Response } from "express";
import { UseCaseGetUserById } from "../application/useCaseGetUserById";
import handleHttpError  from "../../share/utils/handleError"


export class UserControler {

	constructor(private useCaseGetUserById: UseCaseGetUserById) {}

	public getByIdCtrl = async({params}: Request, res: Response) => {
		try {
			const {id = ""} = params
			const user = await this.useCaseGetUserById.execute(id)
			if(!user){
				handleHttpError(res, "USER_NOT_EXISTS", 404)
				return
			}
			res.send({user})
		} catch(e){
			handleHttpError(res, 'ERROR_GET_USER')
		}
	}
}