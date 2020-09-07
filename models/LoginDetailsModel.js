const mongoose = require("mongoose")

const schema= mongoose.Schema

const loginSchema = schema({
    username: { type: String, required: true },
    password: { type: String, required: true, trim: true }
    hashed: {type: String,}
},
{
timestamps: true,
}
)

const login = mongoose.model("login",loginSchema)

module.exports = login