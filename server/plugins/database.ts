import mongoose from "mongoose";

export default defineNitroPlugin( async (nitroApp) => {
    const config = useRuntimeConfig();

    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(config.DB_URI);
        console.log("Connected to database!");
    } catch (err) {
        console.error(err)
    }
})