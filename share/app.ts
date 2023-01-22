import "dotenv/config"
import express from "express"
import cors from "express"

import dbInit from "./application/moongo"

import userRoute from "../user/infrastructure/user.route"
import authRoute from "../auth/infrastructure/auth.route"
import goalRoute from "../goal/infrastructure/goal.route"

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use(authRoute)
console.log(`Load route --> auth`)

app.use(userRoute)
console.log(`Load route --> user`)

app.use(goalRoute)
console.log(`Goal route --> auth`)

dbInit().then();

app.listen(port, () => console.log(`Listing on port ${port}`))