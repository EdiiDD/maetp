import { check } from "express-validator"
import { Request, Response, NextFunction } from "express";
import { validatorResults } from "../../share/utils/handleValidators"

export const validateId = [
	check("id")
		.isMongoId()
		.notEmpty(),

	(req: Request, res: Response, next: NextFunction) => {
		return validatorResults(req, res, next)
	}
]