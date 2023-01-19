import { Schema, model } from "mongoose";
import { UserValue } from "../domain/user.value";


const UserSchema = new Schema<UserValue>(
	{
		nick_name: {
			type: String
		},
		email: {
			type: String,
			unique: true
		},
		password: {
			type: String,
			require: true
		},
		uuid: {
			type: String,
			unique: true
		}
	},
	{
		timestamps: true
	}
)

const UserModel = model("users", UserSchema)
export default UserModel
