import blogModel from "~~/schemas/Blogs";
import { BlogPost } from "~~/types/types";

export default defineEventHandler(async (event) => {
    const timestamp: string = event.context.params.timestamp;

    const result = await blogModel.findOne({timestamp: timestamp})

    return (result as BlogPost);
})