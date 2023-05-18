import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", userSchema);

export { User };

// function validateUser(user) {
//   const schema = Joi.object({
//     name: Joi.string().min(3).required(),
//     email: Joi.string().required().email(),
//     password: Joi.string().min(8).max(16),
//   });
//   return schema.validate(user);
// }

// exports.User = User;
// exports.validate = validateUser;
