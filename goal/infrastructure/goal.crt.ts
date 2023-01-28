import { Request, Response } from "express";
import { UseCaseGetAllGoals } from "../application/goal.getAllGoals";
import { UseCaseGetGoalById } from "../application/goal.getGoalById";
import handleHttpError from "../../share/utils/handleError";
import { SearchBaseValue, SearchWithIdValue } from "../../share/domain/search.value";
import { matchedData } from "express-validator";
import { ErrorUtils } from "../../share/domain/error.value";

export class GoalController {


	constructor(
		private useCaseGetAllGoals: UseCaseGetAllGoals,
		private useCaseGetGoalById: UseCaseGetGoalById
	) { }


	public getAllGoalsCtrl = async (req: Request, res: Response) => {
		try {
			const language = req.headers["accept-language"] || "es"

			const goals = await this.useCaseGetAllGoals.execute(
				new SearchBaseValue({
					language: language
				})
			)

			if (ErrorUtils.instanceOfErrorEntity(goals)) {
				handleHttpError(res, 'ERROR_GOALS', 422)
				return
			}


			res.send({ goals: goals })
		} catch (error) {
			handleHttpError(res, 'ERROR_REGISTER_USER')
		}
	}

	public getGoalByIdCtrl = async (req: Request, res: Response) => {
		try {
			const id = matchedData(req).id
			const language = req.headers["accept-language"] || "es"

			const goal = await this.useCaseGetGoalById.execute(
				new SearchWithIdValue({
					id: id,
					language: language
				})
			)
			res.send(goal)
		} catch (error) {
			handleHttpError(res, 'ERROR_REGISTER_USER')
		}
	}

}