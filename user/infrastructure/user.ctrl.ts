import { Request, Response } from "express";
import { UseCaseGetUserById } from "../application/useCaseGetUserById";
import handleHttpError from "../../share/utils/handleError"


export class UserControler {

	constructor(private useCaseGetUserById: UseCaseGetUserById) { }

	public getByIdCtrl = async ({ params }: Request, res: Response) => {
		try {
			res.send("Hola")
		} catch (e) {
			handleHttpError(res, 'ERROR_GET_USER')
		}
	}
}