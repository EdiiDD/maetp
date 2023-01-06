import mongoose from "mongoose";

const DB_URI = `${process.env.DB_URI}`

const dbInit = async () => {
	try {
		mongoose.set("strictQuery", false)
		await mongoose.connect(DB_URI)
		console.log("Success connection to DB")
	} catch (e) {
		console.log(e)
	}
}

export default dbInit
