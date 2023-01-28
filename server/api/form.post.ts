import blogModel from "~~/schemas/Blogs";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    await blogModel.create(body);

    return "Blog Added!";
})