import { check } from "express-validator"
import { Request, Response, NextFunction } from "express";
import { validatorResults } from "../../share/utils/handleValidators"

const validateRegisterUser = [
	check("nick_name")
		.optional({
			checkFalsy: true
		})
		.isString()
		.isLength({
			min: 3,
			max: 10
		}),

	check("email")
		.exists()
		.notEmpty()
		.isEmail(),

	check("password")
		.exists()
		.notEmpty()
		.isString()
		.isLength({
			min: 8,
			max: 15
		}),

	check("repeat_password")
		.exists()
		.notEmpty()
		.isString()
		.isLength({
			min: 8,
			max: 15
		}),
	(req: Request, res: Response, next: NextFunction) => {
		return validatorResults(req, res, next)
	}
]

const validateLoginUser = [
	check("email")
		.exists()
		.notEmpty()
		.isEmail(),

	check("password")
		.exists()
		.notEmpty()
		.isString()
		.isLength({
			min: 8,
			max: 15
		}),
	(req: Request, res: Response, next: NextFunction) => {
		return validatorResults(req, res, next)
	}
]

export {
	validateRegisterUser,
	validateLoginUser
}