import blogModel from "~~/schemas/Blogs";
import { BlogPost } from "~~/types/types";

export default defineEventHandler(async () => {
    const result = await blogModel.find({})

    return (result as BlogPost[]);
})