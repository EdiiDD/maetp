import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validatorResults = (req: Request, res: Response, next: NextFunction) => {
	try {
		validationResult(req).throw()
		return next()
	} catch (err: any) {
		res.status(403)
		res.send({ errors: err.errors })
	}
}

export {
	validatorResults
}