import express from "express";
import { UseCaseGetAllGoals } from "../application/goal.getAllGoals";
import { MongoRepository } from "./goal.mongo.respository";
import { UseCaseGetGoalById } from "../application/goal.getGoalById";
import { GoalController } from "./goal.crt";
import { validateId } from "../../share/utils/validatorId";

const router = express.Router()

const goalRepository = new MongoRepository()

const useCaseGetAllGoals = new UseCaseGetAllGoals(goalRepository)
const useCaseGetGoalById = new UseCaseGetGoalById(goalRepository)

const goalController = new GoalController(
	useCaseGetAllGoals,
	useCaseGetGoalById
)


router.get("/goal", goalController.getAllGoalsCtrl)
router.get("/goal/:id", validateId, goalController.getGoalByIdCtrl)

export default router