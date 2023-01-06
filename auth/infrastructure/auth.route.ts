import express from "express";

import { validateRegisterUser, validateLoginUser } from "./auth.validator";

import { UseCaseRegisterUser } from "../application/auth.registerUser";
import { AuthController } from "./auth.ctrl";

import { MongoRepository } from "./auth.mongo.repository";
import { UseCaseLoginUser } from "../application/auth.loginUser";

const router = express.Router()

const authRepository = new MongoRepository()

const useCaseRegisterUser = new UseCaseRegisterUser(authRepository)
const useCaseLoginUser = new UseCaseLoginUser(authRepository)

const authControler = new AuthController(
	useCaseRegisterUser,
	useCaseLoginUser
)

router.post("/auth/register", validateRegisterUser, authControler.registerUserCtrl)
router.get("/auth/login", validateLoginUser, authControler.loginUserCtrl);


export default router