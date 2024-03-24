import joi from "joi";
export const projectSchema = joi.object({
    title: joi.string().required(),
    dateStart: joi.date().required(),
    dateEnd: joi.date().required(),
    description: joi.string().required(),
    linkGithub: joi.string().required(),
    images: joi.array().required(),
    languages: joi.array().required(),
    categoryId: joi.string().required(),
    hide: joi.boolean(),
    deleted: joi.boolean().default(false),
});
