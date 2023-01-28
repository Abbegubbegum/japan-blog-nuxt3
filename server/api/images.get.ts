import blogModel from "~~/schemas/Blogs";
import { Image, Paragraph } from "~~/types/types";
import aws from "aws-sdk";

aws.config.update({
	region: "eu-central-1",
	accessKeyId: process.env.ACCESS_KEY,
	secretAccessKey: process.env.SECRET_KEY,
});

const s3 = new aws.S3();

export default defineEventHandler(async (event) => {
    const blogs = await blogModel.find({});

    const images: string[] = [];

    blogs.forEach((blog) => {
        blog.content.forEach((item: Paragraph | Image) => {
            if (
                item.type === "img" &&
                !images.find((img) => img === (item as Image).path)
              ) {
                images.push((item as Image).path);
              }
        })
    })

    const miscImgs = await getImages();

    miscImgs.forEach((miscImg) => {
        if (!images.find((img) => img !== miscImg)) {
            images.push(miscImg);
        }
    });

    return images;
})

async function getImages() {
    const response = await s3
		.listObjectsV2({ Bucket: "japanblog-imgs" })
		.promise();

	const imageKeys: string[] = [];

	response.Contents?.forEach((content) => {
        if (content.Key) {
            imageKeys.push(content.Key);
        }
	});

	return imageKeys;
}