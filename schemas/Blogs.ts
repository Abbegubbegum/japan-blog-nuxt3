import { Schema, model, InferSchemaType } from 'mongoose';

let blog = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        default: Date.now
    },
    content: [Schema.Types.Mixed]
});

export type IBlog = InferSchemaType<typeof blog>;

export default model('Blog', blog);