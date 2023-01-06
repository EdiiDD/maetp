import { Response } from "express"

const handleHttpError = (res: Response, message: string = "", code: number = 403) => {
	res.status(code)
	res.send({error: message})
}

export default handleHttpError