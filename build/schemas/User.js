import { Schema, model, } from 'mongoose'








const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, { timestamps: true })

UserSchema.methods.fullName = () => {
    return `${this.firstName} ${this.lastName}`
}

export default model('User', UserSchema)
