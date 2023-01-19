import { Schema, model } from "mongoose";

const UserSchema = new Schema(
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
