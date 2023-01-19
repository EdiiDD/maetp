import e, { Request, Response, NextFunction } from "express";
import handleHttpError from "../utils/handleError";
import { verifyToken } from "../utils/jwt.handle";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.headers.authorization) {
			handleHttpError(res, "NOT_TOKEN", 401)
			return
		}

		const token = req.headers.authorization.split(" ").pop()
		if (!!token) {
			const dataToken = await verifyToken(token)
			if (!dataToken) {
				handleHttpError(res, "ERROR_ID_TOKEN", 401)
				return
			}
		}
		next()

	} catch (error) {
		handleHttpError(res, "NOT_SESSION", 401)
	}
}