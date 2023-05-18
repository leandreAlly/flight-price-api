import Joi from "joi";

const flightValidationSchema = Joi.object({
  source: Joi.string().required().max(255),
  destination: Joi.string().required().max(255),
  date: Joi.date().required(),
  status: Joi.string().required(),
  companies: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
    })
  ),
});

const flightValidation = async (req, res, next) => {
  const { error } = flightValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).json({
      error: error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, ""),
    });
  }
  next();
};

export default flightValidation;
