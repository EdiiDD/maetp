import "dotenv/config"
import express from "express"
import cors from "express"

import dbInit from "./application/moongo"

import userRoute  from "../user/infrastructure/user.route"
import authRoute  from "../auth/infrastructure/auth.route"

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())


app.use(userRoute)
app.use(authRoute)
console.log(`Load route --> user`)
console.log(`Load route --> auth`)

dbInit().then();

app.listen(port, () => console.log(`Listing on port ${port}`))