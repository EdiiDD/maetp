import { check, param } from "express-validator"

import { Request, Response, NextFunction } from "express";
import { validatorResults } from "../../share/utils/handleValidators"

const validateQuestions = [
	check("gameType")
		.exists()
		.isNumeric(),

	(req: Request, res: Response, next: NextFunction) => {
		return validatorResults(req, res, next)
	}
]

export default validateQuestions