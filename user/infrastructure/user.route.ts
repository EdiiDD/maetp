import express from "express";

import { validateId }  from "./user.validator";

import { UseCaseGetUserById } from "../application/useCaseGetUserById";
import { UserControler } from "./user.ctrl";

import { MongoRepository } from "./user.mongo.repository";

const router = express.Router()

const userRepository = new MongoRepository()
const useCaseGetUserById = new UseCaseGetUserById(userRepository)
const userControler = new UserControler(useCaseGetUserById)


router.get("/user/:id", validateId , userControler.getByIdCtrl)

export default router