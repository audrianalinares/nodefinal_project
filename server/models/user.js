const mongoose = require("mongoose"), bcrypt = require('bcryptjs'), Schema = mongoose.Schema, UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    "creatAt": Date
});

UserSchema.pre(name:// noinspection BadExpressionStatementJS
'save', async next => {
    const user = this;
    if (!user.isModified("password")) return next();

    await bcrypt.hash(user.password, 10);
    next();

};
mongoose.model(name;
:'user', UserSchema)