import express from "express";
import { MongoRepository } from "./question.mongo.repository";
import { UseCaseGetQuestions } from "../application/question.questions";
import { QuestionsController } from "./question.ctrl";
import validateQuestions from "./question.validator";



const router = express.Router()

const authRepository = new MongoRepository()

const useCaseGetQuestions = new UseCaseGetQuestions(authRepository)

const questionControler = new QuestionsController(useCaseGetQuestions)

router.get("/questions", validateQuestions, questionControler.getQuestions)

export default router