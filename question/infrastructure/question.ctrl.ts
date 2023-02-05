import e, { Request, Response } from "express";
import { UseCaseGetQuestions } from "../application/question.questions";
import handleHttpError from "../../share/utils/handleError";
import { validationResult } from "express-validator";
import { GetGameValue } from "../domain/question.value";

export class QuestionsController {

	constructor(private useCaseGetQuestions: UseCaseGetQuestions) { }

	// 1 Normal Game
	// 2 Expert Game
	// 3 Good Game

	public getQuestions = async (req: Request, res: Response) => {
		try {

			const language = req.headers["accept-language"] || "es"
			const { game_type } = req.query

			const questions = await this.useCaseGetQuestions.execute(new GetGameValue({
				language: language,
				gameType: Number(game_type)
			}
			))

			res.send({ questions })
		} catch (error) {
			handleHttpError(res, 'ERROR_GET_QUESTIONS')
		}
	}
}