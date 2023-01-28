import e, { Request, Response } from "express";
import { UseCaseGetQuestions } from "../application/question.questions";
import handleHttpError from "../../share/utils/handleError";
import { validationResult } from "express-validator";

export class QuestionsController {

	constructor(private useCaseGetQuestions: UseCaseGetQuestions) { }

	public getQuestions = async (req: Request, res: Response) => {
		try {
			const questions = await this.useCaseGetQuestions.execute()
			res.send({ questions })
		} catch (error) {
			handleHttpError(res, 'ERROR_GET_QUESTIONS')
		}
	}
}