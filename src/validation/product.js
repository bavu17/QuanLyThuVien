import Joi from "joi";

export const productValid = Joi.object({
    title: Joi.string().required().min(3),
    img: Joi.string().required(),
    author: Joi.string().required().min(3),
    publisher: Joi.string().required().min(3),
    publicationYear: Joi.number().required(),
    genre: Joi.string().required().min(3),
});


