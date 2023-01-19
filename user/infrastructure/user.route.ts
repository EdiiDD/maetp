import express from "express";


import { UseCaseGetUserById } from "../application/useCaseGetUserById";
import { UserControler } from "./user.ctrl";

import { MongoRepository } from "./user.mongo.repository";
import { authMiddleware } from "../../share/middleware/sessions";

const router = express.Router()

const userRepository = new MongoRepository()
const useCaseGetUserById = new UseCaseGetUserById(userRepository)
const userControler = new UserControler(useCaseGetUserById)


router.get("/user/:id", authMiddleware, userControler.getByIdCtrl)

export default router