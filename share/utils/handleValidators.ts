import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validatorResults = (req: Request, res: Response, next: NextFunction) => {
	try {
		validationResult(req).throw()
		return next()
	} catch (err: any) {
		console.log(err)
		res.status(403)
		res.send({ error: err })
	}
}

export {
	validatorResults
}