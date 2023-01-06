import { check } from "express-validator"
import { Request, Response, NextFunction } from "express";
import { validatorResults } from "../../share/utils/handleValidators"

const validateId = [
	check("id")
	.exists()
	.notEmpty()
	.isMongoId(),
	(req: Request, res: Response, next: NextFunction) => {
		return validatorResults(req, res, next)
	}
]

export {
	validateId
}